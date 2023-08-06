import Link from "next/link";
import clsx from "clsx";
import { missingClass } from "@/app/lib/utils";
// import { missingClass } from "@/lib/utils";

export function Button({
  as = "button",
  className = "",
  variant = "primary",
  width = "auto",
  ...props
}) {
  const Component = props?.href ? Link : as;

  const baseButtonClasses =
    "inline-block rounded font-medium text-center py-2 px-6 ";

  const variants = {
    primary: `${baseButtonClasses} bg-teal-900 border-2 border-white text-white`,
    secondary: `${baseButtonClasses} border border-secondary bg-contrast text-secondary`,
    inline: "border-b border-primary/10 leading-none pb-1",
    hover: `${baseButtonClasses} border border-secondary bg-secondary/50 text-white/50`,
    trans: `${baseButtonClasses} text-white border-2 border-secondary bg-contrast text-secondary`,
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

  return <Component href={""} className={styles} {...props} />;
}
