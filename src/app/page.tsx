import Hero from "@/components/hero";
import Header from "@/components/header";
import AboutService from "@/components/servicio";
import Gallery from "@/components/galery";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/formulario";
import Footer from "@/components/footer";
import Imagen from "@/components/imagehero";
import ComoPedir from "@/components/how";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ComoPedir />
      <Imagen />
      <AboutService />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <div></div>
    </div>
  );
}
