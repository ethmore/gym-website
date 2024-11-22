"use client";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fromBottom, fromLeft, toOriginal } from "../../lib/anim";

export default function MeetCrew() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-200px 0px" });

    return (
        <section ref={ref} className="w-[min(1000px,90%)] m-auto mt-48 ">
            <div
                className={`transition-all duration-500 ${
                    !isInView ? fromLeft : toOriginal
                }`}>
                <h1 className="text-4xl mb-8">Uzman Ekibimizle Tanışın</h1>
                <p className="mb-8 md:w-2/3">
                    Tecrübeli eğitmenlerimiz ve beslenme uzmanlarımız, sağlıklı
                    ve dengeli bir yaşam yolculuğunuzda size rehberlik etmek
                    için burada. Her biri alanında uzman olan ekibimiz,
                    hedeflerinize ulaşmanız için kişisel destek sunar ve
                    motivasyon kaynağınız olur.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div
                    className={`transition-all duration-500 ${
                        !isInView ? fromBottom : toOriginal
                    }`}>
                    <Image
                        src={"./trainer1.webp"}
                        alt=""
                        className="w-full h-[300px] object-cover rounded-xl"
                        width={600}
                        height={600}
                    />
                </div>
                <div
                    className={`transition-all duration-500 delay-100 ${
                        !isInView ? fromBottom : toOriginal
                    }`}>
                    <Image
                        src={"./trainer2.webp"}
                        alt=""
                        className="w-full h-[300px] object-cover rounded-xl"
                        width={600}
                        height={600}
                    />
                </div>
                <div
                    className={`transition-all duration-500 delay-200 ${
                        !isInView ? fromBottom : toOriginal
                    }`}>
                    <Image
                        src={"./trainer3.webp"}
                        alt=""
                        className="w-full h-[300px] object-cover rounded-xl"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
        </section>
    );
}
