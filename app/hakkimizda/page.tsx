import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import MeetCrew from "../Components/MeetCrew";
import AboutHero from "./AboutHero";
import About from "./About";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda | AduroFit",
};

export default function Page() {
    return (
        <main>
            <Navbar darkMode active="/hakkimizda" />
            <AboutHero />
            <About />
            <MeetCrew />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
}
