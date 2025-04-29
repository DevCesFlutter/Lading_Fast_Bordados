export default function AboutService() {
  return (
    <section className="bg-gray-100 py-20" id="servicio">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          ¿Por qué elegirnos?
        </h2>

        <ul className="space-y-6 text-left max-w-3xl mx-auto">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12l5 5L19 7"
              />
            </svg>
            Diseño personalizado para cada cliente.
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12l5 5L19 7"
              />
            </svg>
            Entrega rápida y precisa.
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-blue-600 mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12l5 5L19 7"
              />
            </svg>
            Calidad garantizada en cada diseño.
          </li>
        </ul>
      </div>
    </section>
  );
}
