import React from "react";
import { motion } from "framer-motion";
import logoImg from "@assets/Triqz_1772723120584.png";
import { Language } from "@/pages/Home";

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function Navbar({ lang, setLang }: NavbarProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center">
            <img src={logoImg} alt="TRIQZ Logo" className="w-10 h-10 object-contain" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-primary">
            TRIQZ <span className="text-secondary font-medium px-1">x</span> RIZQAR
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center">
            <p className="text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-1.5 rounded-full border border-primary/10">
              {lang === "bn" ? "ঈদুল ফিতর এক্সক্লুসিভ" : "Eid-ul-Fitr Exclusive"}
            </p>
          </div>
          
          <button 
            onClick={() => setLang(lang === "bn" ? "en" : "bn")}
            className="px-3 py-1 rounded-lg bg-primary/10 text-primary font-bold text-sm border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            {lang === "bn" ? "EN" : "বাংলা"}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
