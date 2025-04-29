export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Instagram
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
