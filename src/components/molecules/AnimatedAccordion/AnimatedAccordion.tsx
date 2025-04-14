import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import MUIAccordion from "@mui/material/Accordion";

interface AnimatedAccordionProps {
  children: any;
  index: number;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
  className?: string;
  sx?: any;
}

const AnimatedAccordion: React.FC<AnimatedAccordionProps> = ({
  children,
  index,
  expanded,
  onChange,
  className,
  sx,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.5, duration: 0.6, ease: "easeOut" }}
    >
      <MUIAccordion
        expanded={expanded}
        onChange={onChange}
        className={className}
        sx={sx}
      >
        {children}
      </MUIAccordion>
    </motion.div>
  );
};

export default AnimatedAccordion;
