export const getComparisonDescription = (id: string) => {
  switch (id) {
    case "apple-journal":
      return (
        <>
          <p className="mb-4">
            Apple Journal, released with iOS 17.2, is a powerful and seamlessly
            integrated journaling app exclusive to iPhone users. It leverages
            the Apple ecosystem to provide a rich, context-aware journaling
            experience, automatically suggesting moments from your day based on
            your photos, workouts, and more.
          </p>
          <p className="mb-4">
            Where Apple Journal truly shines is in its deep integration with
            iOS. It can intelligently suggest journal entries based on your
            activities, locations, and even music you've listened to. This level
            of integration creates a uniquely personal and effortless journaling
            experience that's hard to match on other platforms.
          </p>
          <p className="mb-4">
            While Teja offers cross-platform support and AI-powered insights,
            Apple Journal's strength lies in its seamless iOS integration and
            privacy-focused approach. Both apps have their unique strengths,
            catering to different user needs and preferences.
          </p>
        </>
      );
    case "rosebud":
      return (
        <>
          <p className="mb-4">
            Rosebud is an innovative AI-powered self-care companion that focuses
            on mental health improvement with therapist-backed insights. It
            offers a unique blend of journaling, AI interaction, and mental
            health support, making it a powerful tool for personal growth and
            well-being.
          </p>
          <p className="mb-4">
            One of Rosebud's standout features is its advanced AI capabilities,
            including a call mode for natural dialogue and the ability to ask
            questions about your journal entries. These features create a more
            interactive and personalized experience, almost like having a AI
            therapist at your fingertips.
          </p>
          <p className="mb-4">
            While Teja focuses on a broader range of self-care and productivity
            features, Rosebud excels in providing deep, therapy-inspired
            insights. Both apps use AI to enhance the user experience, but they
            cater to slightly different needs within the mental wellness space.
          </p>
        </>
      );
    default:
      return null;
  }
};
