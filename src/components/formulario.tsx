export default function ContactForm() {
  return (
    <section className="py-20 bg-white" id="contacto">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Envia Tu consulta
        </h2>

        <form
          className="space-y-4 px-6 py-4 bg-gray-50 rounded-md shadow-md max-w-xl mx-auto"
          action={"https://formsubmit.co/cesdevs010@gmail.com"}
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://fastbordados.vercel.app/"
          />

          <input
            name="name"
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
