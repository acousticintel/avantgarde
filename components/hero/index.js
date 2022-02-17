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
      ease: 'easeOut',
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
        <motion.h1 variants={riseVar}>Explore new skills with us</motion.h1>
        <motion.p variants={riseVar}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper
          sapien eu augue consequat suscipit.
        </motion.p>
        <motion.button variants={riseVar}>Join for free</motion.button>
      </motion.div>
      <motion.div variants={riseVar} className="content">
        <video autoPlay muted loop>
          <source src="assets/demo.mp4" />
        </video>
      </motion.div>
    </motion.section>
  );
}
