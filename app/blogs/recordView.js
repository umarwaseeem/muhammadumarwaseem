


export async function recordView(slug) {
    console.log((typeof window) ? "CLIENT" : "SERVER")
    console.log("---------------")
    console.log("CALLED RECORD VIEW")
    try {
        console.log("slug: ", slug);
        const body = JSON.stringify({ slug: slug });
        console.log("Sending body: ", body);
        const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
        const response =
            await fetch(`${BASE_URL}/api/recordViewCount`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body,
                cache: 'force-cache',
            });

        console.log("Response URL:", response.url);
        console.log("Response Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        console.log("Response json on client: ", json);
        console.log("message: ", json.message, "\nviews: ", json.views);
        return json.views;
    } catch (error) {
        console.error("Error recording view:", error);
        return 0;
    } finally {
        console.log("----------")
    }
}


export async function getViews(slug) {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${BASE_URL}/api/recordViewCount?slug=${slug}`);
    const json = await response.json();
    return json.views;
}