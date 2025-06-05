import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import Header from "@/components/prefabs/header";
import Image from "next/image";

interface ServiceDetailContent {
    main: string;
}

type Props = {
    params: Promise<Record<string, string>>;
};

export default async function ServiceDetailPage({ params }: Props) {
    const { service } = await params;

    const serviceDetails: { [key: string]: ServiceDetailContent } = {
        consultation: { main: "TEST" },
    };

    const serviceDetail: ServiceDetailContent = serviceDetails[service];

    if (!serviceDetail) {
        return <div className="main">Service not found</div>;
    }

    return (
        <>
            <main className="main relative flex overflow-x-clip">
                <Image src="/images/home-hero-bg.jpg" alt="Hero" fill className="-z-50 object-cover opacity-10" />
                <HeroSection serviceDetail={serviceDetail} />
            </main>
        </>
    );
}

function HeroSection({ serviceDetail }: { serviceDetail: ServiceDetailContent }) {
    return (
        <section className="section relative flex flex-col gap-4 py-8 sm:py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 w-full">
                <Header logo="" />
            </div>

            <div className="grid-row-4 grid h-full grid-flow-row grid-cols-3 gap-6">
                <div className="col-start-1 col-end-3 self-end">
                    <div className="flex items-end justify-center">
                        <h4 className="font-popins border-primary-light border-b-2 pb-8 text-6xl font-semibold">
                            Lorem ipsum dolor
                            <br /> sit amet {serviceDetail.main}
                        </h4>
                        <div className="relative aspect-2/3 w-16">
                            <Image src="/images/decor-cat.png" alt="Cat Decor" fill className="object-contain" />
                        </div>
                    </div>
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 self-end">
                    <h5 className="font-popins text-4xl font-semibold">Lorem ipsum dolor sit amet</h5>
                </div>

                <div className="col-start-1 col-end-2 row-start-3 row-end-4 self-end">
                    <div className="relative aspect-square">
                        <Image
                            src="/images/services-bg-2.jpg"
                            fill
                            sizes="100vw"
                            alt="Service BG"
                            className="z-20 h-full w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] object-cover"
                        />
                    </div>
                </div>

                <div className="col-start-2 col-end-3 flex flex-col items-center justify-between">
                    <p className="font-inter pt-8 text-center text-lg font-medium">
                        A sollicitudin etiam imperdiet dui duis est. Consectetur facilisis diam vulputate nunc elit ornare. Gravida lorem
                        iaculis convallis quis in proin ultricies eget.
                    </p>
                    <BookAppointmentButton />
                </div>
                <div className="col-start-3 col-end-4 row-start-1 row-end-3 self-end">
                    <div className="relative aspect-square">
                        <Image
                            src="/images/services-bg-2.jpg"
                            fill
                            sizes="100vw"
                            alt="Service BG"
                            className="z-20 h-full w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] object-cover"
                        />
                    </div>
                </div>
                <div className="col-start-2 col-end-4 row-start-3 row-end-4">
                    <div className="relative mx-12 aspect-video">
                        <Image
                            src="/images/decor-sofa.png"
                            fill
                            sizes="100vw"
                            alt="Service BG"
                            className="z-20 h-full w-full overflow-hidden rounded-tl-[120px] rounded-br-[120px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
