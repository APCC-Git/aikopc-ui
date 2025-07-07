import { AsciiArtComponent } from '@/components/AIKOPC-UI/effect/asciiArt';
import Marquee from 'react-fast-marquee';
import React from 'react';

export default function ScrollAsciiArt() {
  return (
    <div className="overflow-hidden flex items-center justify-center font-hack-gen leading-4 tracking-[-0.08rem]  whitespace-nowrap">
      <Marquee className="overflow-hidden flex flex-nowrap">
        <AsciiArtComponent className={'ml-6'} />
        <AsciiArtComponent className={'ml-6'} />
      </Marquee>
    </div>
  );
}
