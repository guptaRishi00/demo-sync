import { cn } from "@/lib/utils";
import { StrapiImage } from "../custom/StrapiImage";

type Props = {
    className?: string;
    title?: string;
    description?: string;
    imagePath?: { url?: any } | string;
};

export default function CommitmentCard({ className, title, description, imagePath }: Props) {
    return (
        <div className={cn("relative aspect-square overflow-hidden rounded-2xl", className)}>
            <div className="bg-primary font-popins absolute bottom-0 left-0 z-10 m-8 flex flex-col gap-2 rounded-2xl px-4 py-6 opacity-80 lg:h-44">
                <h5 className="text-xl font-semibold">{title}</h5>
                <p className="mb-12 text-base font-normal">{description}</p>
            </div>
            <StrapiImage
                src={typeof imagePath === "string" ? imagePath : imagePath?.url}
                alt={title ?? ""}
                className="-z-10 h-full w-full object-cover"
            />
        </div>
    );
}
