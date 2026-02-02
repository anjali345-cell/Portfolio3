'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const spring = { damping: 30, stiffness: 150, mass: 0.5 };
  const x = useSpring(cursorX, spring);
  const y = useSpring(cursorY, spring);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    const elements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );

    elements.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        className="w-6 h-6 bg-rose-400"
        animate={{
          scale: isHovering ? 2.2 : 1,
          rotate: isHovering ? 20 : 0,
          borderRadius: isHovering ? '30%' : '50%',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

export default CustomCursor;
