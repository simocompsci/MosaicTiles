import ContactUsComponent from "../components/ContactUs";

export default function ContactUsPage() {
    return (
        <main className="min-h-screen pt-32">
            <div className="px-6 md:px-12 lg:px-24 mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">Get In Touch</h1>
                <p className="text-lg max-w-3xl mx-auto font-light leading-relaxed">
                    We are here to help you bring the beauty of Moroccan zellij to your space.
                </p>
            </div>

            {/* Developing a full contact page or reusing the component */}
            <div className="bg-[#FAFAFA]">
                <ContactUsComponent />
            </div>
        </main>
    )
}
