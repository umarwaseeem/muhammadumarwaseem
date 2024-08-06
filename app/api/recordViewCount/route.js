import { kv } from "@vercel/kv";
import { NextResponse } from 'next/server';


export async function GET(req) {
    console.log("SERVER GET request received");
    try {
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");
        console.log("Slug received: ", slug);

        if (!slug) {
            return NextResponse.json({ message: "Missing slug", views: -1, slug: slug }, { status: 400 });
        }

        const viewKey = ["pageviews", "blogs", slug].join(":");
        const viewCount = (await kv.get(viewKey)) ?? 0;
        console.log("View Count:", viewCount);

        return NextResponse.json({ message: "Success", views: viewCount, slug: slug }, {
            status: 200, headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error", error: error, views: -1, slug: slug }, {
            status: 500, headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
}

export async function POST(req) {
    console.log("SERVER POST request received");
    try {
        const json = await req.json();
        console.log("Request received by server: ", json);

        const { slug } = json;
        console.log("Slug received: ", slug);

        if (!slug) {
            return NextResponse.json({ message: "Missing slug", views: -1, slug: slug }, { status: 400 });
        }
        let viewCount = 0;

        const viewKey = ["pageviews", "blogs", slug].join(":");
        await kv.incr(viewKey);
        viewCount = (await kv.get(viewKey)) ?? 0;
        console.log("Already viewed:", viewCount);
        return NextResponse.json({ message: "Already viewed", views: viewCount }, {
            status: 200, headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });

    } catch (error) {
        console.error("Error recording view count:", error);
        return NextResponse.json({ message: "Error recording view count" }, {
            status: 500, headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });
    }
}
