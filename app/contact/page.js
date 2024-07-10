



import ContactList from '../components/contactlist';



export default function Contact() {


    return (
            <section className="flex h-[calc(100vh-100px)] flex-col items-start lg:justify-start bg-midnightblue p-8 lg:px-16 lg:pb-16">
                <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-14">get in touch</h2>
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
            image: openGraphImage,
            
        },
    };
}