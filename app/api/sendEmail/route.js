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
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, 
            },
        });

        // Set up email data
        const mailOptions = {
            from: `"Contact Form" <${process.env.EMAIL_USER}>`, // Use your email as sender
            replyTo: email, // Set reply-to as the form submitter's email
            to: process.env.EMAIL_USER,
            subject: `Contact Form Message from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Occupation: ${occupation}

Message:
${message}
            `,
            html: `
<h2>Contact Form Message</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Occupation:</strong> ${occupation}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>
            `
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
} 