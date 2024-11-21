"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
    href: string;
    imgSrc: string;
    imgAlt: string;
    title?: string;
    description?: string;
}

export default function ServiceCard({
    href,
    imgSrc,
    imgAlt,
    title,
    description,
}: Props) {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseLeave = () => {
        if (!cardRef.current || !glowRef.current) return;
        cardRef.current.style.transform = "";
        glowRef.current.style.backgroundImage = "";
        setTimeout(() => {
            if (!cardRef.current) return;
            cardRef.current.style.zIndex = "0";
        }, 200);
    };

    const hoverEffect = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!cardRef.current || !glowRef.current) return;
        const bounds = cardRef.current.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        cardRef.current.style.zIndex = "20";
        cardRef.current.style.transform = `
            scale3d(1.07, 1.07, 1.07)
            rotate3d(
                ${center.y / 100},
                ${-center.x / 100},
                0,
                ${Math.log(distance) * 1.2}deg
            )
            `;

        glowRef.current.style.backgroundImage = `
            radial-gradient(
                circle at
                ${center.x * 1.2 + bounds.width / 2}px
                ${center.y * 1.2 + bounds.height / 2}px,
                #ffffff55 0%,
                #0000000f 70%
            )
            `;
    };

    return (
        <Link
            ref={cardRef}
            href={href}
            className="relative md:[transform:rotate3d(5,-5,3,30deg)] w-full h-[400px] md:h-full rounded-[20px] overflow-hidden transition-all duration-300 shadow-[-6px_5px_10px_5px_#00000044] group hover:shadow-[0_5px_20px_5px_#00000056] md:[&:nth-child(2)]:ml-[-100px] md:[&:nth-child(3)]:ml-[-100px]"
            onMouseMove={hoverEffect}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={hoverEffect}>
            <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
            <div
                ref={glowRef}
                className="absolute w-full h-full left-0 top-0 rounded-[20px] bg-[radial-gradient(circle_at_50%_-10%,#ffffff5b,#3f3f3f0f_50%)]"
            />
            <div className="services_card_overlay" />
            <div className="absolute bottom-0 md:bottom-[-18%] left-0 p-5 text-white bg-[linear-gradient(0deg,rgba(0,0,0,0.829)_0%,rgba(0,0,0,0)_100%)] transition-all duration-500 group-hover:bottom-0">
                <h2 className="text-2xl sm:text-4xl mb-4">{title}</h2>
                <p className="sm:text-xl">{description}</p>
            </div>
        </Link>
    );
}
