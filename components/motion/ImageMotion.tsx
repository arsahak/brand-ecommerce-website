"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const ImageMotion = ({ children, width = "100%" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={mainControls}
        variants={{
          hidden: { opacity: 0.8, scale: 0.95, y: 50 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration: 1.2, // Longer duration for smoother effect
              ease: "easeOut", // Smooth easing
              type: "spring",
              stiffness: 70, // Softer bounce
              damping: 15, // Less abrupt stopping
            },
          },
        }}
        style={{
          overflow: "hidden", // Ensures no visual artifacts
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ImageMotion;
