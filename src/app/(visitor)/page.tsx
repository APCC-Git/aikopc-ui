'use client';

import React from 'react';
import TerminalWindow from '@/components/AIKOPC-UI/TerminalWindow';
import TopCommand from '@/components/AIKOPC-UI/effect/TopCommand';
import WelcomeSh from '@/components/AIKOPC-UI/effect/WelcomeSh';
import TerminalCard from '@/components/AIKOPC-UI/TerminalCard';
import ScrollAsciiArt from '@/components/AIKOPC-UI/effect/ScrollAsciiArt';
import { asciiArt, asciiArtDomain, consoleStyle } from '@/components/AIKOPC-UI/effect/asciiArt';
import { GridItem, GridContainer } from '@/components/AIKOPC-UI/effect/AnimatedGrid';

export default function Page() {
  console.log(`%c${asciiArt + asciiArtDomain}`, consoleStyle);
  // const [resetCounter, setResetCounter] = useState(0);

  // const resetAnimation = () => {
  //   setResetCounter(prev => prev + 1);
  // };

  return (
    <div className={'w-full min-h-screen font-hack-gen'}>
      <GridContainer
        className={
          'flex flex-col md:grid grid-cols-8 grid-rows-7 gap-6 mx-auto px-4 py-8 md:px-8 lg:px-16'
        }
      >
        {/* WelcomeWindow */}
        <GridItem delay={100} className="col-span-6 row-span-2">
          <TerminalWindow title="welcome.sh" className={'h-full'} activeOnFocus>
            <WelcomeSh />
          </TerminalWindow>
        </GridItem>

        {/* Top Effect */}
        <GridItem delay={200} className="hidden md:block col-span-2 row-span-2">
          <TerminalWindow title={'top'} className={'h-full'} padding={'p-1'}>
            <TopCommand />
          </TerminalWindow>
        </GridItem>

        {/* placeholder */}
        <GridItem delay={100} className="col-span-2 row-span-2">
          <TerminalCard title="system-status.sh" icon="📊" className={'h-full'}>
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
        </GridItem>

        <GridItem className="col-span-6 row-span-1" delay={200}>
          <TerminalWindow title="billboard.sh" className={'h-full'} padding={'p-1'} activeOnFocus>
            <div className={'w-full h-full flex justify-center items-center'}>
              <ScrollAsciiArt />
            </div>
          </TerminalWindow>
        </GridItem>

        <GridItem className="col-span-6 row-span-2" delay={300}>
          <TerminalWindow title="mainSection2.sh" className={'h-full'} activeOnFocus>
            <div className={'h-16'}></div>
          </TerminalWindow>
        </GridItem>

        <GridItem className="hidden md:block col-span-2 row-span-1" delay={100}>
          <TerminalWindow title={'top'} className={'h-full'} padding={'p-1'}>
            <div></div>
          </TerminalWindow>
        </GridItem>

        <GridItem className={'col-span-6 row-span-2'} delay={300}>
          <TerminalWindow title="mainSection3.sh" className="h-full" activeOnFocus>
            <div className={'h-16'}></div>
          </TerminalWindow>
        </GridItem>

        <GridItem className={'hidden md:block col-span-2 row-span-2'} delay={100}>
          <TerminalWindow title={'top'} className="h-full" padding={'p-1'}>
            <TopCommand />
          </TerminalWindow>
        </GridItem>
      </GridContainer>
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
