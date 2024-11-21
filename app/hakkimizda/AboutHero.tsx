"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fromBottom, toOriginal } from "../../lib/anim";

export default function AboutHero() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="mt-48">
            <h1
                className={`text-[2.5rem] text-center transition-all duration-300  ${
                    !isInView ? fromBottom : toOriginal
                }`}>
                Sınırlarını Zorla, En İyi Versiyonuna Ulaş!
            </h1>
            <p
                className={`text-2xl text-center transition-all duration-300 delay-200 ${
                    !isInView ? fromBottom : toOriginal
                }`}>
                &quot;Burası sadece bir spor salonu değil; hedeflerinizi
                birlikte gerçekleştirdiğimiz bir yaşam merkezi.&quot;
            </p>
        </section>
    );
}
