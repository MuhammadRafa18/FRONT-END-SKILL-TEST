import React from "react";
import { Layouts } from "../Pages/Layouts";
import HeroSection from "../assets/HeroSection.jpg";

export const About = () => {
  return (
    <Layouts>
      <section className="px-8 md:px-16 py-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            About Our Recipe App 🍲
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Temukan berbagai resep makanan dari seluruh dunia dengan mudah.
            Aplikasi ini membantu kamu mencari inspirasi masakan, lengkap dengan
            bahan, langkah, dan video tutorial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src={HeroSection}
            alt="Cooking Illustration"
            className="rounded-2xl shadow-md"
          />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Kenapa memilih kami?
            </h2>
            <p className="text-gray-600">
              Web resep ini hadir untuk memudahkan kamu menemukan ide memasak.
              Mulai dari menu sehari-hari hingga hidangan spesial, semua
              tersedia gratis dan mudah dicoba.
            </p>
            <p className="text-gray-600">
              Selain itu, kami menyediakan fitur pencarian agar kamu bisa dengan
              cepat menemukan resep sesuai bahan atau selera.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Butuh bantuan? Hubungi Customer Service
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:support@recipeapp.com"
              className="text-blue-600 hover:underline"
            >
              📧 rafaalmaqdis53@gmil.com
            </a>
            <a
              href="https://wa.me/627715371583"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              💬 WhatsApp CS
            </a>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
