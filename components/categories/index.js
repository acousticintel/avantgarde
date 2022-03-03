import Script from "next/script";
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
      ease: "easeOut",
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
      <motion.div variants={riseVar} className='sec-under'/>
      <motion.main variants={cardContVar} className="cat-sec">
        <Script src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js" />
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/ochimkct.json"
              trigger="morph-two-way"
              colors="primary:#000537,secondary:#f97316"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Research & Development</h6>
          <p>Helping our clients to find and deploy long term solutions.</p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/zpxybbhl.json"
              trigger="morph-two-way"
              colors="primary:#000537,secondary:#f97316"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Communication</h6>
          <p>
            Ensuring our clients and their customers communicate effectively.
          </p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
              src="https://cdn.lordicon.com/gqdnbnwt.json"
              trigger="morph-two-way"
              colors="primary:#000537,secondary:#f97316"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Growth & Expansion</h6>
          <p>
            Assisting our clients to broaden their horizons to reach every
            customer.
          </p>
        </motion.div>
        <motion.div variants={riseVar} className="cat-card">
          <div className="h-40">
            <lord-icon
    src="https://cdn.lordicon.com/qghrdngw.json"
              trigger="morph-two-way"
              colors="primary:#000537,secondary:#f97316"
              style={{ width: "150px", height: "150px" }}
            />
          </div>
          <h6>Technology</h6>
          <p>
            Innovating disruptive technology for emerging problems to create
            valuable solutions.
          </p>
        </motion.div>
      </motion.main>
    </motion.section>
  );
}
