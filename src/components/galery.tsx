export default function Gallery() {
  return (
    <section className="py-20 bg-white" id="portafolio">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Galería de Trabajos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src="https://i.imgur.com/WIL3Hr0.png"
            alt="Bordado 1"
            className="w-50 h-50 rounded-md shadow-lg"
          />
          <img
            src="https://via.placeholder.com/500"
            alt="Bordado 2"
            className="w-max h-auto rounded-md shadow-lg"
          />
          <img
            src="https://via.placeholder.com/500"
            alt="Bordado 3"
            className="w-full h-auto rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
