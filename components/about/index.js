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
    },
  },
};

const swingVar = {
  hide: {
    opacity: 0,
    rotateX: 0,
  },
  show: {
    opacity: 1,
    rotateX: 360,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export default function About() {
  return (
    <motion.section
      initial="hide"
      animate="show"
      variants={contVar}
      className="about"
    >
      <motion.div variants={textVar} className="text">
        <motion.h1 variants={riseVar}>Book a meeting with us</motion.h1>
        <motion.p variants={riseVar}>
          We are only a calendar schedule away from listening to you and
          figuring out your new together.
        </motion.p>
        <motion.button variants={riseVar}>Join us</motion.button>
      </motion.div>
      <motion.div variants={swingVar} className="content">
        {/*
        <video autoPlay muted loop>
          <source src="assets/demo.mp4" />
        </video>
        */}
        <div className="image">
          <Image classname="pic" src="/assets/calender.svg" layout="fill" />
        </div>
      </motion.div>
    </motion.section>
  );
}
