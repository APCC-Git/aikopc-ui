'use client';

import React, { useState, useEffect } from 'react';
import TerminalWindow from '@/components/AIKOPC-UI/TerminalWindow';
import TerminalButton from '@/components/AIKOPC-UI/TerminalButton';
import TopCommand from '@/components/AIKOPC-UI/effect/TopCommand';
import WelcomeSh from '@/components/AIKOPC-UI/effect/WelcomeSh';
import TerminalCard from '@/components/AIKOPC-UI/TerminalCard';
import ScrollAsciiArt from '@/components/AIKOPC-UI/effect/ScrollAsciiArt';
import { asciiArt, asciiArtDomain, consoleStyle } from '@/components/AIKOPC-UI/effect/asciiArt';

export default function Page() {
  console.log(`%c${asciiArt + asciiArtDomain}`, consoleStyle);

  return (
    <div className={'w-screen min-h-screen font-hack-gen'}>
      <main
        className={
          'flex flex-col md:grid grid-cols-8 grid-rows-7 gap-6 mx-auto px-4 py-8 md:px-8 lg:px-16'
        }
      >
        {/* Welcome Window */}
        <TerminalWindow title="welcome.sh" className="col-span-6 row-span-2" activeOnFocus>
          <WelcomeSh />
        </TerminalWindow>

        {/* Top Effect */}
        <TerminalWindow
          title={'top'}
          className="hidden md:block col-span-2 row-span-2"
          padding={'p-1'}
        >
          <TopCommand />
        </TerminalWindow>

        {/* placeholder */}
        <TerminalCard title="system-status.sh" icon="📊" className="col-span-2 row-span-2">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Active Members:</span>
              <span className="text-green-400 font-bold">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Running Projects:</span>
              <span className="text-yellow-400 font-bold">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Completed Tasks:</span>
              <span className="text-blue-400 font-bold">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Server Uptime:</span>
              <span className="text-green-400 font-bold">99.9%</span>
            </div>
          </div>
        </TerminalCard>

        <TerminalWindow
          title="billboard.sh"
          className="col-span-6 row-span-1"
          padding={'p-1'}
          activeOnFocus
        >
          <div className={'w-full h-full flex justify-center items-center'}>
            <ScrollAsciiArt />
          </div>
        </TerminalWindow>

        <TerminalWindow
          title="mainSection2.sh"
          className="col-span-6 row-span-2"
          activeOnFocus={true}
        >
          <div className={'h-16'}></div>
        </TerminalWindow>

        <TerminalWindow
          title={'top'}
          className="hidden md:block col-span-2 row-span-1"
          padding={'p-1'}
        >
          <div></div>
        </TerminalWindow>

        <TerminalWindow title="mainSection3.sh" className="col-span-6 row-span-2" activeOnFocus>
          <div className={'h-16'}></div>
        </TerminalWindow>

        <TerminalWindow
          title={'top'}
          className="hidden md:block col-span-2 row-span-2"
          padding={'p-1'}
        >
          <TopCommand />
        </TerminalWindow>
      </main>
      <footer className="border-t-2 border-terminal-green pt-6 mt-12 mb-4">
        <div className="text-center space-y-2">
          <div className="text-sm text-gray-400">
            <span className="text-yellow-400">$</span> whoami
          </div>
          <div className="text-gray-300">APCC - 愛光学園パソコン部</div>
          <div className="text-sm text-gray-500">
            Powered by Next.js × TailwindCSS | Built with ❤️ by APCC Members
          </div>
        </div>
      </footer>
    </div>
  );
}
