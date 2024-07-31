// pages/api/recordViewCount.js
import { kv } from "@vercel/kv";
import crypto from "crypto";
import { NextResponse } from 'next/server';


export async function GET(req) {
    console.log("SERVER GET request received");
    try {
        // get slug from query params
        const { searchParams } = new URL(req.url);
        const slug = searchParams.get("slug");
        console.log("Slug received: ", slug);

        if (!slug) {
            return NextResponse.json({ message: "Missing slug", views: -1, slug: slug }, { status: 400 });
        }

        const viewKey = ["pageviews", "blogs", slug].join(":");
        const viewCount = (await kv.get(viewKey)) ?? 0;
        console.log("View Count:", viewCount);

        return NextResponse.json({ message: "Success", views: viewCount, slug: slug }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Error", views: -1, slug: slug }, { status: 500 });
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

        const ipSource = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || "localhost";
        const ip = ipSource.split(",")[0].trim();
        const hashedIp = crypto.createHash("sha256").update(ip).digest("hex");
        const viewKey = ["pageviews", "blogs", slug].join(":");
        const ipViewKey = ["ip", hashedIp, "views", slug].join(":");

        const hasViewed = await kv.get(ipViewKey);

        let viewCount = 0;

        if (!hasViewed) {
            const pipeline = kv.pipeline();
            pipeline.incr(viewKey);
            pipeline.set(ipViewKey, "1");
            await pipeline.exec();

            viewCount = (await kv.get(viewKey)) ?? 0;
            console.log("View Added:", viewCount);
            return NextResponse.json({ message: "View Added", views: viewCount }, { status: 200 });
        } else {
            viewCount = (await kv.get(viewKey)) ?? 0;
            console.log("Already viewed:", viewCount);
            return NextResponse.json({ message: "Already viewed", views: viewCount }, { status: 200 });
        }
    } catch (error) {
        console.error("Error recording view count:", error);
        return NextResponse.json({ message: "Error recording view count" }, { status: 500 });
    }
}
