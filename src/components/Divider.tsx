"use client";
import { motion } from "framer-motion";

const Divider: React.FC = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{ duration: 0.8 }}
      className="h-px max-w-3xl bg-slate-300"
    />
  );
};
export default Divider;
