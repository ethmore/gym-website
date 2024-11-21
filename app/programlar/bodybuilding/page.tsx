import Navbar from "@/app/Components/Navbar";
import OtherPrograms from "@/app/Components/OtherPrograms";
import Contact from "@/app/Components/Contact";
import Footer from "@/app/Components/Footer";
import Warning from "@/app/Components/Warning";

export default function Page() {
    return (
        <main>
            <Navbar darkMode />
            <div className="flex mt-48 gap-36 w-fit m-auto relative">
                <section className="w-[700px]">
                    <h1 className="text-4xl mb-8">
                        Full-Body Bodybuilding Programı
                    </h1>
                    <div>
                        <p>
                            <b>Amaç:</b> Kas kütlesi artırma, vücut
                            kompozisyonunu iyileştirme.
                        </p>
                        <br />
                        <h3>Isınma:</h3>
                        3-5 dakika hafif koşu veya yerinde koşu
                        <br />
                        2 dakika dinamik esneme (bacak sallama, kol dairesi
                        hareketleri, hip streç vb.)
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h3>Ana Antrenman:</h3>
                        <p>
                            <b>Squat - 4 set x 8-12 tekrar</b>
                            <br />
                            Bacak, kalça ve karın kaslarını çalıştırır. Temel
                            bir hareket olarak vücudun alt kısmını hedef alır.
                        </p>
                        <br />
                        <p>
                            <b>Barbell Bench Press - 4 set x 8-12 tekrar</b>
                            <br />
                            Göğüs, omuz ve triceps kaslarını çalıştırır. Vücut
                            üst kısmındaki büyük kas gruplarını hedef alır.
                        </p>
                        <br />
                        <p>
                            <b>Deadlift - 4 set x 6-8 tekrar</b>
                            <br />
                            Sırt, bacak ve karın kaslarını güçlendirir. Temel
                            bir güç hareketi olup vücuda genel güç kazandırır.
                        </p>
                        <br />
                        <p>
                            <b>
                                Pull-Up veya Lat Pulldown (Barfiks veya Lat
                                Makinesi) - 4 set x 8-12 tekrar
                            </b>
                            <br />
                            Sırt ve biceps kaslarını çalıştırır. Eğer barfiks
                            çekmek zor geliyorsa, makine desteğiyle yapılabilir.
                        </p>
                        <br />
                        <p>
                            <b>
                                Dumbbell Lunges - 3 set x 10 tekrar (her bacak)
                            </b>
                            <br />
                            Bacak ve kalça kaslarını hedef alır. Ayrıca denge ve
                            koordinasyonu artırmaya yardımcı olur.
                        </p>
                        <br />
                        <p>
                            <b>Overhead Press - 4 set x 8-10 tekrar</b>
                            <br />
                            Omuz kaslarını güçlendirir. Dikey itiş hareketi,
                            omuzların gelişimini destekler.
                        </p>
                        <br />
                        <p>
                            <b>Triceps Dips - 3 set x 8-12 tekrar</b>
                            <br />
                            Triceps kaslarını hedef alır. Eğer zorsa, vücut
                            ağırlığını hafifletmek için bacakları
                            kullanabilirsiniz.
                        </p>
                        <br />
                        <p>
                            <b>Barbell Curl - 3 set x 10-12 tekrar</b>
                            <br />
                            Biceps kaslarını çalıştırır ve üst vücut gücünü
                            artırır.
                        </p>
                        <br />
                        <p>
                            <b>Leg Raise - 3 set x 12-15 tekrar</b>
                            <br />
                            Karın kaslarını hedef alır. Bu hareket, alt karın
                            kaslarını şekillendirmeye yardımcı olur.
                        </p>
                        <br />
                        <p>
                            <b>Plank - 3 set x 45-60 saniye</b>
                            <br />
                            Core kaslarını (karın ve bel) çalıştırır. Vücut
                            stabilitesini artırır ve sırt problemlerini önlemeye
                            yardımcı olur.
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3>Soğuma:</h3>
                        3-5 dakika esneme (özellikle bacaklar, kollar, sırt ve
                        omuzlar)
                        <br />
                        {"Yoga pozları (Child's Pose, Downward Dog gibi)"}
                        <br />
                        <br />
                        <br />
                        <b>Dinlenme Aralıkları:</b> Her set arasında 60-90
                        saniye dinlenebilirsiniz.
                        <br />
                        <b>Programın Düzenlenmesi:</b>
                        Ağırlık Artışı: Ağırlıkları, setlerdeki tekrarlar rahat
                        bir şekilde tamamlandığında artırarak progresif
                        yüklenmeyi hedefleyin.
                        <br />
                        <b>Set Sayıları:</b> Eğer başlangıç seviyesindeyseniz, 3
                        set ile başlayıp zamanla set sayısını 4’e
                        çıkarabilirsiniz.
                        <br />
                        <br />
                        <hr />
                    </div>
                    <Warning />
                </section>
                <OtherPrograms />
            </div>
            <Contact />
            <Footer />
        </main>
    );
}
