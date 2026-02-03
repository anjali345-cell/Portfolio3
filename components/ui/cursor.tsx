'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const spring = {
  stiffness: 120,
  damping: 20,
  mass: 0.4,
};

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, spring);
  const ySpring = useSpring(y, spring);

  const xSlow = useSpring(x, { ...spring, stiffness: 60 });
  const ySlow = useSpring(y, { ...spring, stiffness: 60 });

  const xSlower = useSpring(x, { ...spring, stiffness: 35 });
  const ySlower = useSpring(y, { ...spring, stiffness: 35 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);

    const elements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );

    elements.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [x, y]);

  return (
    <>
      {/* MAIN CURSOR */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: xSpring,
          y: ySpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-4 h-4 bg-blue-600 mix-blend-difference"
          animate={{
            scale: isHovering ? 2 : 1,
            borderRadius: '50%',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </motion.div>

      {/* TRAIL 1 */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: xSlow,
          y: ySlow,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-6 h-6 rounded-full bg-cyan-600 opacity-40 blur-sm" />
      </motion.div>

      {/* TRAIL 2 */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{
          x: xSlower,
          y: ySlower,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div className="w-10 h-10 rounded-full bg-cyan-500 opacity-20 blur-md" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
