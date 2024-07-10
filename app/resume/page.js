"use client"
export default function Resume() {
    const pdfFile = "https://www.muhammadumarwaseem.com/ResumeUmarWaseem.pdf"

    return (
        <iframe 
            name="Umar Waseem Resume PDF"
            height={window.innerHeight}
            width={window.innerWidth}
            className="h-screen w-screen" 
            src={pdfFile} 
        />
    );
}
