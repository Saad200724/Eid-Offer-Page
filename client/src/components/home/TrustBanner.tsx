import React from "react";
import { Lock } from "lucide-react";
import { Language } from "@/pages/Home";

interface TrustBannerProps {
  lang: Language;
}

export function TrustBanner({ lang }: TrustBannerProps) {
  return (
    <div className="w-full bg-muted py-8 px-4 border-y border-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center text-center">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
          {lang === "bn" ? "১০০% নিরাপদ ক্যাশ অন ডেলিভারি" : "100% Secure Cash on Delivery"}
        </h2>
        <p className="text-lg md:text-xl font-medium text-primary">
          {lang === "bn" ? "\"টাকা ক্যাশ অন ডেলিভারিতে দিবেন, আমরা প্রতারক না।\"" : "\"Tk cash on delivery te diben, amra protarok na.\""}
        </p>
      </div>
    </div>
  );
}
