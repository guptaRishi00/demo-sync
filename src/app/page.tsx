import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import DecorImage from "@/components/prefabs/decor-image";
import ExportServiceCard from "@/components/prefabs/export-service-card";
import Header from "@/components/prefabs/header";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import EvaluationMethodologiesSection from "@/components/prefabs/evalidation-methodologies-section";
import FeedbackSection from "@/components/prefabs/feedback-section";
import Footer from "@/components/prefabs/footer";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import LearnMoreNavButton from "@/components/prefabs/learn-more-nav-button";
import Metrics from "@/components/prefabs/metrics";
import TestimonialsSection from "@/components/prefabs/testimonials-section";
import VibeSection from "@/components/prefabs/vibes-section";

import { getGlobalData, getHomePageData } from "@/data/loader";
// import { StrapiVideo } from "@/components/custom/StrapiVideo";
import { StrapiImage } from "@/components/custom/StrapiImage";

export default async function HomePage() {
    const res = await getHomePageData();

    const globalres = await getGlobalData();

    const herosection = res.blocks.find((block: any) => block.__component === "blocks.hero-section");
    const founderNote = res.blocks.find((block: any) => block.__component === "homepage.founder-note");
    const evaluationMethodologies = res.blocks.find((block: any) => block.__component === "homepage.evaluation-methodologies");
    const expertServices = res.blocks.find((block: any) => block.__component === "homepage.expert-services");
    const healthRequirement = res.blocks.find((block: any) => block.__component === "homepage.health-requirement");
    const vibeSection = res.blocks.find((block: any) => block.__component === "homepage.vibe-section");
    const commonQuote = res.blocks.find((block: any) => block.__component === "homepage.common-quote");
    const testimonials = res.blocks.find((block: any) => block.__component === "homepage.testimonials");
    const feedback = res.blocks.find((block: any) => block.__component === "homepage.feedback");

    const { bg_image } = herosection;

    const { decor_tree, decor_chair, decor_butterfly1, join_news_letter, header } = globalres;

    return (
        <>
            <main className="main relative">
                <StrapiImage src={bg_image?.url} alt="Hero" className="-z-50 object-cover opacity-10" />
                <HeroSection data={herosection} header={header} />
            </main>

            <main className="main bg-secondary/20 relative overflow-hidden">
                <FoundersNoteSection data={founderNote} />

                <DecorImage
                    src={decor_butterfly1?.url}
                    alt="Decor Butterfly"
                    size={[230, 230]}
                    className="right-0 bottom-0 translate-x-1/2 -rotate-45"
                />
            </main>

            <main className="main flex flex-col overflow-hidden py-8">
                <EvaluationMethodologiesSection />
            </main>

            <main className="main py-8">
                <ExpertServicesSection data={expertServices} />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <CommonQuoteSection data={commonQuote} />
            </main>

            <main className="main overflow-hidden py-8">
                <HealthRequirementSection data={healthRequirement} />
            </main>

            <main className="main bg-secondary/20 md:min-h-fit!">
                <VibeSection data={vibeSection} />
            </main>

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

                <TestimonialsSection data={testimonials} />

                <FeedbackSection data={feedback} />

                <JoinNewsLetter data={join_news_letter} />

                <DecorImage
                    src={decor_tree?.url}
                    alt="Decor Butterfly"
                    size={[600, 600]}
                    className="top-0 right-0 translate-x-1/6 -translate-y-1/3 opacity-70"
                />
                <DecorImage
                    src={decor_chair?.url}
                    alt="Home Decore 5"
                    size={[450, 450]}
                    className="absolute right-0 bottom-0 translate-1/4 opacity-60 sm:translate-1/10"
                />
            </main>

            <main className="main bg-primary py-8 md:min-h-0">
                <Footer />
            </main>
        </>
    );
}

