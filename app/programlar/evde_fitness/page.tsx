import Navbar from "@/app/Components/Navbar";
import OtherPrograms from "@/app/Components/OtherPrograms";
import Contact from "@/app/Components/Contact";
import Footer from "@/app/Components/Footer";
import Warning from "@/app/Components/Warning";

function page() {
    return (
        <main>
            <Navbar darkMode />
            <div className="flex mt-48 gap-36 w-fit m-auto relative">
                <section className="w-[700px]">
                    <h1 className="text-4xl mb-8">Evde Fitness</h1>
                    <div>
                        <p>
                            Amaç: Vücut ağırlığıyla genel kuvvet ve dayanıklılık
                            artırma, vücut şekillendirme.
                        </p>
                        <br />
                        <h3>Isınma:</h3>
                        3 dakika hafif koşu veya yerinde koşu
                        <br />
                        2 dakika kol ve bacak sallama, esneme (dinamik esneme)
                        <br />
                        <br />
                        <hr />
                        <br />
                        <h3>Ana Antrenman:</h3>
                        <p>
                            <b>Squat (Bacak ve kalça) - 3 set x 15 tekrar</b>
                            <br />
                            Yavaşça çömelip, kalçayı geriye doğru itin ve
                            dizlerinizi 90 derece açıyla bükün. Topuklarınızdan
                            kalkarak başlangıç pozisyonuna geri dönün.
                        </p>
                        <br />
                        <p>
                            <b>
                                Şınav (Göğüs, omuz, triceps) - 3 set x 10-12
                                tekrar
                            </b>
                            <br />
                            <i className="text-sm">
                                (İleri seviyeye geçmek için ayaklarınızı
                                yükseltebilirsiniz)
                            </i>
                            <br />
                            Eller omuz genişliğinde, vücut düz bir çizgide
                            olmalı. Sırtınızı ve karın bölgenizi sıkı tutarak,
                            göğsünüzü yere doğru indirin ve ardından iterek
                            başlangıç pozisyonuna dönün.
                        </p>
                        <br />
                        <p>
                            <b>
                                Lunge (Adım atma) (Bacak ve kalça) - 3 set x 12
                                tekrar (her bacak)
                            </b>
                            <br />
                            Bir adım ileri atın, dizinizi 90 derece açarak yere
                            doğru alçalın ve başlangıç pozisyonuna geri dönün.
                        </p>
                        <br />
                        <p>
                            <b>
                                Plank (Karın ve omuz) - 3 set x 30 saniye (İleri
                                seviye: 1 dakika)
                            </b>
                            <br />
                            Kollarınız düz bir şekilde yere basmalı, vücudunuz
                            düz bir çizgide olmalı. Karın kaslarınızı sıkı
                            tutarak pozisyonu koruyun.
                        </p>
                        <br />
                        <p>
                            <b>
                                Glute Bridge (Kalça köprüsü) (Kalça ve bacak) -
                                3 set x 15 tekrar
                            </b>
                            <br />
                            Sırt üstü yatın, dizlerinizi bükün ve ayaklarınızı
                            yere koyun. Kalçanızı yukarı doğru kaldırın,
                            sırtınızı yere paralel tutarak kalçalarınızı sıkın
                            ve sonra yavaşça indirin.
                        </p>
                        <br />
                        <p>
                            <b>
                                Mountain Climber (Kardiyo ve karın) - 3 set x 20
                                tekrar (her bacak)
                            </b>
                            <br />
                            Ellerinizin ve ayaklarınızın üzerinde, vücudunuzu
                            düz tutarak, dizlerinizi sırayla göğsünüze doğru
                            çekin. Hızlı hareket etmeye çalışın.
                        </p>
                        <br />
                        <hr />
                        <br />
                        <h3>Soğuma:</h3>
                        3-5 dakika esneme (özellikle bacaklar, kollar ve sırt)
                        <br />
                        {"Yoga pozları (Child's Pose, Downward Dog gibi)"}
                        <br />
                        <br />
                        <br />
                        Bu program, evde yapılabilecek ve düşük ekipmanla etkili
                        bir antrenman sunar. Başlangıç seviyesinde olan biri
                        için 2-3 set yeterli olabilirken, ilerleyen seviyelerde
                        4 sete çıkılabilir ve tekrar sayıları artırılabilir.
                        <br />
                        <br />
                        <b>Dinlenme Aralıkları:</b> Her set arasında 60-90
                        saniye dinlenebilirsiniz.
                        <br />
                        <b>Programın Düzenlenmesi:</b> Bu programı haftada 3 gün
                        yapabilirsiniz. Her antrenmanın arasında 1-2 gün
                        dinlenmeye özen gösterin. Başlangıç seviyesindeyseniz,
                        set sayısını azaltabilir ve hareketlerin tekrar
                        sayılarını düşürebilirsiniz. Zamanla, tekrar sayılarını
                        artırarak daha zorlu seviyelere geçebilirsiniz.
                    </div>
                    <br />
                    <hr />

                    <Warning />
                </section>
                <OtherPrograms />
            </div>
            <Contact />
            <Footer />
        </main>
    );
}

export default page;
