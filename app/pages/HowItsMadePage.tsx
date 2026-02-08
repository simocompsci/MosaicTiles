export default function HowItsMadePage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center uppercase tracking-widest">The Art of Zellij</h1>
            <div className="max-w-4xl mx-auto space-y-12">
                <section>
                    <h2 className="text-2xl font-serif mb-4">1. Clay Preparation</h2>
                    <p className="font-light leading-relaxed">It all begins with the earth. Our clay is sourced from the Fez region...</p>
                </section>
                <section>
                    <h2 className="text-2xl font-serif mb-4">2. Hand Chiseling</h2>
                    <p className="font-light leading-relaxed">Master artisans use a sharp hammer-chisel (menqach) to shape each piece...</p>
                </section>
                {/* More steps to follow */}
            </div>
        </main>
    )
}
