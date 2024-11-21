import Image from "next/image";

const data = [
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

function Partners(props: Props) {
    return (
        <div
            className={`flex flex-col md:flex-row gap-6 md:gap-12 justify-center ${props.className}`}>
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
            className="contrast-0 object-contain w-[50px] sm:w-[100px]"
        />
    );
}

export default Partners;
