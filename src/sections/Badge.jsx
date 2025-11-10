import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { badgeData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Badge = () => {
  const text = `These certificates represent my specialized expertise in full-stack 
  architecture, rapid innovation from hackathon challenges, and the 
  strategic implementation of artificial intelligence.`;
  const badgeRefs = useRef([]);
  const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px
  useGSAP(() => {
    badgeRefs.current.forEach((el) => {
      if (!el) return;

      gsap.from(el, {
        y: 200,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
      });
    });
  }, []);
  return (
    <section id="badge" className="min-h-screen bg-black rounded-t-4xl">
      <AnimatedHeaderSection
        subTitle={"Each Certificate, A Step Forward"}
        title={"Badge"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      {badgeData.map((badge, index) => (
        <div
          ref={(el) => (badgeRefs.current[index] = el)}
          key={index}
          className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isDesktop
              ? {
                  top: `calc(10vh + ${index * 5}rem)`,
                  marginBottom: `${(badgeData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl lg:text-5xl">{badge.title}</h2>
              <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                {badge.description}
              </p>
              <a
                onClick={() => window.open(badge.href, "_blank")}
                className="px-2 bg-white rounded text-black cursor-pointer"
              >
                View Certificate <span className="text-2xl">↗</span>
              </a>

              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {badge.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed tracking-widest lg:text-lg text-white/60 text-pretty">
                      {item.description}
                    </p>

                    {itemIndex < badge.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Badge;
