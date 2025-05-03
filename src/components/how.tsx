"use client";

import { motion } from "framer-motion";
import { Send, Image, Palette, PackageCheck } from "lucide-react";

const pasos = [
  {
    icono: <Send className="w-10 h-10 text-pink-600" />,
    titulo: "Escríbenos por Instagram",
    descripcion:
      "Contáctanos directamente para comenzar tu pedido personalizado.",
  },
  {
    icono: <Image className="w-10 h-10 text-pink-600" />,
    titulo: "Envíanos tu diseño o idea",
    descripcion: "Mándanos tu logo, dibujo o referencia para el bordado.",
  },
  {
    icono: <Palette className="w-10 h-10 text-pink-600" />,
    titulo: "Elegimos materiales y colores",
    descripcion:
      "Te ayudamos a escoger los hilos, telas y combinaciones perfectas.",
  },
  {
    icono: <PackageCheck className="w-10 h-10 text-pink-600" />,
    titulo: "Producción y entrega",
    descripcion: "Realizamos el bordado y coordinamos la entrega contigo.",
  },
];

export default function ComoPedir() {
  return (
    <section className="py-20 bg-white" id="como-pedir">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">¿Cómo pedir?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{paso.icono}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {paso.titulo}
              </h3>
              <p className="text-gray-600 text-sm">{paso.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
