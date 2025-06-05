import DecorImage from "@/components/prefabs/decor-image";
// import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { StrapiImage } from "../custom/StrapiImage";

interface Carousel {
    image: {
        url: string;
    };
    id: number;
}
interface VibeSectionProps {
    data: {
        decor_vibes: {
            image: { url: string };
        };
        carousel: Carousel[];
    };
}

export default function VibeSection(data: VibeSectionProps) {
    const { decor_vibes, carousel } = data.data;
    return (
        <section className="section flex flex-col items-center justify-center gap-4 p-8 md:min-h-dvh md:gap-12">
            <div className="relative aspect-8/1 h-8 md:h-16">
                <DecorImage src={decor_vibes.image?.url} alt="Decor New" size={[800, 100]} className="" />
            </div>
            <div className="aspect-[3.75/3] w-4/5 md:w-3/4">
                <Carousel className="h-full">
                    <CarouselContent className="h-full">
                        {carousel.map((item: Carousel) => (
                            <CarouselItem key={item.id}>
                                <Card className="h-full py-0">
                                    <CardContent className="relative flex h-full items-center justify-center">
                                        <StrapiImage src={item.image?.url} alt="Carousel Image" className="rounded-2xl object-contain" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious variant="default" className="md:size-12" />
                    <CarouselNext variant="default" className="md:size-12" />
                </Carousel>
            </div>
        </section>
    );
}
