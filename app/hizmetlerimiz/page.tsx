import Navbar from "../Components/Navbar";
import WhyChooseUs from "../Components/WhyChooseUs";
import Programs from "../Components/Programs/Programs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ServicesAccordion from "../Components/Services/ServicesAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz | AduroFit",
};

export default function Page() {
    return (
        <main>
            <Navbar darkMode active="/hizmetlerimiz" />
            <ServicesAccordion />
            <WhyChooseUs />
            <Programs />
            <Contact />
            <Footer />
        </main>
    );
}
