import React, { useState } from "react";
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

const FLAGSHIP_ITEM: CartItem = {
  id: 'flagship',
  name: 'Peace Tree Premium T-Shirt',
  price: 550,
  isFlagship: true
};

export default function Home() {
  const [heroSize, setHeroSize] = useState("L");
  const [cart, setCart] = useState<CartItem[]>([FLAGSHIP_ITEM]);
  const { toast } = useToast();

  const handleClaimClick = () => {
    // Ensure flagship is in cart
    if (!cart.find(item => item.id === 'flagship')) {
      setCart(prev => [FLAGSHIP_ITEM, ...prev]);
    }
    
    document.getElementById('checkout-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleAddCrossSell = (product: Omit<CartItem, 'isFlagship'>) => {
    setCart(prev => {
      // Prevent duplicates of same item for simplicity, or could increase qty
      if (prev.find(item => item.id === product.id)) {
        toast({
          title: "Already in cart",
          description: `${product.name} is already in your order.`,
        });
        return prev;
      }
      
      toast({
        title: "Added to Order",
        description: `${product.name} added successfully!`,
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
      <Navbar />
      
      <main>
        <Hero 
          selectedSize={heroSize} 
          setSelectedSize={setHeroSize} 
          onClaimClick={handleClaimClick} 
        />
        
        <TrustBanner />
        
        <CrossSell onAdd={handleAddCrossSell} />
        
        <CheckoutForm 
          cart={cart} 
          heroSize={heroSize} 
          onRemoveItem={handleRemoveItem}
        />
      </main>

      <Footer />
    </div>
  );
}
