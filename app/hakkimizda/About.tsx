"use client";
import { useRef } from "react";
import Image from "next/image";
import { fromLeft, fromRight, toOriginal } from "../../lib/anim";

import { useInView } from "framer-motion";

export default function About() {
    const topRef = useRef(null);
    const isInViewTop = useInView(topRef, { once: true });

    const bottomRef = useRef(null);
    const isInViewBottom = useInView(bottomRef, { once: true });

    return (
        <section className="max-w-[1000px] m-auto mt-32 md:mt-40">
            <div
                ref={topRef}
                className="flex flex-col md:flex-row gap-8 items-center">
                <div
                    className={`w-[90%] md:w-1/2 transition-all duration-500 ${
                        !isInViewTop ? fromLeft : toOriginal
                    }`}>
                    <h2 className="text-4xl text-center mb-8">Değerlerimiz</h2>
                    <p className="text-lg">
                        Amacımız, her bireyin kendi potansiyelini keşfetmesine
                        yardımcı olarak, sağlıklı bir yaşam için rehberlik
                        ederek ve güvenle çalışabileceği bir ortam sunarak,
                        herkesin kendini güçlü, sağlıklı ve motive hissedeceği
                        bir topluluk oluşturmaktır.
                    </p>
                </div>
                <div
                    className={`relative w-[90%] md:w-1/2 h-[400px] transition-all duration-500 ${
                        !isInViewTop ? fromRight : toOriginal
                    }`}>
                    <Image
                        src={"./about1.webp"}
                        alt="Bir adam kondisyon bisikletinde kardiyo yapıyor. Resmin solunda spor eğitmeni adama motivasyon veriyor. Arka planda başka bir adam kondisyon bisikletini kullanıyor"
                        fill
                        className="object-cover rounded-[60%_40%_56%_44%_/_45%_32%_68%_55%]"
                    />
                    <div className="absolute -z-10 -left-8 -top-2 w-[350px] h-[350px] rounded-[60%_40%_56%_44%_/_45%_32%_68%_55%] bg-primary opacity-60" />
                </div>
            </div>
            <div
                ref={bottomRef}
                className="flex flex-col-reverse md:flex-row gap-12 items-center mt-20 md:mt-32">
                <div
                    className={`relative w-[90%] md:w-1/2 h-[400px] transition-all duration-500 ${
                        !isInViewBottom ? fromLeft : toOriginal
                    }`}>
                    <Image
                        src={"./about2.webp"}
                        alt="Spor eğitmeni, şınav çeken öğrencisinin formunu düzeltiyor."
                        fill
                        className="object-cover rounded-[65%_35%_68%_32%_/_61%_54%_46%_39%]"
                    />
                    <div className="absolute -z-10 -right-4 -bottom-4 w-[500px] h-[400px] bg-primary opacity-60 rounded-[65%_35%_68%_32%_/_61%_54%_46%_39%] " />
                </div>
                <p
                    className={`text-lg w-[90%] md:w-1/2 transition-all duration-500 ${
                        !isInViewBottom ? fromRight : toOriginal
                    }`}>
                    Spor merkezimizde, profesyonellik, samimiyet ve motivasyon
                    en ön planda. Her üyemizin özel ve farklı olduğuna
                    inanıyoruz, bu yüzden kişiye özel programlarla destek
                    sağlıyoruz. Topluluğumuzda herkesin desteklendiği,
                    hedeflerine ulaşmak için teşvik edildiği bir ortam
                    oluşturuyoruz.
                </p>
            </div>
        </section>
    );
}
