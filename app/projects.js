export const ProjectStatus = {
    COMPLETED: "COMPLETED / RELEASED",
    IN_PROGRESS: "IN PROGRESS",
    COMING_SOON: "COMING SOON"
}

export const projects = [
    {
        title: "MD Voice",
        subtitle: "Transform Doctor-Patient Conversations into Accurate, Automated SOAP Notes in Real-Time.",
        projectStatus: ProjectStatus.COMPLETED,
        href: "/projects/md-voice",
        featuredImage: "/project-images/mdvoice-main.png",
        appStore: "https://apps.apple.com/us/app/md-voice/id6651860912",
        playStore: "https://play.google.com/store/apps/details?id=ai.hpemr.mdvoice&hl=en",
        webLink: "",
        description: "MD Voice is a cutting-edge tool designed to revolutionise the way healthcare professionals document patient interactions. By seamlessly converting doctor-patient conversations into accurate, automated SOAP notes in real-time, MD Voice allows you to focus more on patient care and less on paperwork."
    },
    {
        title: "The Checker App",
        subtitle: "Streamline hotel room cleaning process tracking and management",
        projectStatus: ProjectStatus.COMPLETED,
        href: "/projects/the-checker-app",
        featuredImage: "/project-images/checker-app.jpg",
        appStore: "https://apps.apple.com/us/app/the-checker-app/id1660197678",
        playStore: "",
        webLink: "",
        description: "The Checker App revolutionizes hotel room cleaning management by providing a digital solution to track and monitor the entire cleaning process. With features like digital checklists and process optimization tools, it helps hotels reduce costs and improve efficiency in their cleaning operations."
    },
    {
        title: "Uni-verse",
        subtitle: "Every important thing you need as a student in one place.",
        projectStatus: ProjectStatus.IN_PROGRESS,
        href: "",
        appStore: "",
        playStore: "",
        webLink: "",
        featuredImage: ""
    },
    {
        title: "Uni-verse",
        subtitle: "Every important thing you need as a student in one place.",
        projectStatus: ProjectStatus.COMING_SOON,
        href: "",
        appStore: "",
        playStore: "",
        webLink: "",
        featuredImage: ""
    },

]
