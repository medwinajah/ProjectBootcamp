import Image from "next/image";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const image = [
    { image: "image/image-1.png" },
    { image: "image/image-2.png" },
    { image: "image/image-3.png" },
    { image: "image/image-4.png" },
    { image: "image/image-5.png" },
    { image: "image/image-6.png" },
  ];
  return (
    <>
     
        <Navbar />
        <div className="bg-linear-to-br from-cyan-500 via-sky-600 to-white min-h-screen flex items-center">
        <div
          id="home"
          className=" flex flex-col gap-6 max-w-4xl m-auto justify-center"
        >
          <p className="text-sm text-white px-3 py-1  w-fit rounded-xl bg-cyan-500">
            Informasi Tentang Saya
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="text-white font-bold text-4xl tracking-wide font-sans">
              Hallo, Saya Medwin Alfredo Silalahi
            </h1>
            <h1 className="text-sky-100  text-lg tracking-wide font-sans">
              Fullstcak web developer{" "}
            </h1>
          </div>
          <div>
            <p className="text-gray-100 leading-7">
              Halaman website ini saya buat sebagai bukti project yang saya
              ikuti selama pertemuan 5 hari Event Online - DSF 54.0 FWD, FE, BE{" "}
              <span className="font-bold p-1 border border-gray-300 rounded-xl">
                Dibimbing
              </span>{" "}
              yang membawa insight menarik baik dalam hal pekerjaan dan juga
              kondisi industri saat ini dan masih banyak hal seru lainnya.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button className="h-10 p-4 rounded-full bg-cyan-500 hover:bg-cyan-500/80 transition text-white flex items-center justify-center font-semibold">
              Projects
            </button>
            <button className="h-10 p-4 border border-gray-300 border-dotted flex items-center justify-center rounded-full bg-gray-100 text-sm font-semibold tracking-wide text-gray-500 hover:bg-gray-200 transition">
              Kontak Saya
            </button>
          </div>
        </div>
        </div>
     
      {/* Tentang Kegiatan */}
      <div className="p-4 py-10 " id="keseruanprogram">
        <p className="text-center font-semibold text-gray-600 tracking-wide uppercase w-fit mx-auto mb-1">
          Keseruan Program
        </p>
        <p className="text-center  px-4 py-1  rounded-xl  shadow-g mx-auto font-bold text-4xl text-cyan-500  mb-8">
          Dibimbing
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8  mx-auto p-2 container  rounded-xl">
          {image.map((img, index) => (
            <div
              key={index}
              className="p-2 overflow-hidden border border-gray-300 rounded-xl hover:scale-102 transition duration-200 hover:opacity-95 hover:shadow-cyan-100 hover:shadow"
            >
              <img
                src={img.image}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <main className="flex flex-col flex-wrap mx-auto">
        <Contact />
      </main>
      <Footer/>
    </>
  );
}
