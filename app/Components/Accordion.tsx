"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { fromBottom, toOriginal } from "../../lib/anim";

export type accordionData = {
    title: string;
    content: string;
};

interface AccordionProps {
    data: accordionData[];
}

export default function Accordion({ data }: AccordionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });
    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const handleItemClick = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <ul
            ref={ref}
            className={`transition-all duration-1000 ${
                !isInView ? fromBottom : toOriginal
            }`}>
            {data.map((item, index) => {
                return (
                    <AccordionItem
                        key={index}
                        index={index}
                        title={item.title}
                        content={item.content}
                        isOpen={activeIndex === index}
                        onClick={() => handleItemClick(index)}
                    />
                );
            })}
        </ul>
    );
}

interface Props {
    title: string;
    content: string;
    isOpen: boolean;
    index: number;
    onClick: () => void;
}

function AccordionItem(props: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });
    const accordionRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLParagraphElement>(null);
    return (
        <li
            ref={ref}
            className={`overflow-hidden transition-all duration-700 ${
                !isInView ? fromBottom : toOriginal
            }`}>
            <button
                className="w-full p-4 flex items-center justify-between cursor-pointer border-b-4 border-neutral-700 text-[1.3rem]"
                ref={accordionRef}
                onClick={props.onClick}>
                <h2>{props.index + 1}</h2>
                <div className="flex items-center gap-4 ">
                    <h2>{props.title}</h2>
                    <svg
                        className="w-4 h-4 text-gray-800 transition-all duration-300"
                        style={
                            props.isOpen
                                ? { rotate: "180deg" }
                                : { rotate: "0deg" }
                        }
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 8">
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                        />
                    </svg>
                </div>
            </button>

            <div
                ref={panelRef}
                className="transition-all duration-300"
                style={
                    props.isOpen
                        ? { height: panelRef.current?.scrollHeight }
                        : { height: "0px" }
                }>
                <p className="p-4 pl-16">{props.content}</p>
            </div>
        </li>
    );
}
