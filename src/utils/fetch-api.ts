type StrapiResponse<T> = {
    data: T;
    meta?: any;
};

export async function fetchAPI<T = any>(url: string): Promise<T | { status: number; statusText: string }> {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
            },
        });

        const contentType = response.headers.get("content-type");

        if (contentType?.includes("application/json") && response.ok) {
            const data: StrapiResponse<T> = await response.json();
            return data.data;
        } else {
            return {
                status: response.status,
                statusText: response.statusText,
            };
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
