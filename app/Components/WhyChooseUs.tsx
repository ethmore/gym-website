"use client";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fromBottom, fromLeft, fromRight, toOriginal } from "../../lib/anim";

type WhyChooseUsItem = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    content: string;
};

const data: WhyChooseUsItem[] = [
    {
        iconSrc: "/schedule-calendar-svgrepo-com.svg",
        iconAlt: "Takvim ikonu",
        title: "Kişiye Özel Programlar",
        content:
            "Hedeflerinize ve yaşam tarzınıza uygun programlarla yolunuzu aydınlatıyoruz.",
    },
    {
        iconSrc: "/gym-svgrepo-com.svg",
        iconAlt: "Dambıl ikonu",
        title: "Modern Ekipman ve Alanlar",
        content:
            "En güncel ekipmanlar ve geniş, ferah alanlarda konforlu bir deneyim sunuyoruz.",
    },
    {
        iconSrc: "/people-svgrepo-com.svg",
        iconAlt: "Grup ikonu",
        title: "Destekleyici Topluluk",
        content:
            "Kendinizi güçlü hissetmeniz ve hep daha fazlasını başarmanız için motive edici bir ortam sağlıyoruz.",
    },
    {
        iconSrc: "/pricing-workspace-svgrepo-com.svg",
        iconAlt: "Fiyat etiketi ikonu",
        title: "Esnek Üyelik Seçenekleri",
        content:
            "İhtiyacınıza uygun üyelik paketleri ve esnek süre seçenekleriyle spor yapmayı hayatınıza kolayca entegre etmenizi sağlıyoruz.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="w-[min(1100px,90%)] m-auto mt-48 ">
            <h1 className="text-4xl mb-8">Neden AduroFit? </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
                <Card
                    iconSrc={data[0].iconSrc}
                    iconAlt={data[0].iconAlt}
                    title={data[0].title}
                    content={data[0].content}
                    className="bg-slate-100 delay-100"
                    animation={fromLeft}
                />
                <Card
                    iconSrc={data[1].iconSrc}
                    iconAlt={data[1].iconAlt}
                    title={data[1].title}
                    content={data[1].content}
                    className="bg-slate-100"
                    animation={fromLeft}
                />
                <Card
                    iconSrc={data[2].iconSrc}
                    iconAlt={data[2].iconAlt}
                    title={data[2].title}
                    content={data[2].content}
                    className="md:row-start-1 md:row-end-3 md:col-start-3 md:col-end-4 bg-slate-800 text-white"
                    callToAction={true}
                    animation={fromRight}
                />
                <Card
                    iconSrc={data[3].iconSrc}
                    iconAlt={data[3].iconAlt}
                    title={data[3].title}
                    content={data[3].content}
                    className="md:col-start-1 md:col-end-3 bg-slate-100"
                    animation={fromBottom}
                />
            </div>
        </section>
    );
}

interface Props {
    className?: string;
    iconSrc: string;
    iconAlt: string;
    title: string;
    content: string;
    callToAction?: boolean;
    animation?: string;
}

function Card(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className={`flex flex-col gap-4 p-8 border-2 rounded-2xl h-full w-full transition-all duration-1000 ${
                props.className
            } ${!isInView ? props.animation : toOriginal}`}>
            <Image
                src={props.iconSrc}
                className="w-12 h-12"
                alt={props.iconAlt}
                width={50}
                height={50}
            />
            <h2 className="text-xl">{props.title}</h2>
            <p>{props.content}</p>
            {props.callToAction ? (
                <a
                    className="flex gap-3 bg-primary text-black font-semibold px-5 py-3 rounded-md w-fit mt-8 group transition-all hover:scale-105 hover:shadow-md"
                    href="#contact">
                    Bugün Başlayın
                    <svg
                        className="w-6 group-hover:ml-1 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve">
                        <path
                            id="XMLID_27_"
                            d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255  s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0  c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"
                        />
                    </svg>
                </a>
            ) : (
                ""
            )}
        </div>
    );
}
