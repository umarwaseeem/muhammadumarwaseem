export default function About() {
    return (
        <section className="flex  h-[93vh] flex-col items-center justify-center bg-black">
            <h2 className="font-bold text-6xl lg:text-8xl text-white text-center mb-2">about</h2>
            <p className="text-xl lg:text-3xl px-10 text-gray-400 text-center">
                muhammad umar is a
                <span className="text-green-400"> computer science graduate </span>
                from <a className="relative inline-block text-blue-400 after:absolute after:block after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-200 after:ease-in-out hover:after:scale-x-100" href="https://www.nu.edu.pk/">fast nuces</a> which is a leading university in this domain.
            </p>
        </section>
    );
}
