import Link from "next/link";
import DecorImage from "./decor-image";
import { StrapiImage } from "../custom/StrapiImage";
import React from "react";

// interface ContactSectionData {
//     title: string;
//     description: string;
//     bg_testimonial: {
//         url: string;
//     };
//     testimonial_mask: {
//         url: string;
//     };
//     qr_code: {
//         url: string;
//     };
//     cat: string;
//     location: string;
//     full_location: string;
//     phone_number: string;
//     number: string;
//     e_mail: string;
//     mail: string;
// }

interface ContactSectionProps {
    data: {
        title: string;
        description: string;
        bg_testimonial: {
            image: {
                url: string;
            };
        };
        testimonial_mask: {
            image: {
                url: string;
            };
        };
        qr_code: {
            image: {
                url: string;
            };
        };
        cat: {
            image: {
                url: string;
            };
        };
        location: string;
        full_location: string;
        phone_number: string;
        number: string;
        e_mail: string;
        mail: string;
    };
}

export default function FeedbackSection(data: ContactSectionProps) {
    const {
        title,
        description,
        bg_testimonial,
        testimonial_mask,
        qr_code,
        cat,
        location,
        full_location,
        phone_number,
        number,
        e_mail,
        mail,
    } = data.data;
    return (
        <section className="section py-8 md:pt-12">
            <div className="relative z-10 w-full rounded-2xl bg-[#0059B8] md:aspect-video lg:bg-transparent">
                <StrapiImage src={bg_testimonial.image?.url} alt="Testimonials Background" className="absolute -z-50 object-contain" />
                <StrapiImage src={testimonial_mask.image?.url} alt="Testimonials Background" className="absolute -z-30 object-contain" />

                <div className="flex h-full flex-col items-center justify-between gap-8 md:flex-row">
                    <div className="flex flex-col gap-4 p-12 md:max-w-1/2">
                        <h4 className="font-inter text-background text-xl md:text-3xl">{title}</h4>
                        <p className="font-lato text-base text-white md:text-xl">{description}</p>

                        <Link href="https://www.google.com/search?client=firefox-b-d&sca_esv=4f1f0cd305a72421&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzQHFwD8v-EdFoBLy4B87kCBXR6d1ehRTEZiHzJ8JZ_iksY85w8rw0ppbr4ikg1Aj7u1n2sOF0OhJi5aJi7VImEcdOUHiZisi2YiXTjI57ps_byA8Tmnirf5qNDS2WA5GB5zadrA%3D&q=SyNC-Positive+Psychiatry+Foundation+Reviews&sa=X&ved=2ahUKEwjV6MW3utqMAxVoSfEDHaRiG8UQ0bkNegQIJhAE&biw=1391&bih=673&dpr=2#lrd=0x3bae156fdb22aa43:0xe73b834380e395b5,3,,,,">
                            <div className="relative mt-4 aspect-square w-52 md:w-62">
                                <StrapiImage
                                    src={qr_code.image?.url}
                                    alt="QR Code"
                                    className="stroke-primary absolute -z-50 rounded-2xl object-contain"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="bg-primary-light [&>h4]:font-inter [&>p]:font-popins relative -z-40 rounded-2xl px-16 py-12 shadow-2xl lg:w-136 [&>h4]:mb-2 [&>h4]:text-xl [&>h4]:font-semibold md:[&>h4]:text-3xl [&>p]:mb-4 [&>p]:text-base md:[&>p]:text-lg">
                        <h4 className="">{location}</h4>
                        <p className="mb-4 text-lg">
                            {full_location.split("\n").map((line: any, idx: any) => (
                                <React.Fragment key={idx}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </p>
                        <h4>{phone_number}</h4>
                        <p>+{number}</p>
                        <h4>{e_mail}</h4>
                        <p className="pb-28 md:pb-42">{mail}</p>

                        <DecorImage
                            src={cat.image?.url}
                            alt="Cat Decor"
                            size={[200, 200]}
                            className="right-0 bottom-0 h-34! w-30! md:h-56! md:w-50!"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
