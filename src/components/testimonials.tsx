"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "El diseño de bordado fue exactamente lo que necesitábamos. ¡Excelente trabajo!",
    author: "Constanza Perez",
  },
  {
    quote:
      "Muy profesionales y rápidos. El bordado quedó perfecto en nuestras chaquetas.",
    author: "Luis González",
  },
  {
    quote: "Gran atención y resultados impecables. ¡Recomendado 100%!",
    author: "María Fernanda",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-20" id="testimonios">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Lo que dicen nuestros clientes
        </h2>

        <div className="relative h-48 md:h-56">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute w-full"
            >
              <blockquote className="text-2xl md:text-2xl text-gray-800 italic font-light leading-relaxed mt-4">
                “{testimonials[current].quote}”
              </blockquote>
              <p className="text-base md:text-lg font-semibold text-gray-700 mt-4">
                – {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
