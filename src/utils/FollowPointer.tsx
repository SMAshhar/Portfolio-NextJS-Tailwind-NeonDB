'use client'

import { motion } from "framer-motion";
import { useState, RefObject, useEffect, useRef } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth/2;
      const y = clientY - element.offsetTop - element.offsetHeight/2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
    ref={ref}
    className="box h-4 w-4 bg-gradient-to-tr from-red-500 to-red-800 shadow-lg shadow-purple-500 z-50 rounded-full ring-1 ring-purple-500"
    animate={{ x, y }}
    transition={{
      type: "string",
      damping: 1,
      stiffness: 100,
      restDelta: 0.001
    }}
  />
  )
}
