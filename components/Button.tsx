import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase font-medium";
  
  const variants = {
    primary: "bg-fashion-black text-white hover:bg-fashion-gold hover:text-fashion-black border border-fashion-black hover:border-fashion-gold",
    outline: "bg-transparent border border-fashion-black text-fashion-black hover:bg-fashion-black hover:text-white",
    text: "bg-transparent text-fashion-black hover:text-fashion-gold px-0 underline-offset-4 hover:underline"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};