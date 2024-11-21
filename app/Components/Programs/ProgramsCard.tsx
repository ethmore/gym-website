"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
    imgSrc: string;
    imgAlt: string;
    href: string;
    title: string;
}

function ProgramsCard({ imgSrc, imgAlt, href, title }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div
            ref={ref}
            className="w-full h-fit relative md:first:mt-20 md:last:mt-20">
            <div
                className={` relative h-[375px] xl:h-[500px] rounded-xl overflow-hidden shadow-[2px_5px_12px_0px_rgba(0,_0,_0,_0.5)] hover:scale-105 hover:shadow-[2px_5px_15px_2px_rgba(0,_0,_0,_0.5)]  transition-all duration-500 ${
                    isInView
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0"
                }`}>
                <Link href={href}>
                    <h2 className="absolute left-0 bottom-0 text-3xl z-10 text-white mb-4 ml-4">
                        {title}
                    </h2>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(_0deg,_rgba(0,_0,_0,_1)_0%,_rgba(0,_0,_0,_0)_25%)]"></div>
                </Link>
            </div>
        </div>
    );
}

export default ProgramsCard;
