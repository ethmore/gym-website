"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { fromBottom, fromRight, toOriginal } from "../../../lib/anim";
import Accordion, { accordionData } from "../Accordion";

const cardData: accordionData[] = [
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

export default function ServicesAccordion() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    return (
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
                <Accordion data={cardData} />
            </div>
            <div
                className={`hidden md:block w-[600px] h-[600px] relative shrink-0 transition-all duration-700 ${
                    !isInView ? fromRight : toOriginal
                }`}>
                <Image
                    src={"./services_main.webp"}
                    alt={""}
                    fill
                    className="object-cover rounded-[60px]"
                />
            </div>
        </section>
    );
}
