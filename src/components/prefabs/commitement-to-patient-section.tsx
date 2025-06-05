import CommitmentCard from "@/components/prefabs/commitment-card";
// import Image from "next/image";
import { StrapiImage } from "../custom/StrapiImage";

// interface StrapiImageType {
//     url: string;
// }

// interface DecorImage {
//     image?: StrapiImageType;
// }

interface CommitmentPoint {
    id: number;
    text: string;
    title?: string;
    description?: string;
    imagePath?: { url?: string } | string;
}

interface CommitmentSectionData {
    __component: "aboutpage.commitment-section";
    title: string;
    description: string;
    commitment: CommitmentPoint[];
}

interface CommitmentToPatientSectionProps {
    data: CommitmentSectionData;
}

export default function CommitmentToPatientSection({ data }: CommitmentToPatientSectionProps) {
    const { title, description, commitment } = data;
    return (
        <section className="section flex flex-col gap-12 py-16">
            <div className="font-popins flex w-full flex-col gap-4">
                <h2 className="relative w-full text-center text-3xl font-semibold tracking-normal break-normal md:text-5xl">{title}</h2>
                <p className="text-center text-lg font-normal">{description}</p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {commitment.map((point: CommitmentPoint) => (
                    <CommitmentCard key={point.id} {...point} />
                ))}
            </div>
        </section>
    );
}
