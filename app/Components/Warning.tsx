import Image from "next/image";

export default function Warning() {
    return (
        <div className="border-4 p-8 rounded-3xl mt-12">
            <div className="text-sm">
                <div className="flex gap-4">
                    <Image
                        src="/warn.webp"
                        alt="uyarı levhası simgesi"
                        width={100}
                        height={100}
                        className="w-[100px] h-[90px]"
                    />
                    <div>
                        <h3>Önemli Uyarı: Sağlık ve Güvenlik Bildirimi</h3>
                        <p className="mt-2">
                            Bu programlar genel fitness rehberliği sunmak
                            amacıyla hazırlanmış örnek egzersiz programlarıdır.
                            Her bireyin fiziksel kapasitesi, sağlık durumu ve
                            egzersiz deneyimi farklı olduğundan, bu programlar
                            herkes için uygun olmayabilir.
                        </p>
                    </div>
                </div>
                <ul className="mt-4 list-disc flex flex-col gap-3">
                    <li>
                        <b>
                            Programları uygulamadan önce bir sağlık
                            profesyoneline veya doktorunuza danışmanız önerilir.
                        </b>{" "}
                        Özellikle önceden bilinen bir sağlık sorununuz varsa
                        veya yeni bir egzersiz rutinine başlamayı
                        planlıyorsanız, profesyonel rehberlik almanız önemlidir.
                    </li>
                    <li>
                        Bu egzersizi uyguladığınız esnada meydana gelebilecek
                        herhangi bir yaralanma, sakatlık veya sağlık sorunu
                        durumunda{" "}
                        <b>AduroFit hiçbir şekilde sorumluluk kabul etmez.</b>{" "}
                        Programı kendi riskiniz dahilinde uygulamanız
                        gerekmektedir.
                    </li>
                    <li>
                        <b>Form ve Teknik:</b> Egzersizleri doğru form ve
                        teknikle yapmak, sakatlık riskini azaltmak için
                        kritiktir. Gerektiğinde profesyonel bir eğitmenden
                        yardım almanız tavsiye edilir.
                    </li>
                </ul>
                <p className="mt-4">
                    Unutmayın, her egzersiz rutini <b>bireyselleştirilmiş</b>{" "}
                    olmalıdır ve sizin ihtiyaçlarınıza göre uyarlanmalıdır.
                    Sağlıklı bir şekilde hedeflerinize ulaşmanız için güvenli ve
                    kontrollü bir yaklaşım benimsemek her zaman önceliğiniz
                    olmalıdır.
                </p>
            </div>
        </div>
    );
}
