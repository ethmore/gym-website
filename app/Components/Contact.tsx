"use client";
import Form from "next/form";

export default function Contact() {
    return (
        <section
            className="bg-[#141414] text-white py-[100px] mt-[200px]"
            id="contact">
            <div className="w-[min(1100px,90%)] m-auto">
                <h1 className="text-4xl">Bize Ulaşın, Hedeflerinize Ulaşın!</h1>
                <div className="mt-12 grid md:grid-cols-2 gap-20 md:gap-40">
                    <p>
                        Sağlıklı bir yaşam için ilk adımı atın ve size özel
                        programınızı oluşturalım. Tüm sorularınız için bizimle
                        iletişime geçin; uzman ekibimiz size en kısa sürede
                        dönüş yapacak. Hedeflerinize ulaşmanız için buradayız!
                    </p>
                    <Form
                        className="grid gap-6 text-xl"
                        action={""}
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="İsim Soyisim"
                            className="bg-[#141414] border-2 border-[#808080] text-white py-[10px] px-[15px] rounded-md min-w-0"
                        />
                        <input
                            id="email"
                            type="email"
                            placeholder="E-Mail"
                            className="bg-[#141414] border-2 border-[#808080] text-white py-[10px] px-[15px] rounded-md min-w-0"
                        />
                        <button className="p-[10px] rounded-md text-black bg-[#cccccc] transition-all group hover:pr-5 hover:bg-white">
                            Gönder
                            <span className="inline-block -rotate-90 -translate-x-5 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                                ▼
                            </span>
                        </button>
                    </Form>
                </div>
            </div>
        </section>
    );
}
