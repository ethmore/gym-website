import Image from "next/image";

type PartnerItem = {
    imgSrc: string;
    imgAlt: string;
};

const data: PartnerItem[] = [
    {
        imgSrc: "/partners/core_health_fitness.svg",
        imgAlt: "",
    },
    {
        imgSrc: "/partners/technogym.svg",
        imgAlt: "",
    },
    {
        imgSrc: "/partners/life_fitness.svg",
        imgAlt: "",
    },
    {
        imgSrc: "/partners/sole_fitness.svg",
        imgAlt: "",
    },
    {
        imgSrc: "/partners/rogue_fitness.svg",
        imgAlt: "",
    },
];

interface Props {
    className?: string;
}

export default function Partners(props: Props) {
    return (
        <div
            className={`flex flex-wrap p-4 gap-6 md:gap-12 justify-center items-center ${props.className}`}>
            {data.map((data, index) => {
                return (
                    <PartnersItem
                        key={index}
                        imgSrc={data.imgSrc}
                        imgAlt={data.imgAlt}
                    />
                );
            })}
        </div>
    );
}

interface ItemProps {
    imgSrc: string;
    imgAlt: string;
}

function PartnersItem(props: ItemProps) {
    return (
        <Image
            src={props.imgSrc}
            alt={props.imgAlt}
            width={100}
            height={50}
            className="contrast-0 object-contain w-[75px] md:w-[100px]"
        />
    );
}
