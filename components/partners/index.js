import Image from "next/image";
import { useEffect } from "react";
import Carousel from "framer-motion-carousel";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contVar = {
  hide: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      delayChildren: 0.15,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
};

const riseVar = {
  hide: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.25,
    },
  },
};

const partners = [
  { name: "google", src: "/assets/google.png" },
  { name: "intel", src: "/assets/intel.png" },
];

export default function Partners() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hide"
      ref={ref}
      animate={controls}
      variants={contVar}
      className="partner-cont"
    >
      <motion.h4 variants={riseVar}>Partners</motion.h4>
      <motion.div variants={riseVar} className=" absolute right-0 w-full md:w-1/2 h-full">
        <div className="blob top-18 left-0 w-52 h-52 bg-red-300" />
        <div className="blob top-24 left-20 w-52 h-52 bg-blue-300 animation-delay-2000" />
        <div className="blob bottom-16 left-0 w-52 h-52 bg-pink-300 animation-delay-4000" />
      </motion.div>
      <motion.div variants={riseVar} className="caraousel">
        <Carousel interval={5000}>
          {partners.map((p, i) => (
            <div key={i} className="partner-logo">
              <div className="logo">
                <Image
                  src={p.src}
                  className="w-full h-full object-contain"
                  layout="fill"
                />
              </div>
              <span>{p.name}</span>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
