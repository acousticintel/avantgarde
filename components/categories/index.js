import { useEffect } from "react";
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
      when: "beforeChildren",
    },
  },
};

const cardContVar = {
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
      ease: 'easeOut',
      duration: 0.25,
    },
  },
};

export default function Categories() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  return (
    <motion.section
      initial="hide"
      ref={ref}
      animate={controls}
      variants={contVar}
      className="cat-cont"
    >
      <motion.h4 variants={riseVar}>Top Categories</motion.h4>
      <motion.main variants={cardContVar} className="cat-sec">
        <script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js" />
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/ochimkct.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Coding and Web</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum.
          </p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/ijznovhy.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>3D Interaction</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum.
          </p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/jvucoldz.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Mordern and Art</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum.
          </p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/gqdnbnwt.json"
              trigger="loop"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Growth</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            fermentum.
          </p>
        </motion.div>
      </motion.main>
    </motion.section>
  );
}
