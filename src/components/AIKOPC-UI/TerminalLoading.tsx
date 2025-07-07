'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import TerminalWindow from '@/components/AIKOPC-UI/TerminalWindow';

export default function TerminalLoading({ onComplete }: { onComplete?: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalWindowHeight, setTerminalWindowHeight] = useState(24);
  const [terminalWindowWidth, setTerminalWindowWidth] = useState(80);
  const terminalRef = useRef<HTMLDivElement>(null);
  const terminalWindowRef = useRef<HTMLDivElement>(null);

  // プロセスのログ
  // パフォーマンス向上の為useMemoを使ってキャッシュする
  const consoleLines = useMemo(() => [
    { text: '$ sudo pm2 start aikopc', delay: 100 },
    { text: '[INFO] システムを初期化中...', delay: 30 },
    { text: '[INFO] 依存関係を確認中...', delay: 30 },
    { text: '  ✓ Next.js v15.2.0', delay: 10 },
    { text: '  ✓ TailwindCSS v4.0.0', delay: 10 },
    { text: '  ✓ TypeScript v5.0.0', delay: 10 },
    { text: '[INFO] データベース接続を確立中...', delay: 40 },
    { text: '  ✓ 接続成功: localhost:3000', delay: 20 },
    { text: '[INFO] アセットをビルド中...', delay: 60 },
    { text: '  ✓ pages/index.tsx', delay: 10 },
    { text: '  ✓ pages/about.tsx', delay: 10 },
    { text: '  ✓ pages/blog.tsx', delay: 10 },
    { text: '  ✓ pages/dashboard.tsx', delay: 10 },
    { text: '[INFO] スタイルシートをコンパイル中...', delay: 40 },
    { text: '  ✓ globals.css', delay: 10 },
    { text: '  ✓ components.css', delay: 10 },
    { text: '[SUCCESS] すべてのプロセスが完了しました', delay: 30 },
    { text: '[INFO] ウェブサイトを起動中...', delay: 100 },
  ],[])

  // 自動スクロール
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [completedLines, currentChar]);

  // カーソル点滅
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // タイピングアニメーション
  useEffect(() => {
    if (currentLine >= consoleLines.length) return;

    const currentLineText = consoleLines[currentLine].text;
    const charDelay = consoleLines[currentLine].delay;

    if (currentChar < currentLineText.length) {
      const timer = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, charDelay);
      return () => clearTimeout(timer);
    } else {
      // 現在の行が完了したら次の行へ
      const timer = setTimeout(() => {
        setCompletedLines(prev => [...prev, currentLineText]);
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, consoleLines]);

  // ウインドウサイズ変更時にターミナルのサイズを取得
  useEffect(() => {
    const handleResize = () => {
      if (terminalWindowRef.current) {
        const { height, width } = terminalWindowRef.current.getBoundingClientRect();
        setTerminalWindowHeight(height);
        setTerminalWindowWidth(width);
        console.log(height, width);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 完了したら onComplete を呼ぶ
  useEffect(() => {
    // 全てのアニメーションが完了したら onComplete を呼ぶ
    if (currentLine >= consoleLines.length) {
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }
  }, [consoleLines.length, currentLine, onComplete]);

  // Ctrl + C でも onComplete を呼ぶ
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'c') {
        onComplete?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  // 行の色を取得
  const getLineColor = (text: string) => {
    if (text.includes('[ERROR]')) return 'text-terminal-red';
    if (text.includes('[SUCCESS]')) return 'text-terminal-green';
    if (text.includes('[INFO]')) return 'text-terminal-blue';
    if (text.includes('✓')) return 'text-terminal-cyan';
    if (text.includes('$')) return 'text-terminal-yellow';
    if (text.includes('🚀')) return 'text-terminal-magenta';
    return 'text-gray-300';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center font-mono text-sm overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            suppressHydrationWarning
            key={i}
            className="absolute text-green-500 text-xs animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
      <div className="relative w-full max-w-4xl mx-4">

        {/*ウインドウ*/}
        <div ref={terminalWindowRef}>
          <TerminalWindow
            title={`pm2 start aikopc — ${Math.round(terminalWindowWidth)}×${Math.round(terminalWindowHeight)}`}
            padding={'p-0'}
            showCurrentTime
            activeOnFocus
          >
            <div
              ref={terminalRef}
              className="p-6 h-96 overflow-y-auto overflow-x-hidden scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div className="space-y-1">
                {/* 完了した行を表示 */}
                {completedLines.map((line, index) => (
                  <div key={index} className={`${getLineColor(line)} leading-relaxed`}>
                    {line}
                  </div>
                ))}

                {/* 現在タイピング中の行 */}
                {currentLine < consoleLines.length && (
                  <div
                    className={`${getLineColor(consoleLines[currentLine].text)} leading-relaxed flex`}
                  >
                    <span>{consoleLines[currentLine].text.substring(0, currentChar)}</span>
                    {showCursor && (
                      <span className="bg-terminal-green text-terminal-green ml-0.5 animate-pulse">
                        ▊
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* 処理中のテキスト */}
              {currentLine < consoleLines.length - 2 && (
                <div className="absolute bottom-10 right-6 flex items-center space-x-2 text-gray-500 text-xs">
                  <div className="flex space-x-1">
                    {[0, 1, 2].map(i => (
                      <div
                        suppressHydrationWarning
                        key={i}
                        className="w-1 h-1 bg-terminal-green rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                  <span>処理中...</span>
                </div>
              )}
            </div>
          </TerminalWindow>
        </div>

        {/* Info */}
        <div className="mt-4 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-terminal-yellow rounded-full animate-pulse"></div>
              <span className={'text-terminal-yellow'}>CONNECTING...</span>
            </div>
            <div>AIKOPC.NET v1.0.0</div>
            <div suppressHydrationWarning>{new Date().toLocaleTimeString('ja-JP')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
