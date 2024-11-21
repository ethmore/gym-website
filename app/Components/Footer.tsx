import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#141414] p-16 text-white relative">
            <div className="max-w-[1100px] m-auto flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
                <div className="flex flex-col justify-between">
                    <Link className="relative w-[120px] aspect-[2/1]" href="/">
                        <Image src={"/logo.svg"} alt="AduroFit Logo" fill />
                    </Link>
                    <Link
                        className="bg-[conic-gradient(from_var(--angle),rgba(131,58,180,1),rgba(253,29,29,1),rgba(252,176,69,1),rgba(131,58,180,1))] animate-colorChange bg-[length:200%] bg-clip-text text-transparent opacity-75 text-sm absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                        href="">
                        2024 - created by webeveyn
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-20">
                    <div className="flex flex-col gap-4">
                        <Link href="">Üyelik Paketleri</Link>
                        <Link href="">Eğitmenler</Link>
                        <Link href="">Neden AduroFit?</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link href="">Hizmetlerimiz</Link>
                        <Link href="">Ücretsiz Programlar</Link>
                        <Link href="">Hakkımızda</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
