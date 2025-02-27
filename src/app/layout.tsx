import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "camelAI: AI-powered Data Analysis | SQL-Free Business Intelligence",
  description:
    "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights, charts, and dashboards from your database. Connect to PostgreSQL, Snowflake, BigQuery & more. No SQL needed.",
  icons: {
    icon: [
      {
        url: "/qaml-favicon.webp",
        type: "image/webp",
      },
    ],
  },
  keywords:
    "camelAI, AI data analyst, natural language BI tool, SQL alternative, business intelligence software, data visualization tool, database chat interface, AI analytics platform, real-time data insights, automated data analysis",
  openGraph: {
    title:
      "camelAI: The AI Data Analyst. Ask questions, get instant charts and insights from your data.",
    description:
      "Transform your data analysis with camelAI. Ask questions in plain English and get instant insights from your database. No SQL needed.",
    images: ["https://camelai.com/assets/images/camel-og-image.png"],
    url: "https://camelai.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "camelAI",
              description:
                "AI-powered data analysis tool that converts natural language questions into database insights",
              applicationCategory: "Business Intelligence Software",
              operatingSystem: "Web-based",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="font-['Segoe_UI'] antialiased">{children}</body>
    </html>
  );
}
