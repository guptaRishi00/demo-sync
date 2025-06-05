import { StrapiImage } from "@/components/custom/StrapiImage";
import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import ConnectToSyncSection from "@/components/prefabs/connect-to-sync-section";
import DecorImage from "@/components/prefabs/decor-image";
import EvaluationMethodologiesSection from "@/components/prefabs/evalidation-methodologies-section";
import Footer from "@/components/prefabs/footer";
import Header from "@/components/prefabs/header";
// import HealthRequirementSection from "@/components/prefabs/health-requirement-section";
import JoinNewsLetter from "@/components/prefabs/join-newsletter";
import { getGlobalData, getServiceData } from "@/data/loader";
import Image from "next/image";
import React from "react";

export default async function ServicesPage() {
    const globalres = await getGlobalData();
    const { decor_tree, decor_chair, join_news_letter, header } = globalres;

    const res = await getServiceData();

    const herosection = res.blocks.find((block: any) => block.__component === "blocks.hero-section");
    const info = res.blocks.find((block: any) => block.__component === "elements.info-section");
    const consult = res.blocks.find((block: any) => block.__component === "servicepage.consultations");
    const assessment = res.blocks.find((block: any) => block.__component === "servicepage.assessments");

    const { bg_image } = herosection;
    return (
        <>
            <main className="main relative overflow-x-clip">
                <StrapiImage src={bg_image?.url} alt="Hero" className="-z-50 object-cover opacity-10" />
                <HeroSection header={header} data={herosection} />
            </main>

            <main className="main flex flex-col overflow-hidden py-8">
                <EvaluationMethodologiesSection />
            </main>

            <main className="main flex flex-col bg-[#AC9D81]/10">
                <ConsultationSection data={info} />
            </main>

            <main className="main flex flex-col">
                <PsychiatricConsultationsSection data={consult} />
            </main>

            <main className="main flex flex-col bg-[#AC9D81]/10">
                <CounsellingAndPsychotherapy data={assessment} />
            </main>

            {/* <main className="main hidden overflow-hidden py-8">
                <HealthRequirementSection />
            </main> */}

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

function HeroSection(props: any) {
    const { header, data } = props;
    const { title, image, decor_image, description } = data;

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
                            {title.split(" ").slice(0, 3).join(" ")}
                            <br />
                            {title.split(" ")[3] + " "}
                            <span className="text-accent relative">{title.split(" ")[4]}</span>
                        </h2>
                    </div>
                    <div className="bg-primary relative grow rounded-2xl p-8">
                        <h2 className="font-popins hidden text-3xl font-semibold md:text-5xl">Lorem Ipsum</h2>
                        <p className="font-popins z-50 mt-6 text-lg leading-8 font-medium text-balance md:pb-24">{description}</p>

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

function ConsultationSection({ data }: any) {
    const { title, decor_image1, decor_image2, image, decor_image3, list, list_title } = data;

    console.log(data);

    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-12 md:gap-12">
            <h2 className="relative text-3xl font-bold md:mb-4 md:text-5xl">
                <span className="bg-primary font-popins rounded-sm px-4 text-2xl font-semibold md:text-5xl">{title}</span>
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <StrapiImage
                        src={image?.url}
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] object-cover"
                    />

                    <DecorImage
                        src={decor_image2?.url}
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:translate-y-1/2"
                    />
                </div>

                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 hidden translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src={decor_image1?.url}
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 h-16! w-16! -translate-y-full md:h-auto md:w-auto"
                    />
                    <div className="flex flex-col">
                        <p className="font-popins inline text-justify text-lg font-medium md:leading-7">{list_title}</p>
                        <ul className="mt-4 space-y-4">
                            {list.map((item: any, index: number) => (
                                <React.Fragment key={index}>
                                    <li className="font-bold">
                                        {item.title}
                                        <p className="text-lg font-normal">{item.description}</p>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    <div className="relative hidden">
                        <DecorImage
                            src={decor_image3?.url}
                            alt="Decor Butterfly"
                            size={[67, 67]}
                            className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                        />
                        <BookAppointmentButton />
                    </div>
                </div>

                <DecorImage src="/images/decor-butterfly.png" alt="Decor Butterfly" size={[44, 44]} className="top-0 right-0" />
            </div>

            <DecorImage
                src={decor_image3?.url}
                alt="Decor Butterfly"
                size={[240, 240]}
                className="invisible bottom-0 left-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function PsychiatricConsultationsSection({ data }: any) {
    const { decor_image1, decor_image2, image, decor_image3, list, list_title } = data.consultations;

    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-12 md:gap-12">
            <h2 className="font-popins relative text-3xl leading-10 font-semibold md:mb-4 md:text-5xl md:leading-normal">
                Psychiatric <span className="bg-primary rounded-sm px-4">Consultations</span>
            </h2>

            <div className="mb-10 grid w-full grid-cols-1 md:grid-cols-[60fr_40fr] md:gap-12">
                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        Child Psychiatry
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src={decor_image1?.url}
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 h-16! w-16! -translate-y-full md:h-auto md:w-auto"
                    />
                    <div className="flex">
                        <div className="flex flex-col">
                            <p className="font-popins inline text-justify text-lg font-medium md:leading-7">{list_title}</p>
                            <ul className="mt-4 space-y-4">
                                {list?.map((item: any, index: number) => (
                                    <React.Fragment key={index}>
                                        <li className="font-bold">
                                            {item.title}
                                            <p className="text-lg font-normal">{item.description}</p>
                                        </li>
                                    </React.Fragment>
                                ))}
                            </ul>
                            <div className="relative mt-8 hidden w-fit">
                                <DecorImage
                                    src="/images/decor-arrow.png"
                                    alt="Decor Butterfly"
                                    size={[60, 60]}
                                    className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                                />
                                <BookAppointmentButton />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative order-first mr-8 mb-16 aspect-49/50 w-full md:order-last">
                    <StrapiImage
                        src={image?.url}
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] object-cover"
                    />

                    <DecorImage
                        src={decor_image2?.url}
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:left-0 md:translate-x-1/8 md:translate-y-1/2"
                    />
                </div>
            </div>

            <DecorImage
                src={decor_image3?.url}
                alt="Decor Butterfly"
                size={[240, 240]}
                className="invisible right-0 bottom-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}

function CounsellingAndPsychotherapy({ data }: any) {
    const { title, decor_image1, decor_image2, image, decor_image3, list, list_title } = data.assessments;

    return (
        <section className="section relative flex h-full grow flex-col items-center justify-center gap-6 py-12 md:gap-12">
            <h2 className="font-popins relative text-3xl leading-10 font-semibold md:mb-4 md:text-5xl md:leading-normal">
                <span className="bg-primary rounded-sm px-4">{title}</span>
            </h2>

            <div className="relative mb-10 grid w-full grid-cols-1 md:grid-cols-[40fr_60fr] md:gap-12">
                <div className="relative mr-8 mb-16 aspect-49/50 w-full">
                    <StrapiImage
                        src={image?.url}
                        alt="Service BG"
                        className="z-20 h-full w-full overflow-hidden rounded-tr-[120px] rounded-bl-[120px] object-cover"
                    />

                    <DecorImage
                        src={decor_image2?.url}
                        alt="Decor Butterfly"
                        size={[160, 160]}
                        className="right-0 bottom-0 z-10 -translate-x-1/8 translate-y-1/4 stroke-3 md:translate-y-1/2"
                    />
                </div>

                <div className="relative flex flex-col items-start justify-center gap-8">
                    <h2 className="font-popins relative hidden text-2xl font-semibold tracking-normal break-normal md:text-4xl">
                        <Image
                            src="/images/decor-highlight-2.png"
                            alt="Decor Highlight"
                            fill
                            sizes="80"
                            className="bottom-0 left-0 -z-10 hidden translate-y-2/3 object-contain"
                        />
                    </h2>
                    <DecorImage
                        src={decor_image1?.url}
                        alt="Decor Smile"
                        size={[100, 100]}
                        className="top-0 left-0 h-16! w-16! -translate-y-full md:h-auto md:w-auto"
                    />
                    <div className="flex flex-col">
                        <p className="font-popins inline text-justify text-lg font-medium md:leading-7">{list_title}</p>
                        <ul className="mt-4 space-y-4">
                            {list?.map((item: any, index: number) => (
                                <React.Fragment key={index}>
                                    <li className="font-bold">
                                        {item.title}
                                        <p className="text-lg font-normal">{item.description}</p>
                                    </li>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>

                    <div className="relative hidden">
                        <DecorImage
                            src="/images/decor-arrow.png"
                            alt="Decor Butterfly"
                            size={[67, 67]}
                            className="right-0 bottom-0 z-10 translate-x-[120%] stroke-3"
                        />
                        <BookAppointmentButton />
                    </div>
                </div>

                <DecorImage src="/images/decor-butterfly.png" alt="Decor Butterfly" size={[44, 44]} className="top-0 right-0" />
            </div>

            <DecorImage
                src={decor_image3?.url}
                alt="Decor Butterfly"
                size={[240, 240]}
                className="invisible bottom-0 left-0 z-10 translate-y-1/2 md:visible"
            />
        </section>
    );
}
