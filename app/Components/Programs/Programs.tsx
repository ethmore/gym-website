import ProgramsCard from "./ProgramsCard";
import programImage1 from "/public/programs1.webp";
import programImage2 from "/public/programs2.webp";
import programImage3 from "/public/programs3.webp";
import { StaticImageData } from "next/image";

export type ProgramCard = {
    href: string;
    imgSrc: StaticImageData;
    imgAlt: string;
    title: string;
};

const data: ProgramCard[] = [
    {
        href: "/programlar/evde_fitness",
        imgSrc: programImage2,
        imgAlt: "bir kutunun üzerine atlayan kadın",
        title: "Evde Fitness",
    },
    {
        href: "/programlar/calisthenics",
        imgSrc: programImage1,
        imgAlt: "egzersiz halkalarıyla şınav çeken sarışın kadın",
        title: "Calisthenics",
    },
    {
        href: "/programlar/bodybuilding",
        imgSrc: programImage3,
        imgAlt: "bir kadın dambıllarla bench press yapıyor, bir adam ona yardım ediyor",
        title: "Bodybuilding",
    },
];

export default function Programs() {
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
