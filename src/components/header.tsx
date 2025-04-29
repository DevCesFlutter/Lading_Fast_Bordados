"use client";

import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* TItulo */}
        <div>
          <img
            src="https://i.imgur.com/od6Vuyt.png"
            alt="Muestra de bordado"
            className=" w-30 h-30  mx-auto mt-8 rounded-4xl"
          />
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {/* Icono de tres líneas */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>

        {/* Navegación */}
        <nav className={`space-x-6 md:flex ${menuOpen ? "block" : "hidden"}`}>
          <a
            href="#servicios"
            className="block text-gray-600 hover:text-blue-600 transition py-2 md:py-0 font-bold"
          >
            Servicios
          </a>
          <a
            href="#portafolio"
            className="block text-gray-600 hover:text-blue-600 transition py-2 md:py-0 font-bold"
          >
            Portafolio
          </a>
          <a
            href="#contacto"
            className="block text-gray-600 hover:text-blue-600 transition py-2 md:py-0 font-bold"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
