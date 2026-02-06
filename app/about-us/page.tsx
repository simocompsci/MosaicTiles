import AboutUsComponent from "../components/AboutUs";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen pt-32">
            {/* Reusing the constituent component or creating a more detailed layout */}
            <div className="px-6 md:px-12 lg:px-24 mb-16">
                <h1 className="text-4xl md:text-5xl font-serif mb-6 text-center uppercase tracking-widest">About MosaicTiles</h1>
                <p className="text-center text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    Our story is one of passion, heritage, and the timeless art of Moroccan craftsmanship.
                </p>
            </div>

            {/* We can include the existing component or build more here. 
                 For now, let's render the AboutUs component as part of this page 
                 to ensure consistency with the content they already have. */}
            <AboutUsComponent />
        </main>
    )
}
