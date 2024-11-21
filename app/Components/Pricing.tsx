"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";

const data = [
    {
        title: "Başlangıç Paketi",
        description:
            "Yeni başlayanlar veya haftada birkaç gün spor yapmak isteyenler için idealdir.",
        benefits: [
            "Haftada 3 gün sınırsız gym kullanımı",
            "Ayda 1 defa ücretsiz fitness değerlendirmesi",
            "Temel grup derslerine katılım (Yoga, Zumba, Kardiyo)",
            "Kişisel hedefleri belirlemek için başlangıç danışmanlığı",
        ],
        extras: ["İlk ay, profesyonel bir eğitmenle ücretsiz 1 özel ders."],
    },
    {
        title: "Sınırsız Paket",
        description:
            "Sık sık antrenman yapmayı seven ve tam erişim isteyenler için en uygun pakettir.",
        benefits: [
            "Haftanın her günü sınırsız gym kullanımı",
            "Ayda 2 defa fitness değerlendirmesi ve vücut analizleri",
            "Grup derslerine sınırsız katılım (Pilates, CrossFit, Yoga, Spinning)",
            "Kişiye özel program oluşturma ve aylık güncelleme",
        ],
        extras: ["Ücretsiz sauna ve buhar odası kullanımı, %10 masaj indirimi"],
    },
    {
        title: "VIP Paket",
        description:
            "Kişiye özel, tamamen ihtiyaca yönelik çözümler sunan premium pakettir.",
        benefits: [
            "Haftanın her günü sınırsız gym kullanımı ve özel fitness alanı erişimi",
            "Haftalık fitness değerlendirmesi ve diyet programı",
            "Kişisel antrenörle haftada 2 özel ders",
            "Tüm grup derslerine sınırsız katılım ve öncelikli rezervasyon",
        ],
        extras: [
            "Özel soyunma dolabı, ücretsiz masaj hizmeti (ayda 1), tüm ek hizmetlerde %15 indirim.",
        ],
    },
];

function Pricing() {
    return (
        <section className="w-[min(1100px,95%)] m-auto mt-36 lg:p-8 xl:p-0">
            <h1 className="text-center text-4xl">
                Hedeflerinize Ulaşmak İçin İlk Adımı Atın!
            </h1>
            <p className="text-center w-2/3 m-auto mt-4">
                Her seviyeden sporcuya uygun üyelik paketlerimizle yanınızdayız.
                İster yeni başlıyor olun, ister ileri seviye bir spor tutkunu,
                ihtiyaçlarınıza göre bir seçenek mutlaka burada!
            </p>
            <div className="grid lg:grid-cols-3 gap-3 mt-14 lg:mt-28">
                {data.map((item, i) => {
                    return (
                        <Card
                            key={i}
                            title={item.title}
                            description={item.description}
                            benefits={item.benefits}
                            extras={item.extras}
                            callToActionText={
                                i === 1 ? "Ücretsiz Dene!" : "Şimdi Başla!"
                            }
                            active={i === 1 ? true : false}
                        />
                    );
                })}
            </div>
        </section>
    );
}

interface Props {
    className?: string;
    active?: boolean;
    title: string;
    description: string;
    benefits: string[];
    extras: string[];
    callToActionText: string;
}

function Card(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    return (
        <div
            ref={ref}
            style={
                props.active
                    ? {
                          zIndex: "10",
                      }
                    : {}
            }>
            <div
                className={`h-full p-8 border-2 rounded-2xl grid grid-cols-1 transition-all duration-300 ${
                    isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                } ${props.active ? "lg:scale-110" : "delay-200"}`}
                style={
                    props.active
                        ? {
                              background:
                                  "linear-gradient(163deg, rgba(255,153,27,1) 26%, hsl(33, 100%, 75%) 100%)",
                              zIndex: "10",
                          }
                        : { backgroundColor: "" }
                }>
                <h2 className="text-center text-2xl">{props.title}</h2>
                <p className="lg:text-xs xl:text-sm mt-4 mb-8">
                    {props.description}
                </p>
                <div className="lg:text-sm xl:text-base">
                    {props.benefits.map((benefit, i) => {
                        return <p key={i}>✔ {benefit}</p>;
                    })}
                </div>
                <div className="mt-8 lg:text-sm xl:text-base">
                    {props.extras.map((extra, i) => {
                        return (
                            <p key={i}>
                                <b>Ekstra: </b>
                                {extra}
                            </p>
                        );
                    })}
                </div>
                <a
                    href="#contact"
                    className="px-8 py-2 w-fit m-auto mt-8 rounded-lg hover:scale-105 transition-all lg:text-sx xl:text-base"
                    style={
                        props.active
                            ? { backgroundColor: "#3C3C3C", color: "#ffffff" }
                            : { backgroundColor: "var(--primary)" }
                    }>
                    {props.callToActionText}
                </a>
            </div>
        </div>
    );
}

export default Pricing;
