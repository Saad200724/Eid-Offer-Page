import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2, Shield, MapPin, Phone, User, X } from "lucide-react";
import confetti from "canvas-confetti";
import { useCreateOrder } from "@/hooks/use-orders";
import { Language } from "@/pages/Home";

interface CartItem {
  id: string;
  name: string;
  price: number;
  isFlagship?: boolean;
  size?: string;
}

interface CheckoutFormProps {
  lang: Language;
  cart: CartItem[];
  heroSize: string;
  onRemoveItem: (id: string, size?: string) => void;
}

const DELIVERY_CHARGE = 60;

const content = {
  en: {
    title: "Finalize Your Order",
    subtitle: "Fast, secure checkout. Pay when you receive it.",
    successTitle: "Order Confirmed!",
    successMsg: "Thank you for choosing TRIQZ x RIZQAR. We will contact you shortly to verify delivery details.",
    codInfo: "Prepare Cash on Delivery",
    shippingTitle: "Shipping Information",
    fullName: "Full Name",
    namePlaceholder: "e.g. Hasan Mahmud",
    phone: "Phone Number",
    phoneVerification: "For order verification",
    phonePlaceholder: "01XXXXXXXXX",
    address: "Full Address",
    addressPlaceholder: "House, Road, Area, City (Be specific)",
    sizeLabel: "Select Size (Flagship Product)",
    sizeSelect: "Select a size",
    submitBtn: "Confirm Order via Cash on Delivery",
    summaryTitle: "Order Summary",
    emptyCart: "Your cart is empty",
    subtotal: "Subtotal",
    delivery: "Delivery Charge",
    totalToPay: "Total to Pay",
    payInCash: "Pay in cash when order arrives",
    confirmOrderMobile: "Confirm Order",
    currency: "BDT",
    processing: "Processing..."
  },
  bn: {
    title: "আপনার অর্ডার সম্পন্ন করুন",
    subtitle: "দ্রুত এবং নিরাপদ চেকআউট। হাতে পাওয়ার পর মূল্য পরিশোধ করুন।",
    successTitle: "অর্ডার নিশ্চিত করা হয়েছে!",
    successMsg: "TRIQZ x RIZQAR বেছে নেওয়ার জন্য আপনাকে ধন্যবাদ। আমরা শীঘ্রই ডেলিভারি তথ্য যাচাই করতে আপনার সাথে যোগাযোগ করব।",
    codInfo: "ক্যাশ অন ডেলিভারি প্রস্তুত রাখুন",
    shippingTitle: "শিপিং তথ্য",
    fullName: "সম্পূর্ণ নাম",
    namePlaceholder: "উদাঃ হাসান মাহমুদ",
    phone: "ফোন নম্বর",
    phoneVerification: "অর্ডার যাচাইকরণের জন্য",
    phonePlaceholder: "০১XXXXXXXXX",
    address: "বিস্তারিত ঠিকানা",
    addressPlaceholder: "বাসা, রোড, এলাকা, শহর (বিস্তারিত লিখুন)",
    sizeLabel: "সাইজ নির্বাচন করুন (ফ্ল্যাগশিপ প্রোডাক্ট)",
    sizeSelect: "সাইজ সিলেক্ট করুন",
    submitBtn: "ক্যাশ অন ডেলিভারিতে অর্ডার নিশ্চিত করুন",
    summaryTitle: "অর্ডার সারসংক্ষেপ",
    emptyCart: "আপনার কার্ট খালি",
    subtotal: "উপমোট",
    delivery: "ডেলিভারি চার্জ",
    totalToPay: "মোট পরিশোধ",
    payInCash: "অর্ডার পৌঁছালে নগদে পরিশোধ করুন",
    confirmOrderMobile: "অর্ডার কনফার্ম",
    currency: "টাকা",
    processing: "প্রসেসিং হচ্ছে..."
  }
};

