import React, { useState, useEffect, useRef } from 'react';

// グリッドアイテム用のラッパーコンポーネント
type GridItemProps = {
  children: React.ReactNode | React.ReactNode[];
  delay?: number;
  className?: string;
};
const GridItem = ({ children, delay = 0, className = '' }: GridItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`
        transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// メインのグリッドコンテナー
type GridContainerProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  resetTrigger?: number;
};

const GridContainer = ({ children, className = '', resetTrigger = 0 }: GridContainerProps) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [resetTrigger]);

  return (
    <div key={animationKey} className={className}>
      {children}
    </div>
  );
};

export { GridItem, GridContainer };
