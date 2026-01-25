import { useState, useEffect } from 'react';

export const YourTurnScreen = ({
  onNext,
  onCancel,
}: {
  onNext: () => void;
  onCancel?: () => void;
}) => {
  // Simulate visit completion for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 5000); // Auto-advance after 5 seconds for demo
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden flex flex-col animate-fade-in-up">
        <div className="h-2 w-full bg-primary"></div>
        <div className="p-8 sm:p-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping"></div>
            <div className="relative flex items-center justify-center size-24 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[48px] font-bold">
                notifications_active
              </span>
            </div>
          </div>
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              It's your turn!
            </h1>
          </div>
          <div className="w-full bg-slate-900 text-white border border-transparent rounded-2xl p-6 mb-6 text-center relative overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-8xl -rotate-12">
                confirmation_number
              </span>
            </div>
            <p className="text-sm uppercase tracking-widest font-bold opacity-70 mb-1">
              Your Token
            </p>
            <div className="text-6xl font-black tracking-tighter font-mono">
              A-42
            </div>
          </div>
          <p className="text-lg text-slate-600 text-center font-medium leading-relaxed mb-8">
            Please proceed to the clinic counter or consultation room.
          </p>
          <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 flex items-center gap-4">
            <div className="size-12 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-primary shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-2xl">
                door_front
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Proceed to
              </p>
              <p className="text-lg font-bold text-slate-900 truncate">
                Consultation Room 3
              </p>
            </div>
            <div className="size-10 flex items-center justify-center text-slate-400 bg-white rounded-lg border border-slate-100">
              <span className="material-symbols-outlined text-2xl">map</span>
            </div>
          </div>
          <div className="w-full space-y-3">
            <button
              onClick={onNext}
              className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-slate-900 font-bold text-xl shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-3 group"
            >
              <span>I'm on my way</span>
              <span className="material-symbols-outlined text-2xl group-hover:translate-x-1 transition-transform">
                directions_run
              </span>
            </button>
            <button className="w-full py-3 px-4 rounded-lg bg-transparent hover:bg-slate-50 text-slate-500 hover:text-slate-700 font-medium transition-colors flex items-center justify-center gap-2 text-sm">
              <span className="material-symbols-outlined text-[18px]">
                av_timer
              </span>
              <span>Request 2 more minutes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

