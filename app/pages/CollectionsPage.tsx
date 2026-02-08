import CollectionsComponent from "../components/Collections";

export default function CollectionsPage() {
    return (
        <main className="min-h-screen pt-32">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-serif mb-4 uppercase tracking-widest">Our Collections</h1>
                <p className="text-lg font-light">Explore our wide range of authentic designs.</p>
            </div>
            {/* Reusing existing Collections component if suitable, or building new grid */}
            <CollectionsComponent />
        </main>
    )
}
