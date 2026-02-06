import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Collections from "./components/Collections";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <main className="relative">
        <div id="hero">
          <Hero />
        </div>
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="collections">
          <Collections limit={4} showLink={true} />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
