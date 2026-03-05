import React from "react";
import { Footer } from "@/components/layout/Footer";
import { Language } from "@/pages/Home";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage({ lang }: { lang: Language }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-display font-bold mb-8">
          {lang === "bn" ? "যোগাযোগ" : "Contact Support"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-muted rounded-2xl flex flex-col items-center text-center">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-sm">01760-307928( Sahol )</p>
            <p className="text-sm">01973-421085 (Sahol)</p>
          </div>
          <div className="p-6 bg-muted rounded-2xl flex flex-col items-center text-center">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm">support@triqz.com</p>
          </div>
          <div className="p-6 bg-muted rounded-2xl flex flex-col items-center text-center">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-bold mb-2">Address</h3>
            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}
