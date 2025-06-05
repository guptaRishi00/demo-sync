import { StrapiImage } from "@/components/custom/StrapiImage";
import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import CommitmentToPatientSection from "@/components/prefabs/commitement-to-patient-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import ProfileCard from "@/components/prefabs/profile-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getAboutData, getGlobalData } from "@/data/loader";
import { CircleCheck } from "lucide-react";

interface StrapiImageType {
    url: string;
}

interface HeroSectionData {
    __component: "blocks.hero-section";
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
}

type ExpertProfile = {
    name: string;
    designation: string;
    about: string;
    profileImage: StrapiImageType | string;
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    id: number;
};

interface MeetExpertsData {
    __component: "aboutpage.meet-experts";
    title: string;
    subtitle: string;
    decor_image: StrapiImageType;
    profiles: ExpertProfile[];
}

interface VisionItem {
    id: number;
    list: string;
}

interface VisionSectionData {
    __component: "aboutpage.why-choose";
    title: string;
    image: StrapiImageType;
    list: VisionItem[];
    mission: {
        title: string;
        description: string;
    };
    vision: {
        title: string;
        description: string;
    };
}
interface CommitmentSectionData {
    __component: "aboutpage.commitment-section";
    title: string;
    description: string;
    commitment: {
        id: number;
        text: string;
    }[];
}

type Block = HeroSectionData | MeetExpertsData | VisionSectionData | CommitmentSectionData;

export default async function AboutPage() {
    const globalres = await getGlobalData();
    const { decor_tree, decor_chair, join_news_letter, header } = globalres;

    const res = await getAboutData();

    const herosection = res.blocks.find((block: Block) => block.__component === "blocks.hero-section") as HeroSectionData;
    const meetExperts = res.blocks.find((block: Block) => block.__component === "aboutpage.meet-experts") as MeetExpertsData;
    const visionSection = res.blocks.find((block: Block) => block.__component === "aboutpage.why-choose") as VisionSectionData;
    const commitmentSection = res.blocks.find(
        (block: Block) => block.__component === "aboutpage.commitment-section",
    ) as CommitmentSectionData;

    const { bg_image } = herosection;

    return (
        <>
            <main className="main relative overflow-x-clip">
                <StrapiImage src={bg_image?.url ?? ""} alt="Hero" className="-z-50 object-cover opacity-10" />
                <HeroSection header={header} data={herosection} />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <MeetOurExpertSection data={meetExperts} />
            </main>

            <main className="main bg-secondary/20 relative">
                <VisionSection data={visionSection} />
            </main>

            <main className="main md:min-h-fit!">
                <CommitmentToPatientSection data={commitmentSection} />
            </main>

            {/* <main className="main hidden overflow-hidden py-8"><HealthRequirementSection /></main> */}

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12">
                <ConnectToSyncSection />

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

interface HeaderData {
    logo: {
        url: string;
    };
}

function HeroSection(props: { header: HeaderData; data: HeroSectionData }) {
    const { header, data } = props;

    const { title, description, image, decor_image, small_component } = data;
    return (
        <section className="section relative flex flex-col gap-4 py-8 md:min-h-dvh">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header logo={header.logo.url} />
            </div>

            <div className="md:grow"></div>

            <div className="grid grow grid-cols-1 grid-rows-1 gap-12 md:grid-cols-2">
                <div className="flex grow flex-col gap-10">
                    <div className="">
                        <h2 className="font-popins relative inline text-3xl leading-10 font-semibold md:text-5xl md:leading-18">
                            {title.split(" ")[0] + " "} <span className="text-accent">{title.split(" ")[1] + " "}</span>{" "}
                            {title.split(" ")[2] + " " + title.split(" ")[3]}
                        </h2>
                        <p className="text-muted font-popins text-justify text-sm font-medium md:text-lg">{description}</p>
                    </div>
                    <div className="bg-primary relative grow rounded-2xl p-8">
                        <h2 className="font-popins text-3xl font-semibold md:text-5xl">{small_component.title}</h2>
                        <p className="font-popins z-50 mt-6 text-lg leading-8 font-medium text-balance md:pb-24">
                            {small_component.description}
                        </p>

                        <DecorImage
                            src={decor_image.image?.url}
                            alt="Decor Highlight"
                            size={[150, 150]}
                            className="right-0 bottom-0 z-10 hidden translate-x-1/3 md:block"
                        />
                    </div>
                </div>
                <div className="relative aspect-square h-auto w-full md:aspect-auto">
                    <StrapiImage src={image?.url} alt="Hero Thumbnail" className="h-full w-full rounded-2xl object-cover" />
                </div>
            </div>

            <div className="md:grow"></div>
        </section>
    );
}

function MeetOurExpertSection({ data }: { data: MeetExpertsData }) {
    const { title, subtitle, decor_image, profiles } = data;

    return (
        <section className="section flex flex-col items-center py-8">
            <div className="font-popins relative flex items-center gap-2 font-semibold">
                <h2 className="text-xl font-bold md:text-4xl">{title}</h2>
                <div className="from-primary-light to-primary rounded-sm bg-linear-to-r p-4">
                    <h2 className="text-xl font-bold md:text-4xl">{subtitle}</h2>
                </div>
                <DecorImage
                    src={decor_image?.url}
                    alt="Decor Love"
                    size={[42, 42]}
                    className="top-0 -left-4 -translate-x-full rotate-y-180"
                />
            </div>

            <div className="w-full p-12">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="flex w-full flex-col gap-4"
                >
                    <CarouselContent className="">
                        {profiles.map((profile: ExpertProfile) => (
                            <CarouselItem key={profile.id} className="grow md:basis-1/2 lg:basis-1/3">
                                <ProfileCard {...profile} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="bg-green flex items-center justify-center gap-4 [&>button]:relative! [&>button]:top-0! [&>button]:left-0! [&>button]:translate-0!">
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}

function VisionSection({ data }: { data: VisionSectionData }) {
    const { title, image, list, mission, vision } = data;

    return (
        <section className="section grid min-h-svh grid-cols-1 grid-rows-[auto_1fr] gap-6 py-12 md:grid-flow-col md:grid-cols-3 [&>div]:overflow-hidden [&>div]:rounded-2xl">
            <div className="bg-primary-light row-span-1 flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-xl font-semibold md:text-3xl">{mission.title}</h2>
                <p className="font-popins text-base font-normal">{mission.description}</p>
            </div>

            <div className="flex flex-col items-start gap-8 bg-white p-6 md:col-span-2 md:p-12">
                <div className="flex flex-col items-start justify-start gap-8">
                    <h2 className="font-popins text-xl font-semibold md:text-3xl">{title}</h2>

                    <ul className="flex list-none flex-col items-start gap-3">
                        {list.map((item: VisionItem) => (
                            <li key={item.id} className="font-popins flex items-center gap-2 text-lg font-normal">
                                <CircleCheck size={14} className="stroke-secondary-light" />
                                {item.list}
                            </li>
                        ))}
                    </ul>
                </div>

                <BookAppointmentButton className="place-self-start" />
            </div>

            <div className="bg-primary flex flex-col items-start justify-start gap-4 p-6 md:p-12">
                <h2 className="font-popins text-xl font-semibold md:text-3xl">{vision.title}</h2>
                <p className="font-popins text-base font-normal">{vision.description}</p>
            </div>

            <div className="relative row-span-2 hidden md:block">
                <StrapiImage src={image?.url} alt="Hero Vision" className="object-cover" />
            </div>
        </section>
    );
}
