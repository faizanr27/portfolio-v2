// import { motion, AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// const MotionDiv = motion.div;
// type Text = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
// interface SplashProps {
//   text?: Text;
//   img?: React.ImgHTMLAttributes<HTMLImageElement>;
//   svg?: React.ReactElement;
// }

// export default function Splash({ text, img, svg }: SplashProps) {
//     const [isVisible, setIsVisible] = useState(true);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(false);
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, []);
//   return (
//     <MotionDiv className="flex flex-col items-center justify-center overflow-hidden max-h-min">
//     <AnimatePresence>
//          {isVisible && (
//     <MotionDiv
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { duration: 0.8 } }}
//       exit={{ opacity: 0, y: -100, transition: { duration: 0.5 } }}
//       className="flex flex-col items-center justify-center overflow-hidden max-h-min text-white text-center"
//     >
//       {svg && React.isValidElement(svg) ? svg : null}
//       {text && <p className={`mt-2 text-lg ${text.className}`}>{text.}</p>}
//       {img && <img {...img} className={`mt-2 w-auto h-auto ${img.className || ""}`} alt={img.alt || "Splash image"} />} {/* Static Image rendering */}
//     </MotionDiv>
//        )}
//     </AnimatePresence>
//     </MotionDiv>
//   );
// }