export function HeroSection(props: any) {
    const { data, header } = props;

    const { subtitle_one, title, description, subtitle_two, image } = data;
    return (
        <section className="section flex flex-col py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header logo={header?.logo?.url} />
            </div>

            <div className="flex grow flex-col items-center justify-normal gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col gap-4 text-start md:max-w-1/2 md:gap-5 md:pr-16">
                    <h3 className="font-popins text-xl md:text-3xl">
                        {subtitle_one.split(" ")[0] + " " + subtitle_one.split(" ")[1] + " " + subtitle_one.split(" ")[2]}{" "}
                        <b>{subtitle_one.split(" ")[3] + " " + subtitle_one.split(" ")[4] + " "} </b> {subtitle_one.split(" ")[5]}
                    </h3>
                    <h2 className="font-popins text-3xl font-semibold md:text-5xl md:leading-18">
                        {title.split(" ")[0] + " "} <span className="text-accent"> {title.split(" ")[1] + " "} </span>
                        <br />
                        {title.split(" ")[2] + " " + title.split(" ")[3]}
                    </h2>
                    <h5 className="font-popins mb-2 text-sm font-medium opacity-80 md:text-lg"> {subtitle_two} </h5>
                    <p className="text-muted font-popins mb-4 text-justify text-sm md:text-lg">{description}</p>
                    <BookAppointmentButton />
                </div>
                <div className="relative aspect-5/5 h-full w-full">
                    <StrapiImage src={image?.url} alt="Hero Thumbnail" className="rounded-3xl object-cover" />
                    <Button
                        variant="secondary"
                        className="from-secondary-light to-secondary text-background absolute right-0 bottom-0 hidden gap-2 rounded-3xl bg-linear-to-br px-8 py-10 text-lg"
                    >
                        <div className="bg-background grid h-fit scale-120 place-items-center rounded-full p-2">
                            <Play className="fill-foreground stroke-foreground" />
                        </div>
                        {" "}
                        <span>Watch Now</span>
                    </Button>
                </div>
            </div>
        </section>
    );
}

function FoundersNoteSection(data: any) {
    const { title, video, decor_highlight, decor_highlight2, decor_new, subtitle } = data.data;
    return (
        <section className="section flex flex-col items-center justify-center gap-2 py-8 md:min-h-dvh">
            <h2 className="font-popins relative mb-4 text-3xl font-semibold italic md:text-5xl">
                {title}
                <DecorImage
                    src={decor_highlight.image?.url}
                    alt="Decor Highlight"
                    size={[16, 16]}
                    className="top-0 left-1/4 -translate-y-full"
                />
                <DecorImage
                    src={decor_highlight.image?.url}
                    alt="Decor Highlight"
                    size={[16, 16]}
                    className="bottom-0 left-3/4 translate-y-full rotate-180"
                />
            </h2>
            <p className="text-muted font-popins text-center text-sm md:pb-6 md:text-xl">Optimizing brain health like never before.</p>
            <div className="relative mt-4 aspect-1920/1080 w-full md:w-2/3">
                <DecorImage
                    src={decor_new.image?.url}
                    alt="Decor New"
                    size={[44, 44]}
                    className="-translate-x-1/2 -translate-y-full md:-translate-full"
                />

                <div className="h-[36rem] w-full max-w-5xl overflow-hidden rounded-2xl">
                    <iframe
                        src="https://www.youtube.com/embed/0mECvrDaJPc?si=Mpw8-NpYmxLPAj3j"
                        className="h-full w-full"
                        allowFullScreen
                        title="YouTube video player"
                    />
                </div>
            </div>
        </section>
    );
}

