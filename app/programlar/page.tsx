import Navbar from "../Components/Navbar";
import Pricing from "../Components/Pricing";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import ProgramsV2 from "../Components/Programs/ProgramsV2";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Programlar | AduroFit",
};

export default function Page() {
    return (
        <main>
            <Navbar darkMode active="/programlar" />
            <ProgramsV2 />
            <Pricing />
            <Contact />
            <Footer />
        </main>
    );
}
