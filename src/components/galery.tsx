"use client";
import { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  { src: "terranova.JPG", alt: "Colegio Terra Nova" },
  { src: "pig.JPG", alt: "Cerdita Profesora" },
  { src: "redlour.JPG", alt: "Red Lourdista" },
  { src: "wood.PNG", alt: "Wood_Audio" },
  { src: "rick.PNG", alt: "Rick Y Morty" },
  { src: "hongo.PNG", alt: "Hongo Pixel" },
  { src: "ucdc.PNG", alt: "Universidad Catolica" },
  { src: "unab.PNG", alt: "U.N.A.B" },
  { src: "colo.PNG", alt: "Colo-Colo" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <section className="py-20 bg-white" id="portafolio">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Algunos de nuestros diseños
        </h2>

        <div className="overflow-x-auto">
          <div className="flex gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                onClick={() => setSelectedImage(img)}
                className="w-72 h-72 object-cover rounded-md shadow-lg cursor-pointer hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="bg-white p-4 rounded-md max-w-xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded"
              />
              <p className="mt-2 text-gray-700">{selectedImage.alt}</p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => setSelectedImage(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
