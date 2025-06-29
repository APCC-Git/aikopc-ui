import React from 'react';

export default function TerminalButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const variants = {
    primary: 'bg-green-600 hover:bg-green-500 text-black border-green-400',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-green-400 border-green-400',
    danger: 'bg-red-600 hover:bg-red-500 text-white border-red-400',
  };

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`
        font-mono border-2 rounded transition-all duration-200 font-bold
        hover:shadow-lg hover:shadow-green-400/20 active:scale-95
        ${variants[variant]} ${sizes[size]} ${className}
      `}
    >
      {children}
    </button>
  );
}
