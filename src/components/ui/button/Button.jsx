"use client";
import clsx from "clsx";
import { missingClass } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export function Button({
  as = "button",
  className = "",
  variant = "primary",
  width = "auto",
  msg,
  children,
  action,
}) {
  const baseButtonClasses = "font-medium text-center py-2 px-6";

  const variants = {
    primary: `${baseButtonClasses} bg-gold text-white rounded font-bold`,
    secondary: `${baseButtonClasses} bg-white border border-teal-900 text-teal-900`,
    whiteborder: `${baseButtonClasses} border border-white text-white`,
  };

  const widths = {
    auto: "w-auto",
    full: "w-full",
  };

  const styles = clsx(
    missingClass(className, "bg-") && variants[variant],
    missingClass(className, "w-") && widths[width],
    className
  );

  return (
    <motion.div
      className={styles}
      whileHover={{
        scale: 1.05,
      }}
      onClick={action}
      style={{
        cursor: "pointer",
      }}
    >
      <div className="flex justify-center items-center gap-4 cursor-pointer font-extrabold">
        {children}
      </div>
    </motion.div>
  );
}
