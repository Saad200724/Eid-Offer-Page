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
            <p className="text-xl md:text-2xl font-medium text-foreground">
              {lang === "bn" ? "কেনার আগে অর্থ বুঝে নিন" : "Know the meaning before you buy"}
            </p>
          </div>
          
          <div className="relative mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-primary/10">
            <video 
              src={videoSrc} 
              className="w-full h-full object-cover"
              controls
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
