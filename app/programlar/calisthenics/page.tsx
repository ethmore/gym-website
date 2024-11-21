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
                    <h1 className="text-4xl mb-8">Calisthenics Programı</h1>
                    <div>
                        <p>
                            <b>Amaç:</b> Kas kütlesi artırma, dayanıklılık
                            geliştirme, vücut kontrolünü iyileştirme.
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
                            <b>
                                Pull-Up (Barfiks) - (Sırt ve biceps) - 4 set x
                                6-10 tekrar
                            </b>
                            <br />
                            Barfiks çubuğu kullanarak vücut ağırlığınızı yukarı
                            doğru çekin. Yavaşça aşağı inerek kontrollü bir
                            şekilde pozisyonu tamamlayın. (Barfiks yoksa, kapı
                            barı veya başka uygun bir alet kullanabilirsiniz.)
                        </p>
                        <br />
                        <p>
                            <b>
                                Push-Up (Şınav) - (Göğüs, omuz ve triceps) - 4
                                set x 15-20 tekrar
                            </b>
                            <br />
                            Vücudu düz tutarak, eller omuz genişliğinde, vücut
                            hizasında olmalı. Göğsünüzü yere indirin ve ardından
                            iterek başlangıç pozisyonuna dönün. Kolaylaştırmak
                            için dizler üzerinde şınav çekebilirsiniz.
                        </p>
                        <br />
                        <p>
                            <b>
                                Pistol Squat (Tek bacaklı squat) - (Bacak, kalça
                                ve core) - 3 set x 6-8 tekrar (her bacak)
                            </b>
                            <br />
                            Bir bacağınızı yere paralel olacak şekilde ileri
                            doğru uzatın ve tek bacakla çömelin. Eğer
                            zorlanıyorsanız, başlangıç olarak destek
                            alabileceğiniz bir yere tutun veya “Box Squat” gibi
                            varyasyonlar deneyin.
                        </p>
                        <br />
                        <p>
                            <b>
                                Dips (Dip) - (Göğüs, triceps, omuz) - 4 set x
                                8-12 tekrar
                            </b>
                            <br />
                            İki paralel bar veya sağlam bir sandalye/koltuk
                            kullanarak vücudunuzu aşağı indirin ve yukarı itin.
                            Vücudunuzun dik ve kontrollü olmasına özen gösterin.
                            Dips için herhangi bir dip aparatı yoksa,
                            ellerinizle iki yüksek yüzeyde destek
                            sağlayabilirsiniz.
                        </p>
                        <br />
                        <p>
                            <b>
                                Leg Raise (Bacak Kaldırma) - (Karın ve kalça) -
                                3 set x 15-20 tekrar
                            </b>
                            <br />
                            Sırt üstü yatın, bacaklarınızı düz tutarak yukarı
                            kaldırın ve yavaşça indirin. Karın kaslarınızı sıkı
                            tutarak kontrollü bir şekilde hareket edin.
                        </p>
                        <br />
                        <p>
                            <b>
                                Inverted Row (Ters Çekiş) - (Sırt ve biceps) - 3
                                set x 10-12 tekrar
                            </b>
                            <br />
                            Alt bar kullanarak vücudunuzu çekin. Eller omuz
                            genişliğinde açık olmalı, vücut düz bir çizgide
                            olacak şekilde yukarıya çekin.
                        </p>
                        <br />
                        <p>
                            <b>
                                Plank - (Karın ve core) - 3 set x 45-60 saniye
                            </b>
                            <br />
                            Vücut düz bir çizgide olacak şekilde kollarınızı
                            yere koyarak plank pozisyonunda durun. Karın
                            kaslarınızı sıkı tutarak pozisyonu koruyun.
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
                        <b>Programın Düzenlenmesi:</b> Bu calisthenics
                        programını haftada 3-4 gün yapabilirsiniz. Her
                        antrenmanın arasında 1-2 gün dinlenmeye özen gösterin.
                        Başlangıç seviyesindeyseniz, set sayısını azaltabilir ve
                        hareketlerin tekrar sayılarını düşürebilirsiniz.
                        Zamanla, tekrar sayılarını artırarak daha zorlu
                        seviyelere geçebilirsiniz.
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
