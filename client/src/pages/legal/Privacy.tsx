import React from "react";
import { Footer } from "@/components/layout/Footer";
import { Language } from "@/pages/Home";

export default function PrivacyPage({ lang }: { lang: Language }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-display font-bold mb-8">
          {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
        </h1>
        <div className="prose prose-sm md:prose-base max-w-none">
          <p>This is the Privacy Policy page for TRIQZ.</p>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}
