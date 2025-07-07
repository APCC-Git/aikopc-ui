import TerminalWindow from '@/components/AIKOPC-UI/TerminalWindow';

export default function About() {
  return (
    <div className={'w-screen min-h-screen font-hack-gen mx-auto px-4 py-8 md:px-8 lg:px-16'}>
      <TerminalWindow title={'about.sh'} activeOnFocus>
        <div className={'w-full flex flex-col justify-between'}>
          <div className={'w-full min-h-96'}></div>
          <div
            className={'w-full p-2 h-12 flex items-center border border-terminal-gray rounded-lg'}
          >
            <div className={'text-terminal-gray text-xl'}>{'>'}</div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  );
}
