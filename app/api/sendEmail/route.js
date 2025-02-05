import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, occupation, message } = await req.json();

        // Validate the request body
        if (!name || !email || !occupation || !message) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // e.g., 'gmail'
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Set up email data
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // recipient email
            subject: `New message from ${name}`,
            text: `Occupation: ${occupation}\n\nMessage:\n${message}`,
        };

        // Send mail with defined transport object
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
} 