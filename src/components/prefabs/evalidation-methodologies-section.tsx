import { getHomePageData } from "@/data/loader";

interface StrapiImageType {
    url: string;
}

interface HeroSectionData {
    __component: "blocks.hero-section" | "homepage.evaluation-methodologies";
    title: string;
    description: string;
    image: StrapiImageType;
    decor_image: {
        image?: StrapiImageType;
    };
    small_component: {
        title: string;
        description: string;
    };
    bg_image?: StrapiImageType;
    video: string;
}

type Block = HeroSectionData;

export default async function EvaluationMethodologiesSection() {
    const res = await getHomePageData();

    const evaluationMethodologies = res.blocks.find((block: Block) => block.__component === "homepage.evaluation-methodologies") as
        | HeroSectionData
        | undefined;

    if (!evaluationMethodologies) {
        return (
            <section className="section py-16 text-center">
                <h2 className="text-muted text-2xl font-semibold">Section not available</h2>
            </section>
        );
    }

    const { title = "", description = "", video = "" } = evaluationMethodologies;

    const titleWords = title.split(" ");
    const first = titleWords[0] || "";
    const second = titleWords[1] || "";
    const third = titleWords[2] || "";

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 md:gap-12">
            <h2 className="font-popins relative text-2xl font-semibold md:text-5xl">
                {first} {second} <span className="bg-primary rounded-sm px-1">{third}</span>
            </h2>

            <p className="text-muted font-popins text-center text-sm font-normal text-balance md:text-lg">{description}</p>

            <div className="h-[36rem] w-5xl overflow-hidden rounded-2xl object-cover">
                <iframe
                    src="https://www.youtube.com/embed/lEnrMfKN31c?si=Rg19byPh5ZUMq6q2"
                    className="h-full w-full"
                    allowFullScreen
                    title="YouTube video player"
                />
            </div>
        </section>
    );
}
