import React from 'react';
import { cn } from '../../utils/helpers';

/**
 * Button component
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant
 * @param {string} [props.size='md'] - Button size
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.disabled] - Whether the button is disabled
 * @param {Function} [props.onClick] - Click handler
 * @returns {JSX.Element}
 */
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  disabled,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-blue-300 bg-white text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent hover:bg-gray-100',
  };
  
  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-lg',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
} 