import { Language } from "./Home";

interface PolicyProps {
  lang: Language;
}

export default function ContactPage({ lang }: PolicyProps) {
  const content = {
    en: {
      title: "Contact Us",
      subtitle: "We are here to help you with your orders and inquiries.",
      phone: "Phone Numbers",
      email: "Email Address",
      address: "Our Location",
      workingHours: "Working Hours",
      hoursDetail: "Daily: 10:00 AM - 10:00 PM",
      contactPerson: "Sahol"
    },
    bn: {
      title: "যোগাযোগ করুন",
      subtitle: "আপনার অর্ডার এবং জিজ্ঞাসার জন্য আমরা এখানে আছি।",
      phone: "ফোন নম্বর",
      email: "ইমেইল ঠিকানা",
      address: "আমাদের অবস্থান",
      workingHours: "কার্যসময়",
      hoursDetail: "প্রতিদিন: সকাল ১০:০০ - রাত ১০:০০",
      contactPerson: "সাহল"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-display font-bold mb-4">{t.title}</h1>
        <p className="text-muted-foreground mb-12 text-lg">{t.subtitle}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <h2 className="text-xl font-bold mb-4 text-primary">{t.phone}</h2>
            <div className="space-y-2 text-lg font-semibold">
              <p>01760-307928 ({t.contactPerson})</p>
              <p>01973-421085 ({t.contactPerson})</p>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
            <h2 className="text-xl font-bold mb-4 text-primary">{t.workingHours}</h2>
            <p className="text-lg">{t.hoursDetail}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
