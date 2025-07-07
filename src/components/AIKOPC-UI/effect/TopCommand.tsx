'use client';

import React, { useState, useEffect } from 'react';

const TopCommand = () => {
  const [processes, setProcesses] = useState([
    { pid: 1, user: 'root', cpu: 12.5, mem: 2.5, command: 'systemd' },
    { pid: 2, user: 'user', cpu: 8.2, mem: 1.8, command: 'gnome-shell' },
    { pid: 3, user: 'user', cpu: 5.1, mem: 3.2, command: 'chrome' },
    { pid: 4, user: 'root', cpu: 2.3, mem: 0.9, command: 'docker' },
    { pid: 5, user: 'user', cpu: 1.8, mem: 1.1, command: 'code' },
  ]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setProcesses(
        processes.map(p => ({
          ...p,
          cpu: parseFloat((Math.random() * 15).toFixed(1)),
          mem: parseFloat((Math.random() * 5).toFixed(1)),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [processes]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-mono text-xs text-terminal-white bg-terminal-background p-2 flex-grow">
      <div className="mb-2">
        <div suppressHydrationWarning>
          top - {currentTime.toLocaleTimeString('ja-JP')} up 2 days, 4:15, 1 user, load average:
          0.68, 0.82, 0.75
        </div>
        <div>%Cpu(s): 8.2 us, 3.5 sy, 0.0 ni, 88.1 id, 0.2 wa, 0.0 hi, 0.0 si, 0.0 st</div>
      </div>
      <div className="grid grid-cols-12  gap-2 text-terminal-green">
        <div className="hidden lg:block col-span-2">PID</div>
        <div className="col-span-2">USER</div>
        <div className="col-span-2">%CPU</div>
        <div className="col-span-2">%MEM</div>
        <div className="col-span-4">COMMAND</div>
      </div>
      <div>
        {processes.map(p => (
          <div key={p.pid} className="grid grid-cols-12">
            <div className="hidden lg:block col-span-2">{p.pid}</div>
            <div className="col-span-2">{p.user}</div>
            <div className="col-span-2 text-terminal-yellow">{p.cpu.toFixed(1)}</div>
            <div className="col-span-2 text-terminal-cyan">{p.mem.toFixed(1)}</div>
            <div className="col-span-4">{p.command}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCommand;
