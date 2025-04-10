'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
};

export default function FadeIn({ children, delay = 0, duration = 1.5 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, ease: 'easeInOut', delay }}
    >
      {children}
    </motion.div>
  );
}
