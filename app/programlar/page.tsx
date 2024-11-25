import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Programs from "../Components/Programs/Programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Programlar | AduroFit",
};

export default function Page() {
    return (
        <main>
            <Navbar darkMode active="/programlar" />
            <Programs />
            <Pricing />
            <Contact />
            <Footer />
        </main>
    );
}
