export default function LocationPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 lg:px-24">
            <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center uppercase tracking-widest">Visit Us</h1>
            <p className="text-center text-lg max-w-2xl mx-auto font-light mb-12">
                Come see our craftsmanship in person.
            </p>
            {/* Map Placeholder */}
            <div className="w-full h-96 bg-gray-100 flex items-center justify-center border border-gray-200">
                <span className="text-gray-400 uppercase tracking-widest">Map Integration Coming Soon</span>
            </div>
        </main>
    )
}
