import { Language } from "./Home";

interface PolicyProps {
  lang: Language;
}

export default function TermsPage({ lang }: PolicyProps) {
  const content = {
    en: {
      title: "Terms and Conditions",
      lastUpdated: "Last Updated: March 2024",
      sections: [
        {
          title: "1. Introduction",
          content: "Welcome to TRIQZ. By accessing this website and placing an order, you agree to be bound by these Terms and Conditions."
        },
        {
          title: "2. Orders and Payment",
          content: "We primarily operate on a Cash on Delivery (COD) basis. By placing an order, you commit to receiving and paying for the product upon delivery."
        },
        {
          title: "3. Delivery",
          content: "Delivery times may vary based on location. Standard delivery within Dhaka is 2-3 days, and outside Dhaka is 3-5 days. Delivery charges are non-refundable."
        },
        {
          title: "4. Returns and Exchanges",
          content: "Exchanges are only available for manufacturing defects or wrong size delivery if reported within 24 hours of receipt. The product must be unused and in original packaging."
        }
      ]
    },
    bn: {
      title: "শর্তাবলী (Terms and Conditions)",
      lastUpdated: "সর্বশেষ আপডেট: মার্চ ২০২৪",
      sections: [
        {
          title: "১. ভূমিকা",
          content: "TRIQZ-এ আপনাকে স্বাগতম। এই ওয়েবসাইট ব্যবহার করে অর্ডার করার মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে একমত পোষণ করছেন।"
        },
        {
          title: "২. অর্ডার এবং পেমেন্ট",
          content: "আমরা মূলত ক্যাশ অন ডেলিভারি (COD) পদ্ধতিতে কাজ করি। অর্ডার করার মাধ্যমে আপনি পণ্যটি গ্রহণ এবং মূল্য পরিশোধের অঙ্গীকার করছেন।"
        },
        {
          title: "৩. ডেলিভারি",
          content: "অবস্থান ভেদে ডেলিভারি সময় পরিবর্তিত হতে পারে। সাধারণত ঢাকার ভেতরে ২-৩ দিন এবং ঢাকার বাইরে ৩-৫ দিন সময় লাগে।"
        },
        {
          title: "৪. রিটার্ন এবং এক্সচেঞ্জ",
          content: "শুধুমাত্র উৎপাদনগত ত্রুটি বা ভুল সাইজ ডেলিভারির ক্ষেত্রে এক্সচেঞ্জ প্রযোজ্য। পণ্য পাওয়ার ২৪ ঘণ্টার মধ্যে আমাদের জানাতে হবে।"
        }
      ]
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-display font-bold mb-2">{t.title}</h1>
        <p className="text-muted-foreground mb-10">{t.lastUpdated}</p>
        
        <div className="space-y-8">
          {t.sections.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-bold mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
