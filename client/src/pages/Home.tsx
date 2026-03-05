import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustBanner } from "@/components/home/TrustBanner";
import { CrossSell } from "@/components/home/CrossSell";
import { CheckoutForm } from "@/components/home/CheckoutForm";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  isFlagship?: boolean;
}

const FLAGSHIP_ITEM_EN: CartItem = {
  id: 'flagship',
  name: 'Peace Tree Premium T-Shirt',
  price: 550,
  isFlagship: true
};

const FLAGSHIP_ITEM_BN: CartItem = {
  id: 'flagship',
  name: 'পিস ট্রি প্রিমিয়াম টি-শার্ট',
  price: 550,
  isFlagship: true
};

export type Language = "bn" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("bn");
  const [heroSize, setHeroSize] = useState("L");
  const [cart, setCart] = useState<CartItem[]>([FLAGSHIP_ITEM_BN]);
  const { toast } = useToast();

  useEffect(() => {
    // Update cart item name when language changes
    setCart(prev => prev.map(item => {
      if (item.id === 'flagship') {
        return lang === 'bn' ? FLAGSHIP_ITEM_BN : FLAGSHIP_ITEM_EN;
      }
      return item;
    }));
  }, [lang]);

  const handleClaimClick = () => {
    document.getElementById('checkout-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleAddCrossSell = (product: Omit<CartItem, 'isFlagship'>) => {
    setCart(prev => {
      if (prev.find(item => item.id === product.id)) {
        toast({
          title: lang === "bn" ? "ইতিমধ্যে কার্টে আছে" : "Already in cart",
          description: lang === "bn" ? `${product.name} ইতিমধ্যে আপনার অর্ডারে আছে।` : `${product.name} is already in your order.`,
        });
        return prev;
      }
      
      toast({
        title: lang === "bn" ? "অর্ডারে যোগ করা হয়েছে" : "Added to Order",
        description: lang === "bn" ? `${product.name} সফলভাবে যোগ করা হয়েছে!` : `${product.name} added successfully!`,
        className: "bg-primary text-white border-none",
      });
      return [...prev, product];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero 
          lang={lang}
          selectedSize={heroSize} 
          setSelectedSize={setHeroSize} 
          onClaimClick={handleClaimClick} 
        />
        
        <TrustBanner lang={lang} />
        
        <CrossSell lang={lang} onAdd={handleAddCrossSell} />
        
        <CheckoutForm 
          lang={lang}
          cart={cart} 
          heroSize={heroSize} 
          onRemoveItem={handleRemoveItem}
        />
      </main>

      <Footer lang={lang} />
    </div>
  );
}
