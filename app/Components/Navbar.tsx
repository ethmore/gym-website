"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public//logo.svg";

type activeLink = "/hizmetlerimiz" | "/programlar" | "/hakkimizda";
type LinkItem = {
    inner: string;
    href: string;
};
const linkData: LinkItem[] = [
    {
        inner: "Hizmetlerimiz",
        href: "/hizmetlerimiz",
    },
    {
        inner: "Programlar",
        href: "/programlar",
    },
    {
        inner: "Hakkımızda",
        href: "/hakkimizda",
    },
    {
        inner: "İletişim",
        href: "#contact",
    },
];

interface Props {
    darkMode?: boolean;
    active?: activeLink;
}

export default function Navbar({ darkMode, active }: Props) {
    return (
        <nav className="flex justify-center">
            <NavbarBig
                darkMode={darkMode}
                active={active}
                className="hidden md:flex"
            />
            <NavbarMobile className={"flex md:hidden"} active={active} />
        </nav>
    );
}

interface NavbarBigProps {
    darkMode?: boolean;
    active?: activeLink;
    className?: string;
}
function NavbarBig({ darkMode, active, className }: NavbarBigProps) {
    const [scrollDir, setScrollDir] = useState("scrolling down");
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            setScrollDir(
                scrollY > lastScrollY ? "scrolling down" : "scrolling up"
            );
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`flex justify-between items-center  w-[min(1000px,100svw)] px-10 h-[100px] z-50  transition-all duration-300 rounded-xl ${
                darkMode ? "!text-black" : ""
            }
                ${
                    scrollPosition > 0
                        ? " fixed h-[60px] top-[10px] bg-[#ffffffb9] backdrop-blur-md rounded-xl text-black shadow-[0px_0px_16px_1px_#00000079]"
                        : "absolute text-white"
                }
                ${
                    scrollDir === "scrolling down" && scrollPosition > 600
                        ? "translate-y-[-60px]"
                        : "translate-y-[0px]"
                }
                ${className}
                `}
            ref={navRef}>
            <Link
                className={`relative w-[120px] aspect-[2/1] transition-all duration-1000 ${
                    scrollPosition > 0 ? "w-[80px]" : ""
                }`}
                href="/">
                <Image
                    src={logo}
                    alt="AduroFit Logo"
                    fill
                    className={
                        darkMode || scrollPosition > 0
                            ? "brightness-0 saturate-0 contrast-[.6]"
                            : ""
                    }
                />
            </Link>
            <div className="flex items-center gap-8 text-lg">
                {linkData.slice(0, -1).map((item, index) => {
                    return (
                        <Link
                            key={index}
                            className={`transition-all hover:text-primary ${
                                active === item.href
                                    ? "border-neutral-600 border-b-4"
                                    : ""
                            }`}
                            href={item.href}>
                            {item.inner}
                        </Link>
                    );
                })}
                <Link
                    className="bg-primary text-black p-2 px-5 rounded-md transition-all hover:scale-105"
                    href={linkData[3].href}>
                    {linkData[3].inner}
                </Link>
            </div>
        </div>
    );
}

interface NavbarMobileProps {
    className?: string;
    active?: activeLink;
}

function NavbarMobile({ className, active }: NavbarMobileProps) {
    const [isEnabled, setIsEnabled] = useState<boolean>(false);
    return (
        <div
            className={`${className} w-full justify-between items-center h-[70px] transition-all px-8 bg-[#050505] ${
                isEnabled ? "mb-[280px]" : "mb-0"
            }`}>
            <Link className="relative w-[80px] aspect-[2/1]" href="/">
                <Image src={logo} alt="AduroFit Logo" fill />
            </Link>

            {/* Hamburger */}
            <div
                className="flex flex-col gap-[6px]"
                onClick={() => {
                    setIsEnabled(!isEnabled);
                }}>
                <div
                    className={`w-8 h-[3px] bg-white rounded-md transition-all ${
                        isEnabled ? "rotate-[225deg] translate-y-[9px]" : ""
                    }`}></div>
                <div
                    className={`w-8 h-[3px] bg-white rounded-md transition-all ${
                        isEnabled ? "opacity-0" : ""
                    }`}></div>
                <div
                    className={`w-8 h-[3px] bg-white rounded-md transition-all ${
                        isEnabled ? "rotate-[135deg] translate-y-[-9px]" : ""
                    }`}></div>
            </div>

            {/* Menu */}
            <div
                className="absolute flex flex-col items-center gap-8 text-lg bg-white left-0 top-[70px] z-50 p-8 w-full transition-all"
                style={
                    !isEnabled
                        ? {
                              transform: "translateY(calc(-100% - 70px))",
                          }
                        : { transform: "translateY(0px)", opacity: 1 }
                }>
                {linkData.slice(0, -1).map((item, index) => {
                    return (
                        <Link
                            key={index}
                            className={`transition-all hover:text-primary ${
                                active === item.href
                                    ? "border-neutral-600 border-b-4"
                                    : ""
                            }`}
                            href={item.href}>
                            {item.inner}
                        </Link>
                    );
                })}
                <Link
                    className="bg-primary text-black p-2 px-5 rounded-md transition-all hover:scale-105"
                    href={linkData[3].href}>
                    {linkData[3].inner}
                </Link>
            </div>
        </div>
    );
}
