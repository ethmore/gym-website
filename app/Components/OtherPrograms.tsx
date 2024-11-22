import Image from "next/image";

type OtherProgramItem = {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    href: string;
};

const data: OtherProgramItem[] = [
    {
        imgSrc: "./programs2.webp",
        imgAlt: "egzersiz halkalarıyla şınav çeken sarışın kadın",
        title: "Evde Fitness",
        description:
            "Vücut ağırlığıyla genel kuvvet ve dayanıklılık artırma, vücut şekillendirme.",
        href: "/programlar/evde_fitness",
    },
    {
        imgSrc: "./programs1.webp",
        imgAlt: "bir kutunun üzerine atlayan kadın",
        title: "Calisthenics",
        description:
            "Kas kütlesi artırma, dayanıklılık geliştirme, vücut kontrolünü iyileştirme.",
        href: "/programlar/calisthenics",
    },
    {
        imgSrc: "./programs3.webp",
        imgAlt: "bir kadın dambıllarla bench press yapıyor, bir adam ona yardım ediyor",
        title: "Bodybuilding",
        description: "Kas kütlesi artırma, vücut kompozisyonunu iyileştirme.",
        href: "/programlar/bodybuilding",
    },
];

export default function OtherPrograms() {
    return (
        <aside className="absolute right-0 translate-x-[130%]">
            <h1 className="text-xl mb-4">Ücretsiz Programlar</h1>
            <div className="flex flex-col gap-4">
                {data.map((data, index) => {
                    return (
                        <Card
                            key={index}
                            imgSrc={data.imgSrc}
                            imgAlt={data.imgAlt}
                            title={data.title}
                            description={data.description}
                            href={data.href}
                        />
                    );
                })}
            </div>
        </aside>
    );
}

interface CardProps {
    title: string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    href: string;
}

function Card(props: CardProps) {
    return (
        <a
            className="w-[250px] 2xl:w-[300px] border-2 rounded-lg p-2"
            href={props.href}>
            <h2 className="text-lg">{props.title}</h2>
            <div className="flex gap-2 mt-2">
                <Image
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width={200}
                    height={200}
                    className="w-24 h-24 object-cover shrink-0 rounded-lg"
                />
                <p className="text-xs">{props.description}</p>
            </div>
        </a>
    );
}
