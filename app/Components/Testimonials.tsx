"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import image1 from "/public/testimonial1.webp";
import image2 from "/public/testimonial2.webp";
import image3 from "/public/testimonial3.webp";
import useSwipe from "../../lib/useSwipe";

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const dotsRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    const slideTime = 3000;
    const [timer, setTimer] = useState(slideTime);
    const [hover, setHover] = useState(false);

    const swiperHandler = useSwipe({
        onSwipedLeft: () => {
            nextSlide();
        },
        onSwipedRight: () => {
            prevSlide();
        },
    });

    function prevSlide() {
        setActiveIndex((index) => {
            if (index === 0) return 2;
            return (index = index - 1);
        });
    }

    function nextSlide() {
        setActiveIndex((index) => {
            if (index === 2) return 0;
            return (index = index + 1);
        });
    }

    useEffect(() => {
        if (hover) return;
        setTimeout(() => {
            if (timer <= 0) {
                nextSlide();
                setTimer(slideTime);
            } else {
                setTimer(timer - 100);
            }
        }, 100);
    }, [activeIndex, timer, hover]);

    useEffect(() => {
        changePhotoStyleByIndex(activeIndex);
        changeDotStyleByIndex(activeIndex);
        setTimer(slideTime);
    }, [activeIndex]);

    function changePhotoStyleByIndex(index: number) {
        const customerPhotos = imagesRef.current!.children;
        for (let i = 0; i < customerPhotos?.length; i++) {
            customerPhotos[i].classList.remove("!scale-[1.2]");
            customerPhotos[i].classList.remove("!contrast-[1]");
            customerPhotos[i].classList.remove("!grayscale-0");
        }
        customerPhotos[index].classList.add("!scale-[1.2]");
        customerPhotos[index].classList.add("!contrast-[1]");
        customerPhotos[index].classList.add("!grayscale-0");
    }

    function changeDotStyleByIndex(index: number) {
        const dots = dotsRef.current!.children;

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("!w-10");
            dots[i].classList.remove("!bg-primary");
        }

        dots[index].classList.add("!w-10");
        dots[index].classList.add("!bg-primary");
    }

    return (
        <section
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative max-w-[min(90%,1000px)] m-auto mt-[200px] pl-0 md:pl-[200px]">
            <div
                ref={imagesRef}
                className="hidden md:grid absolute left-0 grid-cols-4 grid-rows-3 gap-5 ">
                <Image
                    onClick={() => setActiveIndex(0)}
                    src={image1}
                    alt="Short haired man with glasses smiling"
                    className="w-[90px] h-[90px] rounded-[35px] contrast-[0.7] grayscale-[1] transition-all duration-500 cursor-pointer col-start-2 col-end-4 row-start-1 row-end-2"
                />
                <Image
                    onClick={() => setActiveIndex(1)}
                    src={image2}
                    alt="A short haired man with a goatie"
                    className="w-[90px] h-[90px] rounded-[35px] contrast-[0.7] grayscale-[1] transition-all duration-500 cursor-pointer col-start-1 col-end-3 row-start-2 row-end-3"
                />
                <Image
                    onClick={() => setActiveIndex(2)}
                    src={image3}
                    alt="A woman smiling while doing crunches"
                    className="w-[90px] h-[90px] rounded-[35px] contrast-[0.7] grayscale-[1] transition-all duration-500 cursor-pointer col-start-3 col-end-5 row-start-3 row-end-4"
                />
            </div>
            <h2 className="text-4xl mb-4">Üyelerimizin Yorumları</h2>
            <div className="flex overflow-hidden" {...swiperHandler}>
                <Testimonial_Item
                    ref={sliderRef}
                    index={activeIndex}
                    content="Burada kendimi her zaman motive ve enerjik hissediyorum. Eğitmenler harika, her adımda yanımda oluyorlar. Herkes birbirini destekliyor ve hedeflerine ulaşması için cesaretlendiriyor."
                />
                <Testimonial_Item
                    ref={sliderRef}
                    index={activeIndex}
                    content="Burada spora başladığımdan beri kendimde inanılmaz değişiklikler gördüm. Hem fiziksel hem de mental olarak daha güçlüyüm. Herkes çok samimi ve güler yüzlü. AdoraFit ailesine teşekkürler."
                />
                <Testimonial_Item
                    ref={sliderRef}
                    index={activeIndex}
                    content="Üyelik sürecinden derslere kadar her şey çok profesyonel. Eğitmenler bire bir ilgileniyor ve programımı özenle planlıyor. Kendimi her zaman iyi hissederek ayrılıyorum. Böyle bir ortamda olmak oldukça motive edici!"
                />
            </div>

            <div
                ref={dotsRef}
                className="w-25 flex justify-between mt-5 ml-[30px]">
                <div
                    onClick={() => setActiveIndex(0)}
                    className="w-5 h-5 bg-[#929292] rounded-full cursor-pointer transition-all duration-500"></div>
                <div
                    className="w-5 h-5 bg-[#929292] rounded-full cursor-pointer transition-all duration-500"
                    onClick={() => setActiveIndex(1)}></div>
                <div
                    className="w-5 h-5 bg-[#929292] rounded-full cursor-pointer transition-all duration-500"
                    onClick={() => setActiveIndex(2)}></div>
            </div>
        </section>
    );
}

interface ItemProps {
    ref: RefObject<HTMLDivElement>;
    index: number;
    content: string;
}
function Testimonial_Item({ ref, index, content }: ItemProps) {
    return (
        <div
            ref={ref}
            className="w-full shrink-0 grow-0 transition-all duration-1000"
            style={{ translate: `${-100 * index}%` }}>
            <div className="relative mt-5 ml-8 border-[3px] border-primary rounded-3xl">
                <svg
                    className="absolute top-0 left-0 w-16 h-16 bg-white -translate-x-1/2 -translate-y-[40%]"
                    viewBox="0 0 24 24"
                    fill="#FFAD72"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9101 12.3699H20.6001C20.5201 17.0399 19.6001 17.8099 16.7301 19.5099C16.4001 19.7099 16.2901 20.1299 16.4901 20.4699C16.6901 20.7999 17.1101 20.91 17.4501 20.71C20.8301 18.71 22.0101 17.4899 22.0101 11.6699V6.27997C22.0101 4.56997 20.6201 3.18994 18.9201 3.18994H15.9201C14.1601 3.18994 12.8301 4.51997 12.8301 6.27997V9.27997C12.8201 11.04 14.1501 12.3699 15.9101 12.3699Z" />
                    <path
                        opacity="0.6"
                        d="M5.08982 12.3699H9.77982C9.69982 17.0399 8.77982 17.8099 5.90982 19.5099C5.57982 19.7099 5.46982 20.1299 5.66982 20.4699C5.86982 20.7999 6.28982 20.91 6.62982 20.71C10.0098 18.71 11.1898 17.4899 11.1898 11.6699V6.27997C11.1898 4.56997 9.79982 3.18994 8.09982 3.18994H5.09982C3.33982 3.18994 2.00982 4.51997 2.00982 6.27997V9.27997C1.99982 11.04 3.32982 12.3699 5.08982 12.3699Z"
                    />
                </svg>
                <p className="p-8 text-lg">{content}</p>
            </div>
        </div>
    );
}
