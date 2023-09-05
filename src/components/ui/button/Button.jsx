'use client';
import clsx from 'clsx';
import { missingClass } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Button({
  as = 'button',
  className = '',
  variant = 'primary',
  width = 'auto',
  msg,
  children,
}) {
  const baseButtonClasses = 'font-medium text-center py-2 px-6';

  const variants = {
    primary: `${baseButtonClasses} bg-teal-900 text-white`,
    secondary: `${baseButtonClasses} bg-white border border-teal-900 text-teal-900`,
    whiteborder: `${baseButtonClasses} border border-white text-white`,
  };

  const widths = {
    auto: 'w-auto',
    full: 'w-full',
  };

  const styles = clsx(
    missingClass(className, 'bg-') && variants[variant],
    missingClass(className, 'w-') && widths[width],
    className
  );

  return (
    <motion.div
      className={styles}
      whileHover={{
        scale: 1.05,
      }}
    >
      <Link
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${msg}?`}
        target="_blank"
        rel="noreferrer"
        className="flex justify-center items-center gap-4"
      >
        {children}
      </Link>
    </motion.div>
  );
}
