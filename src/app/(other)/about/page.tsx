export default function AboutPage() {
  return (
    <>
      <main className="bg-white text-black text-center py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold py-4">About Teja.app</h1>
          <p className="mx-auto leading-relaxed max-w-xl">
            At Teja.app, we're dedicated to making mental wellness a seamless and accessible part of everyday life through AI-driven personalization that resonates with each individual.
          </p>
          
          {/* Vision */}
          <section className="py-10">
            <h2 className="text-2xl font-bold">Vision</h2>
            <div className="flex flex-col md:flex-row justify-around items-start max-w-6xl mx-auto py-6">
            Our vision at Teja is to make mental wellness simple and accessible for everyone. We want to create a place where you can take care of your mental health on your own, using easy-to-understand tools that help you stay calm, focused, and happy. We're here to help people look after their mental well-being early on, so they can live better, more joyful lives.
            </div>
          </section>

          {/* Mission and Values */}
          <section className="py-10">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 mx-auto max-w-md">
              Teja's mission is to offer straightforward, effective tools for everyday mental wellness. We're dedicated to providing a helping hand to those looking to improve their mental state through self-care, helping them find peace and clarity in their daily lives without complicating things. It's about giving everyone the chance to understand and nurture their own mental health with ease and confidence.
            </p>
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
