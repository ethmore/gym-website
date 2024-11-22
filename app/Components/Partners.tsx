import Image, { StaticImageData } from "next/image";
import partner1 from "/public/partners/core_health_fitness.svg";
import partner2 from "/public/partners/technogym.svg";
import partner3 from "/public/partners/life_fitness.svg";
import partner4 from "/public/partners/sole_fitness.svg";
import partner5 from "/public/partners/rogue_fitness.svg";

type PartnerItem = {
    imgSrc: StaticImageData;
    imgAlt: string;
};

const data: PartnerItem[] = [
    {
        imgSrc: partner1,
        imgAlt: "core health",
    },
    {
        imgSrc: partner2,
        imgAlt: "technogym",
    },
    {
        imgSrc: partner3,
        imgAlt: "life fitness",
    },
    {
        imgSrc: partner4,
        imgAlt: "sole fitness",
    },
    {
        imgSrc: partner5,
        imgAlt: "rogue fitness",
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
    imgSrc: StaticImageData;
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
