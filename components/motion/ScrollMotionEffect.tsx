"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { ReactNode, useEffect } from "react";

interface ScrollMotionEffectProps {
  children: ReactNode;
  effect: string; // Changed to `string` for TypeScript consistency
  duration: string; // Changed to `number` for TypeScript consistency
}

const ScrollMotionEffect: React.FC<ScrollMotionEffectProps> = ({
  children,
  effect,
  duration,
}) => {
  useEffect(() => {
    console.log("Initializing AOS");
    AOS.init({
      once: true, // Ensures animations trigger only once
      easing: "ease-in-out", // Smooth easing function
      offset: 120, // Offset for triggering animations
    });

    return () => {
      AOS.refresh(); // Ensure cleanup
    };
  }, []);

  return (
    <div
      className=""
      data-aos={effect}
      data-aos-easing="ease-in-out"
      data-aos-delay="100"
      data-aos-offset="120"
      data-aos-duration={duration}
      data-aos-once="true"
    >
      {children}
    </div>
  );
};

export default ScrollMotionEffect;
