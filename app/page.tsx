import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs/Programs";
import Services from "./Components/Services/ServicesMain";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";
import Partners from "./Components/Partners";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Partners className="relative md:absolute md:bottom-0 md:right-16" />
            <Programs />
            <Pricing />
            <Testimonials />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}
