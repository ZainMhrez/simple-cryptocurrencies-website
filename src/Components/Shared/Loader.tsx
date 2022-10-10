import { motion } from "framer-motion";

// Source: https://github.com/YouCodeSchool/Loader/blob/main/Loader.jsx

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <motion.div
          className="w-16 h-16 flex justify-around"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            className="block w-4 h-4 rounded-lg bg-sky-500/75"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            className="block w-4 h-4 rounded-lg bg-sky-500/75"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            className="block w-4 h-4 rounded-lg bg-sky-500/75"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
