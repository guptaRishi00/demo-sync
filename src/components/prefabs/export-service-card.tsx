import BookAppointmentButton from "@/components/prefabs/book-appointment-button";
import { cn } from "@/lib/utils";
import DecorImage from "./decor-image";
import { StrapiImage } from "../custom/StrapiImage";

type ImageObj = {
    image?: { url?: string };
};

type BookAppointmentData = {
    title: string;
    decor_smile: ImageObj;
    decor_leaves: ImageObj;
};

type Props = {
    imagePath: string;
    title: string;
    description?: string;
    isBookAppointment?: boolean;
    bookAppointment?: BookAppointmentData;
};

export default function ExportServiceCard({ imagePath, title, description, isBookAppointment, bookAppointment }: Props) {
    const titleWords = title.split(" ");

    return (
        <div className="flex w-full flex-col justify-start gap-2">
            {isBookAppointment && bookAppointment ? (
                <>
                    <div className="from-secondary-light to-secondary relative flex aspect-387/267 w-full flex-col justify-center overflow-hidden rounded-2xl bg-linear-to-br p-8">
                        <h5 className="font-popins text-5xl leading-14 font-semibold text-white">
                            {titleWords[0] || ""} <br />
                            {titleWords[1] || ""} <br />
                            {titleWords[2] || ""} <br />
                            <span className="text-primary">{titleWords[3] || ""}</span>
                        </h5>

                        {bookAppointment.decor_smile?.image?.url && (
                            <DecorImage
                                src={bookAppointment.decor_smile.image.url}
                                alt="Decor Smile"
                                size={[78, 78]}
                                className="top-0 right-0 z-20 -translate-x-1/2 translate-y-2/3"
                            />
                        )}

                        {bookAppointment.decor_leaves?.image?.url && (
                            <DecorImage
                                src={bookAppointment.decor_leaves.image.url}
                                alt="Decor Leaves"
                                size={[260, 260]}
                                className="right-0 bottom-0 z-20 size-44 translate-x-1/5 translate-y-1/4 opacity-80 md:size-[260px]"
                            />
                        )}
                    </div>

                    <BookAppointmentButton className="mt-4 w-full" />
                </>
            ) : (
                <>
                    <div className="relative aspect-387/267 w-full overflow-hidden rounded-2xl">
                        <StrapiImage alt={title} src={imagePath} className="object-cover" />
                    </div>
                    <h3 className="font-popins mt-4 text-lg font-semibold md:text-2xl">{title}</h3>
                    <p className={cn("text-muted font-popins text-left text-base font-medium", !title && "mt-2")}>{description}</p>
                </>
            )}
        </div>
    );
}
