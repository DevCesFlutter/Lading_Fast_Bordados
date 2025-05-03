export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-white">
        <p>&copy; 2025 CesDevs-FastBordados Todos los derechos reservados.</p>
        <div className="mt-4 space-x-4">
          <a
            href="https://wa.me/56965566678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Whatsapp
          </a>
          <a
            href="https://www.instagram.com/Fast_Bordados/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
