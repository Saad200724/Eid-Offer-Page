import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { TrustBanner } from "@/components/home/TrustBanner";
import { VideoBanner } from "@/components/home/VideoBanner";
import { CrossSell, Product } from "@/components/home/CrossSell";
import { CheckoutForm } from "@/components/home/CheckoutForm";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { useToast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  isFlagship?: boolean;
  size?: string;
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

export interface HomeProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export default function Home({ lang, setLang }: HomeProps) {
  const [heroSize, setHeroSize] = useState("L");
  const [cart, setCart] = useState<CartItem[]>([{ ...(lang === 'bn' ? FLAGSHIP_ITEM_BN : FLAGSHIP_ITEM_EN), size: "L" }]);
  const { toast } = useToast();

  useEffect(() => {
    setCart(prev => prev.map(item => {
      if (item.id === 'flagship') {
        return { ...(lang === 'bn' ? FLAGSHIP_ITEM_BN : FLAGSHIP_ITEM_EN), size: heroSize };
      }
      return item;
    }));
  }, [lang, heroSize]);

  const handleClaimClick = () => {
    document.getElementById('checkout-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleAddCrossSell = (product: Product, size: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === size);
      if (existing) {
        toast({
          title: lang === "bn" ? "ইতিমধ্যে কার্টে আছে" : "Already in cart",
          description: lang === "bn" ? `${product.name} (${size}) ইতিমধ্যে আপনার অর্ডারে আছে।` : `${product.name} (${size}) is already in your order.`,
        });
        return prev;
      }
      
      toast({
        title: lang === "bn" ? "অর্ডারে যোগ করা হয়েছে" : "Added to Order",
        description: lang === "bn" ? `${product.name} সফলভাবে যোগ করা হয়েছে!` : `${product.name} added successfully!`,
        className: "bg-primary text-white border-none",
      });
      return [...prev, { ...product, size }];
    });
  };

  const handleRemoveItem = (id: string, size?: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const seoTitle = lang === "bn" 
    ? "পিস ট্রি প্রিমিয়াম টি-শার্ট - ঈদ কালেকশন | TRIQZ"
    : "Peace Tree Premium T-Shirt - Eid Collection | TRIQZ";
  
  const seoDescription = lang === "bn"
    ? "পিস ট্রি প্রিমিয়াম টি-শার্টের সাথে আপনার ঈদ উদযাপন করুন। সর্বোচ্চ আরাম এবং চমৎকার স্টাইল। এখনই অর্ডার করুন!"
    : "Elevate your Eid with the Peace Tree Premium T-Shirt. Crafted for supreme comfort and effortless style. Order now!";

  const canonicalUrl = "https://triqz.znforge.dev";
  const ogImageUrl = `${canonicalUrl}/og-image.jpg`;

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content="T-shirt, Eid Collection, Premium Quality, Fashion, Bangladesh, TRIQZ, RIZQAR" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>

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
        
        <VideoBanner lang={lang} />
        
        <ContactSection lang={lang} />
        
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
