"use client";
import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal mengirim pesan.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  }
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
          Contact
        </h2>
        <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
          Punya proyek atau ide? Kirim pesan.
        </h3>

        {/*
          Form ini sekarang beneran tersambung ke server: submit -> fetch POST
          ke /api/contact -> API route nyimpen data ke database SQLite lewat Prisma.
        */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Ceritakan proyek atau kebutuhan kamu..."
              required
              className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark disabled:opacity-60"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "success" && (
            <p className="text-sm font-medium text-green-600">
              Pesan terkirim! Terima kasih sudah menghubungi.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600">
              Gagal mengirim pesan: {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
