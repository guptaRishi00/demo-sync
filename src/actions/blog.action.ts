"use server";

import axios from "axios";
import dayjs, { Dayjs } from "dayjs";

// BlogPost interface used in your app
export interface BlogPost {
    image: string;
    title: string;
    content: string;
    author: string;
    authorImage: string;
    date: Dayjs;
    type: string;
    slug: string;
    reviewedBy: string;
}

// Expected shape of Strapi API response
interface StrapiMedia {
    data: {
        attributes: {
            url: string;
        };
    } | null;
}

interface StrapiPostAttributes {
    title: string;
    content: string;
    author: string;
    reviewedBy: string;
    slug: string;
    type: string;
    date: string;
    image?: StrapiMedia;
    authorImage?: StrapiMedia;
}

interface StrapiPost {
    id: number;
    attributes: StrapiPostAttributes;
}

interface StrapiResponse {
    data: StrapiPost[];
}

// Get raw Strapi response
export const getStrapiData = async (): Promise<StrapiResponse> => {
    const response = await axios.get<StrapiResponse>(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog-posts?populate=*`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
    });
    return response.data;
};

// Transform to BlogPost[]
export const getAllPosts = async (): Promise<BlogPost[]> => {
    const { data } = await getStrapiData();

    return data.map(
        ({ attributes }): BlogPost => ({
            title: attributes.title,
            content: attributes.content,
            author: attributes.author,
            reviewedBy: attributes.reviewedBy,
            slug: attributes.slug,
            type: attributes.type,
            date: dayjs(attributes.date),
            image: attributes.image?.data?.attributes.url || "",
            authorImage: attributes.authorImage?.data?.attributes.url || "",
        }),
    );
};

// Filter by slug
export const getPost = async (slug: string): Promise<BlogPost | undefined> => {
    const allPosts = await getAllPosts();
    return allPosts.find((post) => post.slug === slug);
};
