'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import TerminalWindow from '@/components/AIKOPC-UI/TerminalWindow';
import { AsciiArtComponent } from '@/components/AIKOPC-UI/effect/asciiArt';

type navItemType = {
  label: string;
  command: string;
  link: string;
};

const defaultNavItems: navItemType[] = [
  { label: 'Home', command: 'cd ~/', link: '/' },
  { label: 'About', command: 'whoami', link: '/about' },
  { label: 'Blog', command: 'ls blog/', link: '/blog' },
  { label: 'Contact', command: 'ping aikopc.net', link: '/contact' },
];

export default function TerminalHeader({
  onNavigate,
  navItem = defaultNavItems,
  currentPage = 'home',
}: {
  onNavigate?: (label: string) => void;
  navItem?: navItemType[];
  currentPage?: string;
}) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // ページトップは表示
      if (currentScrollY < 10) {
        setIsHidden(false);
      }
      // 下にスクロールしたら非表示
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsHidden(true);
      }
      // 上にスクロールしたら表示
      else if (currentScrollY < lastScrollY - 5) {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky z-50 w-full transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0 top-4'}`}
    >
      <div className="px-4 md:px-8 lg:px-16">
        <TerminalWindow
          className={'border-terminal-green'}
          title={'apcc@aikopc.net: ~$'}
          showCurrentTime
          padding={'px-2 py-1 md:px-4 md:py-2'}
        >
          <div className="rounded-b-lg px-4 py-3 flex items-center justify-between">
            <div className="flex items-end space-x-1">
              <span className="text-terminal-green font-mono text-[8px] leading-1.5 tracking-[-0.1rem]  whitespace-nowrap">
                <AsciiArtComponent />
              </span>
              <span className="text-terminal-gray font-mono ml-2 mb-0.5 text-sm">v1.0.0</span>
            </div>

            <div className={'hidden lg:flex items-center space-x-8'}>
              <nav className="flex space-x-6">
                {navItem.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => onNavigate?.(item.label.toLowerCase())}
                    className={`group flex flex-col items-center 
                      ${currentPage === item.label.toLowerCase() ? 'text-terminal-green' : 'text-terminal-gray'} hover:text-terminal-green 
                      transition-colors font-mono`}
                  >
                    <Link href={item.link} passHref className="flex flex-col items-center">
                      <span className="text-sm">{item.command}</span>
                      <span className="text-xs opacity-60 group-hover:opacity-100">
                        {item.label}
                      </span>
                    </Link>
                  </button>
                ))}
              </nav>

              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></div>
                <span className="text-terminal-green font-mono text-sm">ONLINE</span>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </header>
  );
}