export function CheckoutForm({ lang, cart, heroSize, onRemoveItem }: CheckoutFormProps) {
  const t = content[lang];
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate: createOrder, isPending } = useCreateOrder();

  const totalItems = cart.reduce((sum, item) => sum + item.price, 0);
  const grandTotal = totalItems + DELIVERY_CHARGE;

  const checkoutSchema = z.object({
    fullName: z.string().min(2, lang === "bn" ? "নাম আবশ্যক" : "Name is required").max(100),
    phoneNumber: z.string().min(11, lang === "bn" ? "সঠিক ফোন নম্বর দিন" : "Valid phone number is required").max(15),
    address: z.string().min(10, lang === "bn" ? "বিস্তারিত ঠিকানা দিন" : "Full detailed address is required"),
    size: z.string().min(1, lang === "bn" ? "সাইজ নির্বাচন করুন" : "Size is required"),
  });

  type CheckoutFormData = z.infer<typeof checkoutSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      size: heroSize,
    },
  });

  useEffect(() => {
    setValue("size", heroSize);
  }, [heroSize, setValue]);

  const triggerConfetti = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#047857', '#eab308', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#047857', '#eab308', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const onSubmit = (data: CheckoutFormData) => {
    createOrder(
      {
        fullName: data.fullName,
        phoneNumber: data.phoneNumber,
        address: data.address,
        size: data.size,
        totalAmount: grandTotal,
        productId: cart.map(item => `${item.id}(${item.size})`).join(", "),
      },
      {
        onSuccess: () => {
          setIsSuccess(true);
          triggerConfetti();
        },
      }
    );
  };

  if (isSuccess) {
    return (
      <div id="checkout-section" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-4xl font-display font-bold text-foreground mb-4">{t.successTitle}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t.successMsg}</p>
          <div className="p-6 bg-muted rounded-2xl inline-block text-left">
            <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" /> {t.codInfo}
            </p>
            <p className="text-3xl font-display font-bold text-primary">{grandTotal} {t.currency}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="checkout-section" className="py-20 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-muted-foreground text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1">
            <form onSubmit={handleSubmit(onSubmit)} className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 relative z-10">
              <h3 className="text-xl font-bold text-foreground border-b pb-4 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> {t.shippingTitle}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.fullName}</label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder={t.namePlaceholder}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg"
                  />
                  {errors.fullName && <p className="mt-2 text-sm text-destructive">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2 flex justify-between">
                    <span>{t.phone}</span>
                    <span className="text-primary text-xs bg-primary/10 px-2 py-0.5 rounded">{t.phoneVerification}</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      placeholder={t.phonePlaceholder}
                      className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg font-medium tracking-wide"
                    />
                  </div>
                  {errors.phoneNumber && <p className="mt-2 text-sm text-destructive">{errors.phoneNumber.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.address}</label>
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <textarea
                      {...register("address")}
                      rows={3}
                      placeholder={t.addressPlaceholder}
                      className="w-full pl-12 pr-5 py-4 rounded-xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg resize-none"
                    />
                  </div>
                  {errors.address && <p className="mt-2 text-sm text-destructive">{errors.address.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">{t.sizeLabel}</label>
                  <select
                    {...register("size")}
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-border text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg font-semibold appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23013220'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: `right 1.25rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.5em 1.5em` }}
                  >
                    <option value="">{t.sizeSelect}</option>
                    <option value="M">Medium (M)</option>
                    <option value="L">Large (L)</option>
                    <option value="XL">Extra Large (XL)</option>
                    <option value="XXL">Double XL (XXL)</option>
                  </select>
                  {errors.size && <p className="mt-2 text-sm text-destructive">{errors.size.message}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending || cart.length === 0}
                className="hidden md:flex mt-10 w-full px-8 py-5 bg-foreground text-white rounded-xl font-display font-bold text-xl items-center justify-center gap-2 hover:bg-primary transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <><Loader2 className="w-6 h-6 animate-spin" /> {t.processing}</>
                ) : (
                  <>{t.submitBtn}</>
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/5 border border-border sticky top-24">
              <h3 className="text-xl font-bold text-foreground border-b pb-4 mb-6">{t.summaryTitle}</h3>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-foreground text-sm leading-snug">{item.name}</p>
                      <p className="text-xs text-primary font-medium mt-1">Size: {item.size}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-bold text-foreground whitespace-nowrap">{item.price} {t.currency}</span>
                      {!item.isFlagship && (
                        <button 
                          onClick={() => onRemoveItem(item.id, item.size)}
                          className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" /> Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {cart.length === 0 && (
                  <p className="text-center text-muted-foreground text-sm py-4">{t.emptyCart}</p>
                )}
              </div>

              <div className="border-t border-dashed pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>{t.subtotal}</span>
                  <span>{totalItems} {t.currency}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>{t.delivery}</span>
                  <span>{cart.length > 0 ? DELIVERY_CHARGE : 0} {t.currency}</span>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-xl mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground">{t.totalToPay}</span>
                  <span className="text-2xl font-display font-extrabold text-primary">
                    {cart.length > 0 ? grandTotal : 0} {t.currency}
                  </span>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-2">{t.payInCash}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50">
        <button
          onClick={() => {
            const form = document.querySelector('form');
            if (form) form.requestSubmit();
          }}
          disabled={isPending || cart.length === 0}
          className="w-full px-6 py-4 bg-foreground text-white rounded-xl font-display font-bold text-lg items-center justify-center gap-2 active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed flex shadow-lg"
        >
          {isPending ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> {t.processing}</>
          ) : (
            <>{t.confirmOrderMobile} <span className="text-white/70 font-normal">({grandTotal} {t.currency})</span></>
          )}
        </button>
      </div>
    </section>
  );
}
