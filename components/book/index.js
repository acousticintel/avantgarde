import Image from "next/image";
import { Link } from "react-scroll";
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
      type: "spring",
      mass: 0.8,
      damping: 5,
    },
  },
};

const swingVar = {
  hide: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export default function Book() {
  return (
    <motion.section
      id="book"
      initial="hide"
      animate="show"
      variants={contVar}
      className="book"
    >
      <motion.div variants={textVar} className="text">
        <motion.h1 variants={riseVar}>Book a meeting with us</motion.h1>
        <motion.p variants={riseVar}>
          We are only a calendar schedule away from listening to you and
          figuring out your new together.
        </motion.p>
        <Link to="contact" smooth={true}>
          <motion.button variants={riseVar}>Contact Us</motion.button>
        </Link>
      </motion.div>
      <motion.div variants={riseVar} className="content">
        {/*
        <video autoPlay muted loop>
          <source src="assets/demo.mp4" />
        </video>
        */}
        <div className="image">
          <Image className="pic" src="/assets/calender.svg" layout="fill" alt="calender"/>
        </div>
      </motion.div>
    </motion.section>
  );
}
