import CommonQuoteSection from "@/components/prefabs/common-quote-section";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import SudentSubscription from "@/components/prefabs/student-subscription";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { CirclePlay, Library, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "./style.css";
import { getAcademyData, getGlobalData, getHomePageData } from "@/data/loader";
import { StrapiImage } from "@/components/custom/StrapiImage";

// Base interfaces for common structures
interface StrapiImageData {
    url: string;
    alternativeText?: string;
    width?: number;
    height?: number;
}

interface DecorImageData {
    image?: StrapiImageData;
    url?: string;
}

// Block component interfaces
interface HeroSectionData {
    __component: "blocks.hero-section";
    title: string;
    description: string;
    image?: StrapiImageData;
    decor_image?: DecorImageData;
    decor_image2?: DecorImageData;
}

interface WhatToGetItemData {
    title: string;
    description: string;
    image?: StrapiImageData;
    decor_image?: StrapiImageData;
}

interface WhatToGetSectionData {
    __component: "academypage.what-to-get";
    title: string;
    description: string;
    clinical_training: WhatToGetItemData;
    discussion_forum: WhatToGetItemData;
    practice: WhatToGetItemData;
    Learning: WhatToGetItemData;
    Expert: WhatToGetItemData;
}

interface PointData {
    title: string;
    description: string;
}

interface PointsToJoinSectionData {
    __component: "academypage.points-to-join";
    title: string;
    description: string;
    points: PointData[];
    decor_image?: StrapiImageData;
}

interface FAQItem {
    title: string;
    description: string;
}

interface SubscribeSectionData {
    __component: "academypage.subscribe-section";
    title: string;
    description: string;
    title2: string;
    description2: string;
    image?: StrapiImageData;
    decor_new?: StrapiImageData;
    faq: FAQItem[];
}

interface CommonQuoteData {
    __component: "homepage.common-quote";
    description: string;
    image: { url: string };
    decor_underline: { image: { url: string } };
    name: string;
    designation: string;
    decor_light: { image: { url: string } };
    // Add specific properties based on your CommonQuoteSection component
}
interface StrapiImage {
    url: string;
}
interface Card {
    id: number;
    title: string;
    description?: string;
    image: StrapiImage;
}

interface HealthRequirementData {
    __component: "homepage.health-requirement";
    // Add specific properties based on your HealthRequirementSection component

    title: string;
    description: string;
    decor_smile: { image: StrapiImage };
    simple_card: Card[];
}

interface HeaderData {
    logo?: StrapiImageData;
}

interface JoinNewsLetterData {
    title: string;
    subtitle: string;
    disclaimer: string;
    // Add specific properties based on your JoinNewsLetter component
}

interface GlobalData {
    decor_tree?: StrapiImageData;
    decor_chair?: StrapiImageData;
    decor_butterfly1?: StrapiImageData;
    join_news_letter: JoinNewsLetterData;
    header: HeaderData;
}

// interface AcademyBlock {
//     __component: string;
// }

interface AcademyPageData {
    blocks: (HeroSectionData | WhatToGetSectionData | PointsToJoinSectionData | SubscribeSectionData)[];
}

// interface HomePageBlock {
//     __component: string;
// }

interface HomePageData {
    blocks: (CommonQuoteData | HealthRequirementData)[];
}

// Component prop interfaces
interface HeroSectionProps {
    header: HeaderData;
    data: HeroSectionData;
}

interface WhatToGetSectionProps {
    data: WhatToGetSectionData;
}

interface PointsToJoinSectionProps {
    data: PointsToJoinSectionData;
}

interface SubscribeSectionProps {
    data: SubscribeSectionData;
}

interface DontMissInformationSectionProps {
    data?: unknown; // You can define this based on actual usage
}

interface ScrollCardItem {
    title: string;
    description: string;
}

export default async function AcademyPage() {
    const res: AcademyPageData = await getAcademyData();

    const herosection = res.blocks.find((block): block is HeroSectionData => block.__component === "blocks.hero-section");
    const whatToget = res.blocks.find((block): block is WhatToGetSectionData => block.__component === "academypage.what-to-get");
    const pointsToget = res.blocks.find((block): block is PointsToJoinSectionData => block.__component === "academypage.points-to-join");
    const subscribeSection = res.blocks.find(
        (block): block is SubscribeSectionData => block.__component === "academypage.subscribe-section",
    );

    const decor_image = pointsToget?.decor_image;

    const homeres: HomePageData = await getHomePageData();
    const commonQuote = homeres.blocks.find((block): block is CommonQuoteData => block.__component === "homepage.common-quote");
    const healthRequirement = homeres.blocks.find(
        (block): block is HealthRequirementData => block.__component === "homepage.health-requirement",
    );

    const globalres: GlobalData = await getGlobalData();
    const { decor_tree, decor_chair, join_news_letter, header } = globalres;

    // Ensure required data exists
    if (!herosection || !whatToget || !pointsToget || !subscribeSection) {
        throw new Error("Missing required page data");
    }

    return (
        <>
            <main className="main relative overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection header={header} data={herosection} />
            </main>

            <main className="main relative overflow-x-clip md:min-h-fit!">
                <WhatToGetSection data={whatToget} />
            </main>

            <main className="main bg-secondary/20 relative flex items-center">
                <PointsToJoinSection data={pointsToget} />
                <DecorImage
                    src={decor_image?.url}
                    alt="Decor Table"
                    size={[500, 500]}
                    className="right-2 bottom-0 hidden translate-y-1 md:block"
                />
            </main>

            <main className="main relative hidden overflow-x-clip md:min-h-fit!">
                <DontMissInformationSection />
            </main>

            <main className="main hidden px-0! md:min-h-fit!">
                <ScrollCards />
            </main>

            <main className="main relative flex items-start md:min-h-fit!">
                <SubscribeSection data={subscribeSection} />
            </main>

            {commonQuote && (
                <main className="main bg-secondary/20 md:min-h-fit!">
                    <CommonQuoteSection data={commonQuote} />
                </main>
            )}

            {healthRequirement && (
                <main className="main hidden overflow-hidden py-8">
                    <HealthRequirementSection data={healthRequirement} />
                </main>
            )}

            <main className="main relative flex flex-col gap-8 overflow-hidden py-12 md:gap-12" id="contact-us">
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

function HeroSection({ header, data }: HeroSectionProps) {
    const { title, description, image, decor_image2, decor_image } = data;

    return (
        <section className="section relative flex flex-col gap-4 py-8 md:min-h-dvh">
            <div className="mb-8 w-full">
                <Header logo={header.logo?.url ?? ""} />
            </div>

            <div className="grid grid-flow-row auto-rows-min grid-cols-1 grid-rows-2 gap-6 md:grow md:grid-cols-2 md:grid-rows-1">
                <div className="flex h-fit flex-col justify-center gap-6 md:mt-26 md:self-start">
                    <h2 className="font-popins relative inline text-4xl font-semibold md:text-7xl md:leading-22">
                        {title.split(" ").slice(0, 4).join(" ")}
                        <br />
                        <span className="text-accent relative">{title.split(" ").slice(4, 6).join(" ")}</span>
                    </h2>
                    <p className="text-muted font-popins pb-6 text-justify text-sm font-medium md:pr-16 md:text-lg">{description}</p>

                    <div className="flex gap-2">
                        <Link href="#contact-us">
                            <Button variant="secondary" className="text-background font-popins h-14 w-44 text-lg">
                                Send Enquiry
                            </Button>
                        </Link>

                        <Button variant="default" size="icon" className="hidden h-14 w-14">
                            <CirclePlay className="scale-150" />
                        </Button>
                    </div>

                    <DecorImage
                        src={decor_image?.image?.url}
                        alt="Decor Butterfly"
                        size={[100, 100]}
                        className="relative bottom-0 left-0"
                    />
                </div>

                <div className="relative aspect-5/6 h-fit max-h-[80vh] shrink md:top-8 md:left-20 md:order-last md:grow">
                    <div className="absolute top-1/8 left-1/8 flex flex-col items-start gap-4">
                        <div className="z-10 flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1">
                            <Button variant="default" size="icon" className="rounded-full">
                                <Video className="fill-white stroke-white" />
                            </Button>
                            <div className="mr-4">
                                <small className="text-muted font-popins text-sm font-medium">Live</small>
                                <h6 className="font-popins text-base font-bold">Class</h6>
                            </div>
                        </div>

                        <div className="z-10 flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1">
                            <Button variant="default" size="icon" className="rounded-full bg-[#EE1908]">
                                <Library className="fill-white stroke-white" />
                            </Button>
                            <div className="mr-4">
                                <small className="text-muted font-popins text-sm font-medium">Learning Resources</small>
                                <h6 className="font-popins hidden text-base font-bold">203+</h6>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/3 z-10">
                        <div className="z-10 flex w-fit flex-col items-start gap-2 rounded-3xl bg-white px-3 py-1">
                            <div className="flex items-center gap-2">
                                <Button variant="default" size="icon" className="rounded-full">
                                    <Users className="fill-white stroke-white" />
                                </Button>
                                <div className="mr-4">
                                    <small className="text-muted font-popins text-sm font-medium">Online Courses</small>
                                    <h6 className="font-popins hidden text-base font-bold">98</h6>
                                </div>
                            </div>

                            <div className="hidden px-2">
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-1.png" alt="User 1" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-2.png" alt="User 2" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-3.png" alt="User 3" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-4.png" alt="User 4" fill className="h-full w-full" />
                                </div>
                                <div className="relative size-6 overflow-hidden rounded-full border-2 border-white">
                                    <Image src="/images/academy-user-5.png" alt="User 5" fill className="h-full w-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <StrapiImage src={image?.url ?? ""} alt="Hero Thumbnail" className="absolute object-cover" />
                </div>
            </div>

            <DecorImage
                src={decor_image2?.image?.url}
                alt="Decor Table"
                size={[100, 100]}
                className="bottom-0 left-1/2 md:-translate-x-1/2"
            />
        </section>
    );
}

function WhatToGetSection({ data }: WhatToGetSectionProps) {
    const { title, description, clinical_training, discussion_forum, practice, Learning, Expert } = data;

    return (
        <section className="section flex flex-col gap-12 py-16">
            <div className="font-popins grid w-full grid-cols-1 gap-4 md:grid-cols-[40fr_60fr] md:gap-16">
                <h2 className="relative inline text-2xl font-semibold md:text-4xl">
                    {title.split(" ").slice(0, 5).join(" ")}{" "}
                    <span className="text-accent relative">{title.split(" ").slice(5, 10).join(" ")}</span>
                </h2>
                <p className="text-muted font-popins text-justify text-sm font-medium md:text-lg">{description}</p>
            </div>

            <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-6 md:grid-cols-4 [&>div]:flex [&>div]:flex-col [&>div]:overflow-hidden [&>div]:rounded-2xl [&>div]:p-8">
                <div className="to-primary from-primary-light col-span-2 items-center bg-gradient-to-r md:col-span-1">
                    <div className="relative mb-8 size-24">
                        <StrapiImage src={clinical_training.image?.url ?? ""} alt="Clinical Training" className="h-full w-full" />
                    </div>
                    <h6 className="font-popins w-full pb-4 text-left text-lg font-bold">{clinical_training.title}</h6>
                    <p className="font-popins w-full text-left text-lg font-medium">{clinical_training.description}</p>
                </div>
                <div className="relative col-span-2 bg-gradient-to-r from-white to-white">
                    <div className="relative mb-8 size-24">
                        <StrapiImage src={discussion_forum.image?.url ?? ""} alt="Discussion Forum" className="h-full w-full" />
                    </div>
                    <h6 className="font-popins w-full pb-4 text-left text-lg font-bold">Discussion Forum</h6>
                    <p className="w-1/2 text-left text-lg">{discussion_forum.description}</p>
                    <DecorImage
                        src={discussion_forum.decor_image?.url}
                        alt="Decor Plant"
                        size={[160, 160]}
                        className="absolute right-0 bottom-0 z-10"
                    />
                </div>
                <div className="to-primary-light/50 from-primary-light/60 col-span-2 items-center bg-gradient-to-r md:col-span-1">
                    <div className="relative mb-8 size-24">
                        <StrapiImage src={practice.image?.url ?? ""} alt="Practice" className="h-full w-full" />
                    </div>
                    <h6 className="font-popins w-full pb-4 text-left text-lg font-bold">{practice.title}</h6>
                    <p className="font-popins w-full text-left text-lg font-medium">{practice.description}</p>
                </div>

                <div className="to-primary from-primary-light relative col-span-2 bg-gradient-to-r">
                    <div className="relative mb-8 size-24">
                        <StrapiImage src={Learning.image?.url ?? ""} alt="Learning" className="h-full w-full" />
                    </div>
                    <h6 className="font-popins w-full pb-4 text-left text-lg font-bold">{Learning.title}</h6>
                    <p className="font-popins text-left text-lg font-medium text-balance md:w-1/2">{Learning.description}</p>
                    <DecorImage
                        src={Learning.decor_image?.url}
                        alt="Decor Plant"
                        size={[160, 160]}
                        className="absolute right-0 bottom-0 z-10 opacity-60 md:opacity-100"
                    />
                </div>
                <div className="to-primary-light/50 from-primary-light/60 relative col-span-2 bg-gradient-to-r">
                    <div className="relative mb-8 size-24">
                        <StrapiImage src={Expert.image?.url ?? ""} alt="Expert" className="h-full w-full" />
                    </div>
                    <h6 className="font-popins w-full pb-4 text-left text-lg font-bold">{Expert.title}</h6>
                    <p className="font-popins text-left text-lg font-medium text-balance md:w-1/2">{Expert.description}</p>
                    <DecorImage src={Expert.decor_image?.url} alt="Decor Plant" size={[500, 500]} className="absolute top-0 right-0 z-10" />
                </div>
            </div>
        </section>
    );
}

function PointsToJoinSection({ data }: PointsToJoinSectionProps) {
    const { title, description, points } = data;

    return (
        <section className="section relative flex h-full flex-col items-center justify-center gap-4 py-12 md:flex-row">
            <div className="relative aspect-square w-3/4 grow md:min-h-[65vh] md:w-auto">
                <Image src="/images/academy-bg.png" alt="Academy BG" fill className="h-full w-full" />
            </div>
            <div className="flex flex-col items-center gap-4 md:items-start md:pr-12">
                <h2 className="font-popins relative text-2xl font-semibold md:text-5xl">{title}</h2>

                <p className="font-popins text-lg font-normal text-balance">{description}</p>

                <div className="flex flex-col gap-6">
                    {points.map((point: PointData, index: number) => (
                        <div key={index} className="font-popins flex items-center gap-6 rounded-2xl bg-white p-4 text-base font-medium">
                            <span className="bg-primary grid size-12 shrink-0 place-items-center rounded-full text-lg font-semibold">
                                {index + 1}
                            </span>
                            <p className="break-word text-left text-lg text-balance">
                                <strong className="mb-4">{point.title}</strong> <br />
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>

                <Button className="font-popins mt-6 hidden w-fit px-8 py-6">Join Now</Button>
            </div>
        </section>
    );
}

function DontMissInformationSection({ data }: DontMissInformationSectionProps) {
    console.log(data);

    return (
        <section className="section relative flex grow flex-col items-center justify-center gap-6 py-8 md:gap-12">
            <h2 className="font-popins relative text-3xl font-semibold md:text-5xl">
                Frequently Asked <span className="bg-primary h-fit rounded-sm">Questions</span>
                <DecorImage
                    src="/images/decor-flower.png"
                    alt="Decor Butterfly"
                    size={[100, 100]}
                    className="top-0 right-0 md:left-0 md:-translate-x-full"
                />
            </h2>

            <p className="text-muted font-popins text-center text-sm md:max-w-3/4 md:text-lg">
                Find quick answers to common questions about our programs, applications, schedules, and support.
            </p>
        </section>
    );
}

function SubscribeSection({ data }: SubscribeSectionProps) {
    const { title, description, title2, description2, image, decor_new, faq } = data;

    return (
        <section className="section relative flex h-full flex-col items-start justify-start gap-12 py-8 md:flex-row md:py-16">
            <div className="space-y-6">
                <div className="relative aspect-1307/497 w-3/4 md:max-w-[30vw]">
                    <StrapiImage src={image?.url ?? ""} alt="Academy Frame" className="md:h-full md:w-full" />
                    <DecorImage src={decor_new?.url} alt="Decor Butterfly" size={[40, 40]} className="right-0 bottom-0 translate-y-full" />
                </div>
                <h2 className="font-popins relative text-3xl leading-10 font-bold md:text-5xl md:leading-16">
                    {title.split(" ").slice(0, 3).join(" ")} <br /> {title.split(" ").slice(3, 6).join(" ")}
                    <span className="text-accent h-fit rounded-sm">!</span>
                </h2>
                <p className="font-popins font-medium">{description}</p>
                <div className="flex md:mr-26">
                    <SudentSubscription />
                </div>
                <p className="font-popins hidden text-sm font-normal">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                </p>
            </div>

            <div className="font-popins flex grow flex-col gap-4">
                <h5 className="text-4xl leading-16 font-bold">
                    {title2.split(" ").slice(0, 2).join(" ")} <span className="bg-primary h-fit rounded-sm">{title2.split(" ")[2]}</span>
                </h5>
                <p className="text-lg">{description2}</p>
                <Accordion type="single" collapsible className="text-lg">
                    {faq.map((item: FAQItem, index: number) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="font-popins flex items-center justify-between">{item.title}</AccordionTrigger>
                            <AccordionContent className="font-popins text-muted">{item.description}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}

function ScrollCards() {
    const line1: ScrollCardItem[] = [
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
        {
            title: "Lorem Ipsum",
            description: "Lorem Ipsum dolor sit amet",
        },
    ];

    return (
        <section className="">
            <ScrollArea className="scroll-9 mx-auto h-94 w-full gap-20 p-4 whitespace-nowrap">
                {line1.map((line, index) => (
                    <span key={index} className="text-secondary bg-secondary-light/40 h-84 rounded-2xl p-2">
                        {line.title}
                    </span>
                ))}
                <ScrollBar orientation="horizontal" className="hidden" />
            </ScrollArea>
        </section>
    );
}
