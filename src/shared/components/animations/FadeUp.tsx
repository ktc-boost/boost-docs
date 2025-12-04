import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

interface FadeUpProps extends MotionProps {
  children: ReactNode;
  delay?: number;
}

const FadeUp = ({ children, delay = 0, ...props }: FadeUpProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
