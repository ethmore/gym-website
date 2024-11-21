"use client";
import ServiceCard from "./ServiceCard";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-300px 0px" });

    return (
        <section ref={ref} className="m-auto mt-[200px] ">
            <h1 className="text-4xl md:text-5xl text-center">Hizmetlerimiz</h1>
            <div
                className={`services relative flex flex-col gap-5 md:gap-0 md:flex-row w-[min(1000px,80%)] h-[1000px] md:h-[600px] mx-auto mt-5 transition-all duration-300 ${
                    isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                }`}
                style={{ perspective: 2500 }}>
                <ServiceCard
                    href="/hizmetlerimiz"
                    imgSrc="/services1.webp"
                    imgAlt="Bir adam halter kaldırmak üzere deadlift pozisyonunda."
                    title="Kişisel Antrenman"
                    description="Uzman antrenörlerimizle hedeflerinize uygun antrenman programları oluşturuyoruz."
                />
                <ServiceCard
                    href="/hizmetlerimiz"
                    imgSrc="/services2.webp"
                    imgAlt="El üstü dururken bacak açma hareketi yapan bir kadın."
                    title="Fonksiyonel Antrenman"
                    description="Günlük hayatınızdaki hareketleri güçlendirecek dinamik ve etkili egzersiz programları sunuyoruz."
                />
                <ServiceCard
                    href="/hizmetlerimiz"
                    imgSrc="/services3.webp"
                    imgAlt="Bir kadın halatlarla egzersiz yapıyor"
                    title="Fitness Değerlendirmesi"
                    description="Fitness seviyenizi analiz ederek, hedeflerinize yönelik en doğru programı oluşturuyoruz."
                />
            </div>
        </section>
    );
}
