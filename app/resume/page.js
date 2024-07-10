"use client"
export default function Resume() {
    const pdfFile = "ResumeUmarWaseem.pdf#zoom=100";

    return (
        <iframe 
            name="Umar Waseem Resume PDF"
            className="h-screen w-screen" 
            src={pdfFile} 
        />
    );
}
