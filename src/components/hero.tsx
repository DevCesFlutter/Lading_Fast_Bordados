import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          FastBordados
        </h1>
        <h5>Estamos ubicados en peñaflor</h5>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-8">
          Precisión, rapidez y estilo en cada puntada.
        </p>
        <p className="text-lg text-gray-600 mb-8 ">
          Personaliza tu ropa con parches e insignias oficiales.
          <br /> ¡También trabajamos sobre prendas ya confeccionadas! <br />
          Contamos con logos de diversas instituciones <br />
          consulta si ya tenemos el tuyo y haz que tu identidad se luzca.
        </p>

        {/* Botón de llamada a la acción */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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
