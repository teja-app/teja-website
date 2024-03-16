export default function AboutPage() {
  return (
    <>
      <main className="bg-white text-black text-center py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold py-4">About Teja.app</h1>
          <p className="mx-auto leading-relaxed max-w-xl">
            At Teja.app, we're dedicated to making mental wellness a seamless and accessible part of everyday life through AI-driven personalization that resonates with each individual.
          </p>
          
          {/* Mission and Values */}
          <section className="py-10">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 mx-auto max-w-md">
              We aim to empower individuals with the tools they need to manage their emotional health, inspired by a blend of scientific insights and mindfulness practices.
            </p>
          </section>
          
          {/* Why Choose Us */}
          <section className="py-10">
            <h2 className="text-2xl font-bold">Why Choose Teja.app?</h2>
            <div className="flex flex-col md:flex-row justify-around items-start max-w-6xl mx-auto py-6">
              {/* Sub-sections like The Challenge, Our Vision, etc. */}
            </div>
          </section>
          
          {/* Call to Action for Joining the Team */}
          <section className="py-10">
            <h2 className="text-2xl font-bold">Join Our Team</h2>
            <p className="mt-4 mx-auto max-w-lg">
              If you're passionate about technology, wellness, and making a significant impact, let's talk. We're looking for innovative minds to join us on this journey.
            </p>
            {/* Include a link to the careers page or contact form */}
          </section>
        </div>
      </main>
    </>
  );
}
