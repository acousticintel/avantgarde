import Image from "next/image";
import { motion } from "framer-motion";

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
      when: "beforeChildren",
    },
  },
};

const textVar = {
  hide: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      initial="hide"
      animate="show"
      variants={contVar}
      className="hero"
    >
      <motion.div variants={textVar} className="text">
        <motion.h1 variants={riseVar}>Create your new with us</motion.h1>
        <motion.p variants={riseVar}>
          We are an innovation and creative agency providing solutions for our
          clients’ problems.
        </motion.p>
        <motion.button variants={riseVar}>Contact Us</motion.button>
      </motion.div>
      <motion.div variants={riseVar} className="content">
        {/*
        <video autoPlay muted loop>
          <source src="assets/demo.mp4" />
        </video>
        */}
        <Image
          classname="pic"
          src="/assets/product_iteration.svg"
          layout="fill"
        />
      </motion.div>
    </motion.section>
  );
}
