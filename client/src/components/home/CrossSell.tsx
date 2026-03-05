import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Star, ShieldCheck } from "lucide-react";
import { Language } from "@/pages/Home";
import { Link } from "wouter";

import img1 from "@assets/image_1772724928195.png";
import img2 from "@assets/image_1772724950909.png";
import img3 from "@assets/image_1772724965067.png";
import img4 from "@assets/image_1772724989406.png";
import img5 from "@assets/image_1772724999748.png";
import img6 from "@assets/image_1772725018764.png";
import img7 from "@assets/image_1772725037961.png";
import img8 from "@assets/image_1772725087106.png";
import img9 from "@assets/image_1772725097121.png";
import img10 from "@assets/image_1772725111178.png";
import img11 from "@assets/image_1772725144655.png";
import img12 from "@assets/image_1772725163752.png";
import img13 from "@assets/image_1772725184929.png";
import img14 from "@assets/image_1772725197670.png";
import img15 from "@assets/image_1772725214270.png";
import img16 from "@assets/image_1772725226707.png";
import img17 from "@assets/image_1772725268070.png";
import img18 from "@assets/image_1772725283141.png";
import img19 from "@assets/image_1772725297649.png";
import img20 from "@assets/image_1772725344923.png";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CrossSellProps {
  lang: Language;
  onAdd: (product: Product, size: string) => void;
}

const SIZES = ["M", "L", "XL", "XXL"];

export const MOCK_PRODUCTS: Product[] = [
  { id: "p1", name: "Halal T-Shirt", price: 420, image: img1, description: "Premium quality cotton t-shirt with Halal calligraphy." },
  { id: "p2", name: "Supra Edition Tee", price: 420, image: img2, description: "Classic automotive enthusiast apparel." },
  { id: "p3", name: "Tauhid Warrior Tee", price: 420, image: img3, description: "Strong identity expressed through minimalist design." },
  { id: "p4", name: "Pray No Matter What", price: 420, image: img4, description: "A constant reminder for the faithful." },
  { id: "p5", name: "Sabr Calligraphy", price: 420, image: img5, description: "Patience is a virtue, wear it with pride." },
  { id: "p6", name: "Niqab Silhouette Tee", price: 420, image: img6, description: "Elegant and modest representation." },
  { id: "p7", name: "Sabar Vertical Tee", price: 420, image: img7, description: "Modern vertical typography design." },
  { id: "p8", name: "Salah Retro Tee", price: 420, image: img8, description: "Vintage style prayer times graphic." },
  { id: "p9", name: "Patience Pocket Tee", price: 1200, image: img9, description: "Minimalist pocket-print inspired design." },
  { id: "p10", name: "Luxury Warrior Tee", price: 420, image: img10, description: "High-end aesthetic meets heritage." },
  { id: "p11", name: "Hustle Everyday Tee", price: 420, image: img11, description: "Keep grinding with this premium t-shirt." },
  { id: "p12", name: "Allah is My Hope", price: 420, image: img12, description: "Spiritual connection through fashion." },
  { id: "p13", name: "Beard is Sunnah", price: 420, image: img13, description: "Classic Sunnah inspired apparel." },
  { id: "p14", name: "Nikah Just Qubool It", price: 420, image: img14, description: "Fun and meaningful wedding theme tee." },
  { id: "p15", name: "Free Palestine Tee", price: 420, image: img15, description: "Show your support with this statement piece." },
  { id: "p16", name: "Tawhid Minimal Tee", price: 420, image: img16, description: "Simple yet powerful spiritual design." },
  { id: "p17", name: "Arabic Pattern Tee", price: 420, image: img17, description: "Intricate Arabic calligraphy artwork." },
  { id: "p18", name: "Just Do It Arabic", price: 420, image: img18, description: "Classic slogan with a local twist." },
  { id: "p19", name: "Crescent Moon Sabr", price: 420, image: img19, description: "Beautiful lunar design with spiritual text." },
  { id: "p20", name: "Isra & Patience (3 Pieces)", price: 1200, image: img20, description: "Exclusive 3-piece set featuring premium calligraphy designs." },
];

export function CrossSell({ lang, onAdd }: CrossSellProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalSize, setModalSize] = useState<string>("");

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {lang === "bn" ? "ঈদের জন্য আরও প্রিমিয়াম সংগ্রহ" : "More Premium Picks for Eid"}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {lang === "bn" 
              ? "আপনার উৎসবের পোশাক পূর্ণ করতে এগুলো অর্ডারে যোগ করুন। বিশেষ ছাড় প্রযোজ্য।"
              : "Add these to your order to complete your festive wardrobe. Exclusive discounts applied."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {MOCK_PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx % 4 * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white rounded-2xl p-3 sm:p-4 border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-[4/5] bg-muted/30 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none" />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex flex-col gap-1 mb-4">
                  <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
                    {product.id === "p9" || product.id === "p20" ? "1500" : "500"} {lang === "bn" ? "টাকা" : "BDT"}
                  </span>
                  <span className="font-display font-bold text-primary text-lg">
                    {product.price} {lang === "bn" ? "টাকা" : "BDT"}
                  </span>
                </div>

                <button
                  className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors active:scale-95"
                >
                  <span>{lang === "bn" ? "বিস্তারিত দেখুন" : "View Details"}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Preview Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="lg:w-1/2 h-64 lg:h-auto bg-muted/20 relative">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-contain p-8" />
              </div>

              <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col overflow-y-auto">
                <div className="mb-6">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-2">{selectedProduct.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-display font-bold text-primary">{selectedProduct.price} {lang === "bn" ? "টাকা" : "BDT"}</span>
                    <span className="text-xl text-muted-foreground line-through decoration-destructive/40">
                      {selectedProduct.id === "p9" || selectedProduct.id === "p20" ? "1500" : "500"}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {selectedProduct.description} {lang === "bn" ? "ঈদের বিশেষ সংগ্রহের এই প্রিমিয়াম টি-শার্টটি আরামদায়ক এবং টেকসই ফেব্রিক দিয়ে তৈরি।" : "Part of our exclusive Eid collection, this premium t-shirt is crafted from soft, breathable fabric."}
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-foreground">{lang === "bn" ? "সাইজ নির্বাচন করুন" : "Select Size"}</span>
                    {!modalSize && <span className="text-xs text-destructive font-bold uppercase tracking-widest animate-pulse">{lang === "bn" ? "সাইজ নির্বাচন করা আবশ্যক" : "Size Required"}</span>}
                  </div>
                  <div className="flex gap-3">
                    {SIZES.map(size => (
                      <button
                        key={size}
                        onClick={() => setModalSize(size)}
                        className={`w-14 h-14 rounded-xl font-bold flex items-center justify-center transition-all ${modalSize === size ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-muted/50 text-foreground hover:bg-muted'}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  disabled={!modalSize}
                  onClick={() => {
                    onAdd(selectedProduct, modalSize);
                    setSelectedProduct(null);
                    setModalSize("");
                  }}
                  className="mt-auto w-full py-5 bg-primary text-white rounded-2xl font-display font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
                >
                  <Plus className="w-6 h-6" />
                  {lang === "bn" ? "অর্ডারে যোগ করুন" : "Add to Order"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
