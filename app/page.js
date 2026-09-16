import Image from "next/image";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

export default function Home() {
  return (
      <div>
        <Navbar/>
        <main className="flex flex-col flex-wrap container mx-auto">
          <div className="mt-40 px-20 flex flex-col gap-6">
            <p className="text-sm text-white px-3 py-1 border border-cyan-700 border-dashed w-fit rounded-xl bg-cyan-500">Informasi Tentang Saya</p>
            <div>
            <h1 className="text-cyan-500 font-bold text-2xl tracking-wide font-sans">Hallo, Saya Medwin Alfredo Silalahi</h1>
            <h1 className="text-black font-semibold text-lg tracking-wide font-sans">saya adalah fullstcak web developer</h1>
            </div>
            <div>
              <p className="text-gray-500">Berbagai project web sistem informasi telah saya buat. Mulai dari web sistem reservasi sewa lapangan futsal  hingga project sistem analisis keuangan yang lengkap dengan grafik informasi yang dapat difilter berdasarkan harian, mingguan, bulan dan tahun.</p>
            </div>

            <div className="flex items-center gap-5">
              <button className="h-10 p-4 rounded-xl bg-cyan-600 text-white flex items-center justify-center font-semibold">Projects</button>
              <button className="h-10 p-4 border border-gray-300 border-dotted flex items-center justify-center rounded-xl bg-gray-100">contact</button>
            </div>
          </div>

          <Contact/>
        </main>
      </div>
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <Navbar/>
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert h-5 w-[100px]"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //        Ini Adalah Web Medwin{" "}
    //         <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
    //           page.js
    //         </code>{" "}
    //         file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert h-[14px] w-4"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={14}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
