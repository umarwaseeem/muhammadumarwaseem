



import ContactList from '../components/contactlist';
import { umarAvatar } from '../images';



export default function Contact() {


    return (
        <section className="flex h-[calc(100vh-68px)] flex-col items-start lg:justify-start bg-midnightblue p-4 lg:px-16 lg:pb-16">
            <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white mb-14">get in touch</h2>
            <ContactList />
        </section>
    );
}

const openGraphImage = "https://avatars.githubusercontent.com/u/76011160?v=4"

export async function generateMetadata() {

    return {
        title: "Contact | Muhammad Umar Waseem",
        description: "Get in touch with Muhammad Umar and lets have a chat about how he can collaborate with you.",
        image: openGraphImage,
        keywords: "contact, email, github, twitter, medium, instagram, linkedin, chat, message, collaborate",
        openGraph: {
            title: "Contact | Muhammad Umar Waseem",
            description: "Get in touch with Muhammad Umar and lets have a chat about how he can collaborate with you.",
            url: "https://muhammadumarwaseem.com/contact/",
            images: umarAvatar,

        },
    };
}