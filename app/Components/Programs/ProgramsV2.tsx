import React from "react";
import { ProgramCard } from "./Programs";
import ProgramsCard from "./ProgramsCard";

const data: ProgramCard[] = [
    {
        href: "/programlar/evde_fitness",
        imgSrc: "./programs2.webp",
        imgAlt: "bir kutunun üzerine atlayan kadın",
        title: "Evde Fitness",
    },
    {
        href: "/programlar/calisthenics",
        imgSrc: "./programs1.webp",
        imgAlt: "egzersiz halkalarıyla şınav çeken sarışın kadın",
        title: "Calisthenics",
    },
    {
        href: "/programlar/bodybuilding",
        imgSrc: "./programs3.webp",
        imgAlt: "bir kadın dambıllarla bench press yapıyor, bir adam ona yardım ediyor",
        title: "Bodybuilding",
    },
];

export default function ProgramsV2() {
    return (
        <section id="programs" className="w-[min(1100px,90%)] m-auto mt-36">
            <h1 className="text-4xl xl:text-5xl w-fit m-auto">
                Ücretsiz Egzersiz Programları
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 justify-center justify-items-center mt-16">
                {data.map((item, index) => {
                    return (
                        <ProgramsCard
                            key={index}
                            href={item.href}
                            imgSrc={item.imgSrc}
                            imgAlt={item.imgAlt}
                            title={item.title}
                        />
                    );
                })}
            </div>
        </section>
    );
}
