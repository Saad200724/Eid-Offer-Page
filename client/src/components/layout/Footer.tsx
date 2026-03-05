import React from "react";
import logoImg from "@assets/Triqz_1772723120584.png";
import { Language } from "@/pages/Home";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  return (
    <footer className="bg-[#0a1a14] text-white pt-16 pb-24 md:pb-8 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1">
              <img src={logoImg} alt="TRIQZ Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-xl tracking-wide">
              TRIQZ <span className="text-secondary opacity-80 px-1">x</span> RIZQAR
            </span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              {lang === "bn" ? "শর্তাবলী" : "Terms & Conditions"}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {lang === "bn" ? "যোগাযোগ" : "Contact Support"}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {lang === "bn" ? "রিটার্ন পলিসি" : "Return Policy"}
            </a>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col items-center text-center">
          <p className="text-white/50 text-sm mb-6">
            &copy; {new Date().getFullYear()} TRIQZ. {lang === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </p>
          
          <a 
            href="https://znforge.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/40 border border-white/10 hover:border-secondary/50 hover:bg-black/60 transition-all group"
          >
            <span className="text-xs text-white/60 tracking-wider uppercase font-medium group-hover:text-white/80 transition-colors">
              {lang === "bn" ? "যাচাইকৃত এবং পাওয়ার্ড বাই" : "Verified and Powered by"}
            </span>
            <span className="font-display font-bold text-[hsl(var(--secondary))] gold-glow tracking-wide text-sm">
              ZnForge
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