function ExpertServicesSection(data: any) {
    const { title, decor_love, cardDetails, bookAppointment, why_us } = data.data;

    // const cardDetails = [
    //     {
    //         imagePath: "/jpeg/Consultation.jpg",
    //         title: "Consultations",
    //         description: "Discuss your needs with a professional and learn about your care options.",
    //     },
    //     {
    //         imagePath: "/jpeg/Individual therapy.jpg",
    //         title: "Individual Counseling & Therapy",
    //         description: "A safe and empowering space to navigate life’s journey with guidance.",
    //     },
    //     {
    //         imagePath: "/jpeg/ADHD group coaching.jpg",
    //         title: "Adhd Group Coaching Sessions",
    //         description: "Develop resilience, organization, and management skills in a shared group setting.",
    //     },
    //     {
    //         imagePath: "/jpeg/Asessment and diagnosis.jpg",
    //         title: "Assessment & Diagnosis",
    //         description:
    //             "A thoughtful conversation to explore your experiences, uncover their origins, and understand their impact on your well-being.",
    //     },
    //     {
    //         imagePath: "/jpeg/Psychiatric consultations.jpg",
    //         title: "Psychiatric Consultations",
    //         description:
    //             "Expert psychiatric care for depression, anxiety, addiction, ADHD, neurodivergence, schizophrenia, mood disorders, and more.",
    //     },
    //     {
    //         imagePath: "/images/decor-export-service-1.png",
    //         title: "Book an Appointment",
    //         isBookAppointment: true,
    //     },
    // ];

    return (
        <section className="section flex flex-col items-center gap-12 pt-4 md:gap-16">
            <div className="font-popins flex items-center gap-4 text-xl font-semibold md:text-4xl">
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="">{title.split(" ")[0] + " " + title.split(" ")[1]}</h2>
                </div>
                <h2 className="relative">
                    {title.split(" ")[2] + " " + title.split(" ")[3] + " " + title.split(" ")[4]}
                    <DecorImage
                        src={decor_love.image?.url}
                        alt="Decor Love"
                        size={[24, 24]}
                        className="top-0 right-0 translate-x-full -translate-y-full"
                    />
                </h2>
            </div>

            <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                {cardDetails.map((card: any) => (
                    <ExportServiceCard
                        key={card.id}
                        imagePath={card.imagePath?.url}
                        title={card.title}
                        description={card.description}
                        isBookAppointment={card.isBookAppointment}
                        bookAppointment={bookAppointment}
                    />
                ))}
            </div>

            <div className="my-6 flex flex-col-reverse items-start gap-4 md:flex-row">
                <div className="relative mt-8 flex flex-col gap-6 pr-12 text-center md:max-w-1/2 md:text-start">
                    <Button
                        variant="outline"
                        className="hover:bg-background border-primary font-inter w-fit rounded-full bg-white font-normal"
                    >
                        {why_us.subtitle_one}
                    </Button>
                    <h2 className="font-inter text-2xl font-semibold md:text-4xl">Together, We Grow!!</h2>
                    <p className="text-foreground font-inter text-justify text-sm font-normal md:text-lg">{why_us.description}</p>

                    <LearnMoreNavButton />
                    <DecorImage src="/images/decor-smile.png" alt="Decor Smile" size={[34, 34]} className="bottom-0 left-1/3" />

                    <DecorImage
                        src="/images/decor-butterfly.png"
                        alt="Decor Butterfly"
                        size={[58, 58]}
                        className="bottom-0 left-3/4 translate-y-full"
                    />
                </div>

                <div className="relative h-fit w-full grow">
                    <div className="pb-26 pl-16">
                        <div className="relative aspect-5/4 h-full w-full">
                            <StrapiImage src={why_us.image?.url} alt="Hero Thumbnail" className="right-0 left-0 rounded-2xl object-cover" />
                        </div>
                    </div>

                    <div className="to-secondary from-secondary-light absolute bottom-0 left-0 z-10 w-68 rounded-2xl bg-linear-to-r px-5 py-5 text-white md:w-122 md:gap-16 md:px-8 md:py-8">
                        <h4 className="font-inter pb-4 text-lg font-extrabold md:text-2xl">{why_us.small_component.title}</h4>
                        <p className="font-inter text-sm font-normal md:text-sm">{why_us.small_component.description}</p>
                    </div>
                </div>
            </div>

            <Metrics />
        </section>
    );
}
