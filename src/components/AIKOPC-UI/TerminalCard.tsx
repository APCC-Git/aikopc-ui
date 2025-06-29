import React from 'react';

export default function TerminalCard({
  title,
  children,
  icon = '📁',
  className = '',
}: {
  title: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={`
      bg-gray-900 border-2 border-green-400 rounded-lg p-6 
      shadow-lg shadow-green-400/10 hover:shadow-green-400/20 
      transition-all duration-300 hover:border-green-300
      ${className}
    `}
    >
      {title && (
        <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-700">
          <span className="text-green-400">{icon}</span>
          <h3 className="text-green-400 font-mono font-bold text-lg">{title}</h3>
        </div>
      )}
      <div className="text-gray-300 font-mono">{children}</div>
    </div>
  );
}
