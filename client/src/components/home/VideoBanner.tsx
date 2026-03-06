import React from "react";
import videoSrc from "@assets/Animated_Video_Chinese_to_English_Translation_1772774154060.mp4";

interface VideoBannerProps {
  lang: "bn" | "en";
}

export const VideoBanner: React.FC<VideoBannerProps> = ({ lang }) => {
  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {lang === "bn" ? "কেনার আগে অর্থ বুঝে নিন" : "Know the meaning before you buy"}
            </h2>
            <p> {lang === "bn" ? "টি-শার্টে লেখা আছে, নামাজ জান্নাতের চাবিকাঠি, শান্তি - ইসলামের অর্থ, এবং গাছের নীচে সামনের দিকে লেখা আছে, যিনি আমাদের অক্সিজেন দেন এবং সেটাই গাছ ।" : "T-shirt combined of texts, Salat is the key to jannah, Peace thats the meaning of Islam, and On the front side, below the tree it is written, The one who gives us oxygen and that is tree"} 
            </p>
            
          </div>
          
          <div className="relative mx-auto max-w-[300px] aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
            <video 
              src={videoSrc} 
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              data-testid="video-product-demo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
