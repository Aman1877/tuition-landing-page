import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Classes from "@/components/Classes";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Footer from "@/components/Layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen scroll-smooth font-sans bg-gradient-to-br from-[#fffbea] via-[#f0f9ff] to-[#f0fdf4] text-gray-800">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="py-16 px-4 ">
        <About />
      </section>
      <section id="classes" className="py-16 px-4 bg-[#fef9c3]">
        <Classes />
      </section>
      <section id="testimonials" className="py-16 px-4 bg-[#ede9fe]">
        <Testimonials />
      </section>
      <section id="contact" className="py-16 px-4 bg-[#d1fae5]">
        <ContactForm />
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
