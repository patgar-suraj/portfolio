import React, { useEffect, useRef, useState, Suspense } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { Icon } from "@iconify/react/dist/iconify.js";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  const [show3D, setShow3D] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow3D(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (heroRef.current) io.observe(heroRef.current);
    return () => io.disconnect();
  }, []);

  // reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const text = `I love creating captivating and functional interfaces 
  that evoke emotions and establish a connection between 
  the brand and the user.`;

  const splineScene =
    "https://prod.spline.design/yx7bnzFwdZjO3PDz/scene.splinecode";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative bg-black flex flex-col rounded-b-4xl justify-end min-h-screen overflow-hidden"
    >
      {/* 3d object */}
      {!prefersReducedMotion && show3D && (
        <Suspense fallback={null}>
          <Spline
            className="absolute bottom-0 left-0 w-full h-full"
            scene={splineScene}
          />
        </Suspense>
      )}
      {/* hide logo */}
      <div className="absolute rounded-b-4xl bottom-0 left-0 w-full h-[90px] bg-gradient-to-b from-transparent via-black to-black z-10"></div>

      {/* social media */}
      <div className="relative z-20 px-10 flex items-center justify-start gap-2">
        <a
          href="https://linkedin.com/in/your-id"
          className="text-[#b4893d] hover:text-[#CFA355]"
        >
          <Icon icon="line-md:linkedin" width="40" height="40" />
        </a>
        <a
          href="https://github.com/your-id"
          className="text-[#b4893d] hover:text-[#CFA355]"
        >
          <Icon icon="line-md:github-loop" width="40" height="40" />
        </a>
        <a
          href="https://drive.google.com/file/d/1Q2ExR7Sl_3n8ty9CyN58rAQzI3w1_06W/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b4893d] hover:text-[#CFA355]"
        >
          <Icon icon="line-md:document-list" width="40" height="40" />
        </a>
      </div>

      <AnimatedHeaderSection
        subTitle={"Frontend Developer"}
        title={"suraj patgar"}
        text={text}
        textColor={"text-white"}
      />
    </section>
  );
}
