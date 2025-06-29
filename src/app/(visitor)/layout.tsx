'use client';

import React, { useState } from 'react';
import TerminalLoading from '@/components/AIKOPC-UI/TerminalLoading';

export default function VisitorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <TerminalLoading onComplete={handleLoadingComplete} />}
      {!isLoading && children}
    </div>
  );
}
