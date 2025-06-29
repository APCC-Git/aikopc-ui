import React from 'react';

export const asciiArt = `
  █████╗  ██╗ ██╗  ██╗  ██████╗  ██████╗   ██████╗
 ██╔══██╗ ██║ ██║ ██╔╝ ██╔═══██╗ ██╔══██╗ ██╔════╝
 ███████║ ██║ █████╔╝  ██║   ██║ ██████╔╝ ██║
 ██╔══██║ ██║ ██╔═██╗  ██║   ██║ ██╔═══╝  ██║
 ██║  ██║ ██║ ██║  ██╗ ╚██████╔╝ ██║      ╚██████╗
 ╚═╝  ╚═╝ ╚═╝ ╚═╝  ╚═╝  ╚═════╝  ╚═╝       ╚═════╝`;

export const asciiArtDomain = `  
     ███╗   ██╗ ███████╗ ████████╗
     ████╗  ██║ ██╔════╝ ╚══██╔══╝
     ██╔██╗ ██║ █████╗      ██║
     ██║╚██╗██║ ██╔══╝      ██║
 ██╗ ██║ ╚████║ ███████╗    ██║
 ╚═╝ ╚═╝  ╚═══╝ ╚══════╝    ╚═╝`;

export const consoleStyle = `
font-family: "Courier New", Courier, monospace; font-size: 12px;
background: #2EFF13;
background: linear-gradient(to bottom right, #2EFF13 0%, #EFFF3E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 0em;
line-height: 1.0;
`;

export const AsciiArtComponent = () => {
  return (
    <div className={'flex items-center'}>
      <pre
        className={
          'ml-6 bg-gradient-to-r from-terminal-green to-terminal-yellow bg-clip-text text-transparent'
        }
      >
        {asciiArt}
      </pre>
      <pre className="bg-gradient-to-r to-terminal-green from-terminal-yellow bg-clip-text text-transparent">
        {asciiArtDomain}
      </pre>
    </div>
  );
};
