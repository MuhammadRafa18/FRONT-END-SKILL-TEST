import { Layouts } from "../Pages/Layouts";
import HeroSection from "../assets/HeroSection.jpg";
import { Link, Links, useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  return ( 
    <Layouts>
      <section  className="bg-gray-50">
        <div className="p-16 grid md:grid-cols-2  gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">  
              Temukan <span className="text-blue-600">resep favorit</span> kamu
            </h1>
            <p className="mt-4 text-gray-600">
              Cari, simpan, dan masak resep dari berbagai belahan dunia. Cepat,
              mudah, gratis.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                to="/Product"
                className="bg-blue-600 text-white px-5 py-3 rounded-lg"
              >
                Explore Product
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop"
              alt="Hidangan lezat"
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      <section id="summary" className="p-16">
        <h2 className="text-2xl font-semibold mb-6">Web App Food Recipe</h2>
        <p className="text-gray-600 max-w-3xl">
          Aplikasi ini membantu kamu menemukan resep berdasarkan kategori,
          bahan, dan asal kuliner. Tersedia pencarian cepat, detail bahan, serta
          tautan video memasak.
        </p>
        <div  className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="p-5 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Mudah Dipakai</h3>
            <p className="text-gray-600 text-sm mt-1">
              UI sederhana, navigasi jelas.
            </p>
          </article>
          <article className="p-5 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Gratis</h3>
            <p className="text-gray-600 text-sm mt-1">
              Akses bebas ke koleksi resep.
            </p>
          </article>
          <article className="p-5 bg-white rounded-xl shadow">
            <h3 className="font-semibold">Koleksi Beragam</h3>
            <p className="text-gray-600 text-sm mt-1">
              Resep dari berbagai negara.
            </p>
          </article>
        </div>
      </section>
    </Layouts>
  );
};
