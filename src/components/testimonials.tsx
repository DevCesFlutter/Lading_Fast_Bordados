export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-20" id="testimonios">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Lo que dicen nuestros clientes
        </h2>

        <div className="space-y-6">
          <blockquote className="text-lg text-gray-600 italic">
            "El diseño de bordado fue exactamente lo que necesitábamos.
            ¡Excelente trabajo!"
          </blockquote>
          <p className="text-sm font-semibold text-gray-800">- Juan Pérez</p>
        </div>
      </div>
    </section>
  );
}
