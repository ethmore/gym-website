"use client";
import Image from "next/image";
import Navbar from "../Components/Navbar";
import WhyChooseUs from "../Components/WhyChooseUs";
import Programs from "../Components/Programs/Programs";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { fromBottom, fromRight, toOriginal } from "../Components/anim";

const cardData = [
    {
        title: "Kişisel Antrenman",
        content:
            "Uzman antrenörlerimizle hedeflerinize uygun birebir antrenman programları oluşturuyoruz.",
    },
    {
        title: "Grup Dersleri",
        content:
            "Yoga, Pilates, Zumba gibi farklı grup dersleriyle sosyalleşirken formunuzu koruyun.",
    },
    {
        title: "Fonksiyonel Antrenman",
        content:
            "Günlük hayatınızdaki hareketleri güçlendirecek dinamik ve etkili egzersiz programları sunuyoruz.",
    },
    {
        title: "Beslenme Danışmanlığı",
        content:
            "Sağlıklı bir yaşam tarzı için kişisel ihtiyaçlarınıza uygun beslenme rehberliği sağlıyoruz.",
    },
    {
        title: "Fitness Değerlendirmesi",
        content:
            "Fitness seviyenizi analiz ederek, hedeflerinize yönelik en doğru programı oluşturuyoruz.",
    },
    {
        title: "Ücretsiz Deneme Dersi",
        content:
            "Salonumuzun atmosferini keşfetmek isteyen yeni üyeler için ücretsiz deneme dersleri sunuyoruz.",
    },
];

function page() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    return (
        <main>
            <Navbar darkMode active="services" />
            <section
                ref={ref}
                className="mt-36 w-[min(1100px,90%)] m-auto relative flex flex-col md:flex-row gap-8">
                <div className="flex flex-col justify-end">
                    <h1
                        className={`text-end text-4xl mb-4 transition-all duration-500 ${
                            !isInView ? fromBottom : toOriginal
                        }`}>
                        HİZMETLERİMİZ
                    </h1>
                    <Accordion />
                </div>
                <div
                    className={`hidden md:block w-[600px] h-[600px] relative shrink-0 transition-all duration-700 ${
                        !isInView ? fromRight : toOriginal
                    }`}>
                    <Image
                        src={"/services_main.webp"}
                        alt={""}
                        fill
                        className="object-cover rounded-[60px]"
                    />
                </div>
            </section>
            <WhyChooseUs />
            <Programs />
            <Contact />
            <Footer />
        </main>
    );
}

function Accordion() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const handleItemClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <ul
            ref={ref}
            className={`transition-all duration-1000 ${
                !isInView ? fromBottom : toOriginal
            }`}>
            {cardData.map((data, index) => {
                return (
                    <AccordionItem
                        key={index}
                        index={index}
                        title={data.title}
                        content={data.content}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                );
            })}
        </ul>
    );
}

interface Props {
    title: string;
    content: string;
    isOpen: boolean;
    index: number;
    onClick: () => void;
}

function AccordionItem(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });
    const accordionRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLParagraphElement>(null);
    return (
        <li
            ref={ref}
            className={`overflow-hidden transition-all duration-700 ${
                !isInView ? fromBottom : toOriginal
            }`}>
            <button
                className="w-full p-4 flex items-center justify-between cursor-pointer border-b-4 border-neutral-700 text-[1.3rem]"
                ref={accordionRef}
                onClick={props.onClick}>
                <h2>{props.index + 1}</h2>
                <div className="flex items-center gap-4 ">
                    <h2>{props.title}</h2>
                    <svg
                        className="w-4 h-4 text-gray-800 transition-all duration-300"
                        style={
                            props.isOpen
                                ? { rotate: "180deg" }
                                : { rotate: "0deg" }
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                        />
                    </svg>
                </div>
            </button>

            <div
                ref={panelRef}
                className="transition-all duration-300"
                style={
                    props.isOpen
                        ? { height: panelRef.current?.scrollHeight }
                        : { height: "0px" }
                }>
                <p className="p-4 pl-16">{props.content}</p>
            </div>
        </li>
    );
}

export default page;
