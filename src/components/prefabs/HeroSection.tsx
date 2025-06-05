import { Play } from "lucide-react";
import { StrapiImage } from "../custom/StrapiImage";
import { Button } from "../ui/button";
import BookAppointmentButton from "./book-appointment-button";
import Header from "./header";

export default function HeroSection(props: any) {
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
