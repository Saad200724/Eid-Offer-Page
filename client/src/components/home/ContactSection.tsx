import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { Language } from "@/pages/Home";

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 border-2 border-primary/20 shadow-xl shadow-primary/5 text-center transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center justify-center gap-3">
            <MessageSquare className="w-6 h-6 text-primary" />
            {lang === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Contact Us"}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="tel:01760307928" 
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Sahol</p>
                <p className="text-xl font-bold text-foreground">01760-307928</p>
              </div>
            </a>

            <a 
              href="tel:01973421085" 
              className="flex items-center justify-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Sahol</p>
                <p className="text-xl font-bold text-foreground">01973-421085</p>
              </div>
            </a>
          </div>
          
          <p className="mt-6 text-muted-foreground text-sm font-medium italic">
            {lang === "bn" 
              ? "যেকোনো জিজ্ঞাসায় আমাদের কল করুন। আমরা আপনার সেবায় নিয়োজিত।" 
              : "Call us for any inquiries. We are here to help."}
          </p>
        </div>
      </div>
    </section>
  );
}
