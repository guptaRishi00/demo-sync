import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";
import dayjs from "dayjs";
import { BlogPost } from "@/actions/blog.action";
import axios from "axios";

const homePageQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        bg_image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "elements.logo": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                    },
                },
                "homepage.founder-note": {
                    populate: {
                        decor_highlight: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        decor_highlight2: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        decor_new: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        video: {
                            populate: {
                                poster: {
                                    fields: ["url", "alternativeText"],
                                },
                                video: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.evaluation-methodologies": {
                    populate: {
                        video: {
                            populate: {
                                poster: { fields: ["url", "alternativeText"] },
                                video: { fields: ["url", "alternativeText"] },
                            },
                        },
                    },
                },
                "homepage.expert-services": {
                    populate: {
                        decor_image: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        cardDetails: {
                            populate: {
                                imagePath: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        bookAppointment: {
                            populate: {
                                decor_smile: {
                                    populate: {
                                        image: {
                                            fields: ["url", "alternativeText"],
                                        },
                                    },
                                },
                                decor_leaves: {
                                    populate: {
                                        image: {
                                            fields: ["url", "alternativeText"],
                                        },
                                    },
                                },
                            },
                        },
                        decor_love: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        why_us: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                                small_component: true,
                            },
                        },
                    },
                },
                "homepage.common-quote": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        decor_underline: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        decor_light: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.health-requirement": {
                    populate: {
                        decor_smile: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        simple_card: {
                            populate: {
                                decor_image: {
                                    populate: {
                                        image: {
                                            fields: ["url", "alternativeText"],
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                "homepage.vibe-section": {
                    populate: {
                        decor_vibes: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        carousel: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.testimonials": {
                    populate: {
                        testimonials: {
                            populate: {
                                profile: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "homepage.feedback": {
                    populate: {
                        bg_testimonial: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        testimonial_mask: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        qr_code: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        cat: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

export async function getHomePageData() {
    const path = "/api/home-page";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);

    url.search = homePageQuery;

    return await fetchAPI(url.href);
}

const globalQuery = qs.stringify({
    populate: {
        header: {
            populate: {
                logo: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        join_news_letter: {
            populate: {
                decor_circle: {
                    fields: ["url", "alternativeText"],
                },
                decor_circle2: {
                    fields: ["url", "alternativeText"],
                },
            },
        },
        decor_tree: {
            fields: ["url", "alternativeText"],
        },
        decor_chair: {
            fields: ["url", "alternativeText"],
        },
        decor_butterfly1: {
            fields: ["url", "alternativeText"],
        },
        footer: true,
    },
});

export async function getGlobalData() {
    const path = "/api/global";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = globalQuery;
    return await fetchAPI(url.href);
}

const aboutQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: {
                            fields: ["url", "alternativeText"],
                        },
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        decor_image: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        small_component: true,
                    },
                },
                "aboutpage.meet-experts": {
                    populate: {
                        decor_image: {
                            fields: ["url", "alternativeText"],
                        },
                        profiles: {
                            populate: {
                                profileImage: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
                "aboutpage.why-choose": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        list: true,
                        mission: true,
                        vision: true,
                    },
                },
                "aboutpage.commitment-section": {
                    populate: {
                        commitment: {
                            populate: {
                                imagePath: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                        decor_image: {
                            populate: {
                                image: {
                                    fields: ["url", "alternativeText"],
                                },
                            },
                        },
                    },
                },
            },
        },
    },
});

export async function getAboutData() {
    const path = "/api/about-page";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = aboutQuery;
    return await fetchAPI(url.href);
}

const serviceQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: { fields: ["url", "alternativeText"] },
                        image: { fields: ["url", "alternativeText"] },
                        decor_image: {
                            populate: { image: { fields: ["url", "alternativeText"] } },
                        },
                        // small_component is probably not a relation, remove or fix if necessary
                    },
                },
                "elements.info-section": {
                    populate: {
                        decor_image1: { fields: ["url", "alternativeText"] },
                        image: { fields: ["url", "alternativeText"] },
                        decor_image2: { fields: ["url", "alternativeText"] },
                        decor_image3: { fields: ["url", "alternativeText"] },
                        // REMOVE list: true, and list_title: true
                        list: true,
                    },
                },
                "servicepage.consultations": {
                    populate: {
                        consultations: {
                            populate: {
                                decor_image1: { fields: ["url", "alternativeText"] },
                                image: { fields: ["url", "alternativeText"] },
                                decor_image2: { fields: ["url", "alternativeText"] },
                                decor_image3: { fields: ["url", "alternativeText"] },
                                // REMOVE list: true, and list_title: true
                                list: true,
                            },
                        },
                    },
                },
                "servicepage.assessments": {
                    populate: {
                        assessments: {
                            populate: {
                                decor_image1: { fields: ["url", "alternativeText"] },
                                image: { fields: ["url", "alternativeText"] },
                                decor_image2: { fields: ["url", "alternativeText"] },
                                decor_image3: { fields: ["url", "alternativeText"] },
                                // REMOVE list: true, and list_title: true
                                list: true,
                            },
                        },
                    },
                },
            },
        },
    },
});

export async function getServiceData() {
    const path = "/api/service-page";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = serviceQuery;
    return await fetchAPI(url.href);
}

const academyQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                "blocks.hero-section": {
                    populate: {
                        bg_image: { fields: ["url", "alternativeText"] },
                        image: { fields: ["url", "alternativeText"] },
                        decor_image: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        decor_image2: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                    },
                },
                "academypage.what-to-get": {
                    populate: {
                        clinical_training: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                                decor_image: { fields: ["url", "alternativeText"] }, // if you want decor_image too
                            },
                        },
                        discussion_forum: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                                decor_image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        practice: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        Learning: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                                decor_image: { fields: ["url", "alternativeText"] },
                            },
                        },
                        Expert: {
                            populate: {
                                image: { fields: ["url", "alternativeText"] },
                                decor_image: { fields: ["url", "alternativeText"] },
                            },
                        },
                    },
                },
                "academypage.points-to-join": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        decor_image: {
                            fields: ["url", "alternativeText"],
                        },
                        points: true,
                    },
                },
                "academypage.subscribe-section": {
                    populate: {
                        image: {
                            fields: ["url", "alternativeText"],
                        },
                        decor_new: {
                            fields: ["url", "alternativeText"],
                        },
                        faq: true,
                    },
                },
            },
        },
    },
});

export async function getAcademyData() {
    const path = "/api/academy";
    const BASE_URL = getStrapiURL();
    const url = new URL(path, BASE_URL);

    url.search = academyQuery;
    return await fetchAPI(url.href);
}

export const getPost = async (slug: string): Promise<BlogPost | null> => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
        });

        const post = response.data?.data?.[0];
        if (!post) return null;

        const attrs = post;

        return {
            title: attrs.title,
            content: attrs.content,
            author: attrs.author,
            reviewedBy: attrs.reviewedBy,
            slug: attrs.slug,
            type: attrs.type,
            date: dayjs(attrs.date),
            image: attrs.image?.url || "", // or `attrs.image?.data?.attributes?.url`
            authorImage: attrs.authorImage?.url || "", // or `attrs.authorImage?.data?.attributes?.url`
        };
    } catch (err) {
        console.error("Error fetching post by slug:", err);
        return null;
    }
};
