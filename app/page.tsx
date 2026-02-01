import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <AboutUs />
        <Collections />
        <Gallery />
        <FAQ />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
