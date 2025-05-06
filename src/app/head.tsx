// app/head.tsx
export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Pagina de bordados perzonalizados peñaflor talagante"
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="FastBordados – Bordados en Peñaflor y Talagante"
      />
      <meta
        property="og:description"
        content="Tienda profesional de bordados personalizados. Calidad, precisión y estilo en cada diseño."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://fastbordados.vercel.app" />

      <link rel="icon" href="/logo.png" />
    </>
  );
}
