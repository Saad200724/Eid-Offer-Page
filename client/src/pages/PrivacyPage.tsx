import { Language } from "./Home";

interface PolicyProps {
  lang: Language;
}

export default function PrivacyPage({ lang }: PolicyProps) {
  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 2024",
      sections: [
        {
          title: "1. Information We Collect",
          content: "We collect personal information such as name, phone number, and address solely for the purpose of processing and delivering your orders."
        },
        {
          title: "2. How We Use Your Information",
          content: "Your contact details are used to verify orders and coordinate delivery. We do not sell or share your data with third parties for marketing purposes."
        },
        {
          title: "3. Data Security",
          content: "We implement industry-standard security measures to protect your personal information from unauthorized access."
        },
        {
          title: "4. Your Rights",
          content: "You have the right to request access to or deletion of your personal data stored in our system at any time."
        }
      ]
    },
    bn: {
      title: "গোপনীয়তা নীতি (Privacy Policy)",
      lastUpdated: "সর্বশেষ আপডেট: মার্চ ২০২৪",
      sections: [
        {
          title: "১. সংগৃহীত তথ্য",
          content: "আমরা আপনার নাম, ফোন নম্বর এবং ঠিকানা সংগ্রহ করি শুধুমাত্র অর্ডার প্রসেসিং এবং ডেলিভারির উদ্দেশ্যে।"
        },
        {
          title: "২. তথ্যের ব্যবহার",
          content: "আপনার তথ্য অর্ডার যাচাইকরণ এবং ডেলিভারি সমন্বয়ের জন্য ব্যবহৃত হয়। আমরা কোনো তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রি করি না।"
        },
        {
          title: "৩. ডাটা নিরাপত্তা",
          content: "আপনার ব্যক্তিগত তথ্য সুরক্ষিত রাখতে আমরা প্রয়োজনীয় নিরাপত্তা ব্যবস্থা গ্রহণ করি।"
        },
        {
          title: "৪. আপনার অধিকার",
          content: "আপনি যেকোনো সময় আমাদের সিস্টেমে সংরক্ষিত আপনার তথ্য দেখা বা মুছে ফেলার অনুরোধ করতে পারেন।"
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
