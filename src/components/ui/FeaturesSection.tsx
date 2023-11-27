const featuresList = ['Mood Tracking', 'Guided Journal', 'Habit Formation', 'Personal Analysis'];
export default function FeaturesSection() {
    return (
        <div className="relative bg-[url('/features_background.svg')] bg-cover bg-center">

            <div className="relative text-white py-20">
                {/* You would set the background image in the parent container of this component */}
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4">Features</h2>
                        <p className="text-xl mb-6">Mindfully Crafted for Modern Wellbeing</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 mb-20">
                        {/* List of Features */}
                        {featuresList.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-40 h-20 flex items-center justify-center border-2 border-white rounded-full mb-2">
                                    <span className="text-sm font-semibold">{feature}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center max-w-3xl mx-auto mb-16 py-20">
                        "At Teja, we believe in the power of science to enhance personal wellness. Each feature is
                        meticulously designed with evidence-based methods, ensuring that your journey to peace
                        and balance is supported by the latest research in psychological health and well-being. Our
                        team blends scientific insights with innovative technology to create tools that adapt to your
                        unique rhythm, helping you find harmony in the modern world."
                    </p>

                    <div className="text-center">
                        <a href="#" className="bg-black text-white font-semibold text-lg py-4 px-16 rounded-full hover:bg-white hover:text-black transition-colors shadow-lg">
                            Download<br />
                        </a>
                    </div>
                    <div className="mb-20"></div>
                    <div className="mb-20"></div>
                    <div className="mb-20"></div>
                </div>
            </div>
        </div>
    );
}
