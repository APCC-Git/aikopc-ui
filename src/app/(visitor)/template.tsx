'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import TerminalHeader from '@/components/AIKOPC-UI/TerminalHeader';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const firstPath = pathname.split('/').filter(Boolean)[0];
  const [currentPage, setCurrentPage] = useState(firstPath);

  return (
    <>
      <TerminalHeader onNavigate={setCurrentPage} currentPage={currentPage} />
      {children}
    </>
  );
}
