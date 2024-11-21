import ProgramsCard from "./ProgramsCard";

function Programs() {
    return (
        <section id="programs" className="w-[min(1100px,90%)] m-auto mt-36">
            <h1 className="text-4xl xl:text-5xl w-fit m-auto">
                Ücretsiz Egzersiz Programları
            </h1>
            <div className="flex flex-col sm:flex-row gap-8 justify-center justify-items-center mt-16">
                <ProgramsCard
                    href="/programlar"
                    imgSrc="/programs2.webp"
                    imgAlt="egzersiz halkalarıyla şınav çeken sarışın kadın"
                    title="Evde Fitness"
                />
                <ProgramsCard
                    href="/programlar"
                    imgSrc="/programs1.webp"
                    imgAlt="bir kutunun üzerine atlayan kadın"
                    title="Calisthenics"
                />
                <ProgramsCard
                    href="/programlar"
                    imgSrc="/programs3.webp"
                    imgAlt="bir kadın dambıllarla bench press yapıyor, bir adam ona yardım ediyor"
                    title="Bodybuilding"
                />
            </div>
        </section>
    );
}

export default Programs;
