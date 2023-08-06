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

  const baseButtonClasses = "font-medium text-center py-2 px-6";

  const variants = {
    primary: `${baseButtonClasses} bg-teal-900 text-white`,
    secondary: `${baseButtonClasses} bg-white border-2 border-teal-900 text-teal-900`,
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
