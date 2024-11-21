import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Oswald } from "next/font/google";

const openSans = Open_Sans({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const oswald = Oswald({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "AduroFit",
    description:
        "Fitness hedeflerinize ulaşmanız için kişiye özel programlar, modern ekipmanlar ve destekleyici bir topluluk sunan spor salonu. Sağlıklı bir yaşam için doğru adres! AduraFit",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${oswald.className} ${openSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
