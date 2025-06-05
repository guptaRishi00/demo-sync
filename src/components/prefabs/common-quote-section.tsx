import DecorImage from "@/components/prefabs/decor-image";
import { Quote } from "lucide-react";
import { StrapiImage } from "../custom/StrapiImage";

interface QuoteProps {
    data: {
        description: string;
        image: {
            url: string;
        };
        decor_underline: {
            image: {
                url: string;
            };
        };
        name: string;
        designation: string;
        decor_light: {
            image: {
                url: string;
            };
        };
    };
}

export default function CommonQuoteSection(data: QuoteProps) {
    const { description, image, decor_underline, name, designation, decor_light } = data.data;
    return (
        <section className="section relative flex flex-col items-center gap-6 py-8 md:flex-row">
            <div className="relative aspect-3/3 h-fit w-full grow md:m-16">
                <StrapiImage src={image?.url} alt="Hero Thumbnail" className="right-0 left-0 rounded-2xl object-contain" />
            </div>

            <div className="flex w-full grow flex-col justify-center gap-8 md:max-w-1/2">
                <Quote className="fill-foreground size-14" />
                <p className="font-popins relative text-lg font-medium">
                    {description}
                    <DecorImage
                        src={decor_underline.image?.url ?? ""}
                        alt="Decor Smile"
                        size={[240, 240]}
                        className="bottom-0 left-0 translate-y-2/3"
                    />
                </p>
                <span className="font-inter mt-2 w-fit font-medium">
                    <b>{name}</b>
                    <br /> {designation}
                </span>
            </div>

            <DecorImage
                src={decor_light.image?.url}
                alt="Decor light"
                size={[120, 120]}
                className="right-0 bottom-0 hidden opacity-40 md:block lg:opacity-100"
            />
        </section>
    );
}
