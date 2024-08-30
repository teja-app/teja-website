import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { headingFontCss, titleFontCss } from "@/components/css/fonts";
import { comparisonData, ComparisonData } from "@/data/journalAppComparison";
import { getComparisonDescription } from "@/data/getComparisonDescription";

const ComparisonPage = () => {
  const router = useRouter();
  const { appId } = router.query;

  const comparedApp = comparisonData.apps.find((app) => app.id === appId);

  if (!comparedApp) {
    return <div>Invalid comparison</div>;
  }

  const renderFeatureStatus = (
    appId: keyof ComparisonData["appFeatures"],
    featureId: string,
  ) => {
    const appFeatures = comparisonData.appFeatures[appId];

    const feature = appFeatures.find((f) =>
      typeof f === "string" ? f === featureId : f.id === featureId,
    );

    if (!feature) return "❌";
    if (typeof feature === "string") return "✅";
    if (feature.comingSoon) return "🔜";
    return feature.paid ? "💰" : "✅";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>Teja vs {comparedApp.name} Comparison | Teja App</title>
        <meta
          name="description"
          content={`Compare Teja with ${comparedApp.name}`}
        />
      </Head>

      <h1 className={`text-4xl font-bold mb-8 ${titleFontCss.className}`}>
        Teja vs {comparedApp.name} Comparison
      </h1>

      <div className="mt-4 p-4 rounded">
        {getComparisonDescription(comparedApp.id)}
      </div>

      {comparisonData.categories.map((category) => (
        <section key={category.name} className="mb-12">
          <h2
            className={`text-2xl font-semibold mb-4 ${headingFontCss.className}`}
          >
            {category.emoticon} {category.name}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Feature</th>
                  <th className="p-2 border">Teja</th>
                  <th className="p-2 border">{comparedApp.name}</th>
                </tr>
              </thead>
              <tbody>
                {category.features.map((feature) => (
                  <tr key={feature.id} className="hover:bg-gray-50">
                    <td className="p-2 border">
                      {feature.emoticon} {feature.name}
                      <div className="text-xs text-gray-500">
                        {feature.description}
                      </div>
                    </td>
                    <td className="p-2 border text-center">
                      {renderFeatureStatus("teja", feature.id)}
                    </td>
                    <td className="p-2 border text-center">
                      {renderFeatureStatus(
                        comparedApp.id as keyof ComparisonData["appFeatures"],
                        feature.id,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}
      <div className="mt-4 text-sm text-gray-600">
        <p>✅ - Available feature</p>
        <p>🔜 - Coming soon to Teja</p>
        <p>❌ - Unavailable feature</p>
        <p>💰 - Paid feature</p>
      </div>
    </div>
  );
};

export default ComparisonPage;
