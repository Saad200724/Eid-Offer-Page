import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Star } from "lucide-react";
import flagshipImg from "@assets/PRD_1_1772723128274.png";

interface HeroProps {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  onClaimClick: () => void;
}

const SIZES = ["M", "L", "XL", "XXL"];

export function Hero({ selectedSize, setSelectedSize, onClaimClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left: Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-black/5 bg-white group">
              <img 
                src={flagshipImg} 
                alt="Peace Tree Premium T-Shirt" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-1 text-secondary mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xs font-semibold text-foreground">Premium Quality</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Details & Hook */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 w-fit border border-primary/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Eid-ul-Fitr Exclusive Drop</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-foreground leading-[1.1] mb-6 text-balance">
              Elevate Your Eid <br className="hidden lg:block" />
              with <span className="text-primary relative whitespace-nowrap">
                True Peace
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Introducing the <strong className="text-foreground">Peace Tree Premium T-Shirt</strong>. Crafted for supreme comfort and effortless style to make your celebration unforgettable.
            </p>

            <div className="glass-panel p-6 sm:p-8 rounded-3xl mb-8 border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-8 relative z-10">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">Regular Price</span>
                  <span className="text-2xl text-muted-foreground/60 line-through decoration-destructive/40 decoration-2 font-display">600 BDT</span>
                </div>
                <div className="hidden sm:block w-px h-12 bg-border"></div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">Eid Offer</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-display font-extrabold text-primary tracking-tight">550</span>
                    <span className="text-xl font-bold text-primary/80">BDT</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground">Select Your Size</label>
                  <button className="text-xs text-primary underline underline-offset-4 font-medium hover:text-primary/80 transition-colors">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`
                        w-14 h-14 rounded-2xl font-display font-bold text-lg transition-all duration-300
                        ${selectedSize === size 
                          ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105 border-transparent' 
                          : 'bg-white text-foreground border-2 border-border hover:border-primary/40 hover:bg-muted/30'}
                      `}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.button
              onClick={onClaimClick}
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 10px 25px -5px rgba(2, 80, 50, 0.3)",
                  "0 15px 35px -5px rgba(2, 80, 50, 0.5)",
                  "0 10px 25px -5px rgba(2, 80, 50, 0.3)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-[hsl(154,60%,22%)] text-white rounded-2xl font-display font-bold text-xl tracking-wide flex items-center justify-center gap-3 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Claim Eid Offer Now</span>
              <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <p className="text-center sm:text-left mt-4 text-sm font-medium text-muted-foreground flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Limited stock available. Selling fast!
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
