import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Diseño de Matrices de Bordado Personalizadas
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-gray-600 mb-8">
          Transformamos tus ideas en patrones de bordado precisos y listos para
          usar.
        </p>

        {/* Botón de llamada a la acción */}
        <a
          href="#contacto"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-fuchsia-500 transition"
        >
          Solicita tu diseño
        </a>
      </div>
    </section>
  );
}
