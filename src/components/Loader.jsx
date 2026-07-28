import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#03142b] z-[99999] flex items-center justify-center"
        >

          <div className="text-center">

            {/* LOGO */}
            <h1 className="text-white text-[50px] lg:text-[90px] font-extrabold tracking-[5px]">

              UNION
              <span className="text-[#d4a437]"> REALITY</span>

            </h1>

            {/* LOADING BAR */}
            <div className="w-[300px] h-[4px] bg-white/10 rounded-full overflow-hidden mt-10 mx-auto">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-full bg-[#d4a437]"
              />

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}