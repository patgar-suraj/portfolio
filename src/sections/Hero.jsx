import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { FaGithubSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `I love creating captivating and functional interfaces 
  that evoke emotions and establish a connection between 
  the brand and the user.`;
  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen">
      <div className="px-10 flex items-center justify-start gap-2">
        <a href="" className=" text-[1.8rem]"><ImLinkedin /></a>
        <a href="" className=" text-[2rem]"><FaGithubSquare /></a>
      </div>
      <AnimatedHeaderSection
        subTitle={"Frontend Developer"}
        title={"suraj patgar"}
        text={text}
        textColor={"text-black"}
      />
      <figure
        className="absolute inset-0 -z-50 pointer-events-none"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            {/* <Spline scale={isMobile ? 0.7 : 1} /> */}
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>

      {/* <Spline  scene="https://prod.spline.design/O685tfjjB1ChM3Hw/scene.splinecode" /> */}
      {/* <Spline  scene="https://prod.spline.design/TBtsHp62Pv39JBZB/scene.splinecode" /> */}
      <Spline id="box" className="absolute bottom-0 left-0 z-[-10]" scene="https://prod.spline.design/TBtsHp62Pv39JBZB/scene.splinecode" />
      <div className="absolute bottom-0 left-0 h-[60px] w-screen bg-[#E5E5E0] z-10"></div>
    </section>
  );
};

export default Hero;
