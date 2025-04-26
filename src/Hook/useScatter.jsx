import React, { useState } from "react";
import { motion } from "framer-motion";

export const useScatter = (text) => {
  const [isHovered, setIsHovered] = useState(false);
console.log(text)
  const scattered = text?.split(" ").map((char, i) => {
    const animation = isHovered
      ? {
          x: Math.random() * 40 - 20,
          y: Math.random() * 40 - 20,
          rotate: Math.random() * 90 - 45,
        }
      : { x: 0, y: 0, rotate: 0 };

    return (
      <motion.span
        key={i}
        animate={animation}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block"
      >
        {char}
      </motion.span>
    );
  });

  return { scattered, setIsHovered };
};

// const ScatterText = () => {
//   const text = "Scatter Me";
//   const { scattered, setIsHovered } = useScatter(text);

//   return (
//     <div
//       className="flex gap-1 text-3xl font-bold cursor-pointer"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {scattered}
//     </div>
//   );
// };

// export default ScatterText;
