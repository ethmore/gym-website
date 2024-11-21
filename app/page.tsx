import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs/Programs";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Programs />
            <Pricing />
            <Testimonials />
            <Services />
            <Contact />
            <Footer />
        </main>
    );
}
