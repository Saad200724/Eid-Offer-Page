import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface CrossSellProps {
  onAdd: (product: Product) => void;
}

// Generate 20 mock products
const MOCK_PRODUCTS = Array.from({ length: 20 }, (_, i) => ({
  id: `cs-${i + 1}`,
  name: i % 2 === 0 ? "Classic Oversized Tee" : "Drop Shoulder Premium",
  price: 420,
}));

export function CrossSell({ onAdd }: CrossSellProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            More Premium Picks for Eid
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Add these to your order to complete your festive wardrobe. Exclusive discounts applied.
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
              className="bg-white rounded-2xl p-3 sm:p-4 border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col group"
            >
              {/* Minimalist Image Area */}
              <div className="aspect-[4/5] bg-muted/30 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/50 blur-xl absolute" />
                <span className="text-muted-foreground/30 font-display font-bold text-xl rotate-[-45deg] select-none">
                  PREMIUM
                </span>
                
                {/* Overlay Add button that appears on hover for desktop */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none" />
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="mt-auto flex flex-col gap-1 mb-4">
                  <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
                    ~500 BDT~
                  </span>
                  <span className="font-display font-bold text-primary text-lg">
                    {product.price} BDT
                  </span>
                </div>

                <button
                  onClick={() => onAdd(product)}
                  className="w-full py-2.5 rounded-xl border-2 border-primary text-primary font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
