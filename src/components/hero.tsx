import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Título */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          FastBordados
        </h1>

        {/* Subtítulo */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-6">
          Precisión, rapidez y estilo en cada puntada.
        </p>

        {/* Descripción */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          Personaliza tu ropa con parches e insignias oficiales.
          <br />
          ¡También trabajamos sobre prendas ya confeccionadas!
          <br />
          Contamos con logos de diversas instituciones — consulta si ya tenemos
          el tuyo y haz que tu identidad se luzca.
          <br />
          Ubicados en la comuna de Peñaflor, envíos a convenir.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/Fast_Bordados/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-700 transition"
          >
            Contáctanos por Instagram
          </a>
          <a
            href="https://wa.me/56965566678"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
