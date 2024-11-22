import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
    from: "left" | "right" | "top" | "bottom" | "original";
    to: "left" | "right" | "top" | "bottom" | "original";
    duration?: number;
    children: ReactNode;
}

export default function AnimateInView({
    from,
    to,
    duration = 500,
    children,
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    const animations = {
        left: "-translate-x-full opacity-0",
        right: "translate-x-full opacity-0",
        top: "-translate-y-full opacity-0",
        bottom: "translate-y-full opacity-0",
        original: "translate-y-0 translate-x-0 opacity-100",
    };

    return (
        <div
            ref={ref}
            className={`relative w-full h-full ${
                !isInView ? animations[from] : animations[to]
            }`}
            style={{
                transitionProperty: "all",
                transitionDuration: `${duration}ms`,
            }}>
            {children}
        </div>
    );
}
