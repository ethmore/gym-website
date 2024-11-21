"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Partners from "./Partners";
import { useInView } from "framer-motion";

function Hero() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section className="relative h-[80svh] md:h-[100svh] max-w-[2000px] mx-auto">
            <Image
                src="/hero_bg.webp"
                alt="A woman wearing sport short and sport bra doing cross crunch exercise on a bench."
                fill
                className="object-cover "
                priority
            />
            <div
                ref={ref}
                className="absolute top-[20%] left-[15%] text-slate-200">
                <div className="font-teko text-[2.5rem] md:text-[4.5rem] xl:text-[5.5rem] mb-8">
                    <div className="overflow-hidden h-fit">
                        <h1
                            className={`transition-all duration-500 ${
                                isInView
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-full opacity-0"
                            }`}>
                            SINIRLARINI ZORLA,
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1
                            className={`transition-all duration-500 delay-200 ${
                                isInView
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-full opacity-0"
                            }`}>
                            EN İYİ HALİNE ULAŞ!
                        </h1>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <p
                        className={`xl:text-lg mb-12 w-[50%] transition-all duration-1000 ${
                            isInView
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                        }`}>
                        İster dayanıklılığınızı artırmak, ister formunuzu
                        korumak ya da yeni bir başlangıç yapmak istiyor olun,
                        size özel programlar ve uzman eğitmen kadromuzla
                        buradayız.
                    </p>
                    <div
                        className={`transition-all duration-1000 ${
                            isInView
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-full opacity-0"
                        }`}>
                        <Link
                            className="ml-4 inline-block bg-primary text-black text-xl py-3 px-6 -skew-x-12 transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.295)] hover:px-8"
                            href="/programlar">
                            <span className="block skew-x-12">
                                Bugün Başla!
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <Partners className="absolute bottom-8 right-16" />
        </section>
    );
}

export default Hero;
