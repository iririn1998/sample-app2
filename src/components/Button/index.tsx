'use client'

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/50 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/60 active:scale-[0.98] dark:from-blue-500 dark:to-blue-600 dark:shadow-blue-500/40 dark:hover:from-blue-600 dark:hover:to-blue-700',
  secondary:
    'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg shadow-gray-500/50 hover:from-gray-700 hover:to-gray-800 hover:shadow-xl hover:shadow-gray-500/60 active:scale-[0.98] dark:from-gray-500 dark:to-gray-600 dark:shadow-gray-500/40 dark:hover:from-gray-600 dark:hover:to-gray-700',
  outline:
    'border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 hover:border-blue-700 active:scale-[0.98] dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 dark:hover:border-blue-300',
  ghost:
    'text-gray-700 bg-transparent hover:bg-gray-100 active:scale-[0.98] dark:text-gray-300 dark:hover:bg-gray-800',
  danger:
    'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/50 hover:from-red-700 hover:to-red-800 hover:shadow-xl hover:shadow-red-500/60 active:scale-[0.98] dark:from-red-500 dark:to-red-600 dark:shadow-red-500/40 dark:hover:from-red-600 dark:hover:to-red-700',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2 text-base rounded-lg',
  lg: 'px-6 py-3 text-lg rounded-xl',
};

export const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  disabled,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none';

  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const focusRingClass =
    variant === 'primary' || variant === 'danger'
      ? 'focus:ring-blue-500 dark:focus:ring-blue-400'
      : variant === 'secondary'
        ? 'focus:ring-gray-500 dark:focus:ring-gray-400'
        : 'focus:ring-blue-500 dark:focus:ring-blue-400';

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${focusRingClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
