import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const InLineScreen = ({
  onNext,
  onCancel,
}: {
  onNext: () => void;
  onCancel?: () => void;
}) => {
  const navigate = useNavigate();

  // Simulate queue movement for demo purposes
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
            <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping"></div>
            <div className="relative flex items-center justify-center size-20 rounded-full bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-[40px] font-bold">
                check_circle
              </span>
            </div>
          </div>
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              You're in line!
            </h1>
            <p className="text-slate-500">
              You have successfully joined the queue.
            </p>
          </div>
          <div className="w-full bg-teal-50 border border-teal-100 rounded-xl p-6 mb-8 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-6xl text-primary -rotate-12">
                confirmation_number
              </span>
            </div>
            <p className="text-sm uppercase tracking-wider font-semibold text-slate-500 mb-1">
              Your Token Number
            </p>
            <div className="text-5xl font-extrabold text-slate-900 tracking-tight font-mono">
              A-42
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="material-symbols-outlined text-slate-400 mb-2">
                groups
              </span>
              <p className="text-2xl font-bold text-slate-900">4</p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                People Ahead
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="material-symbols-outlined text-slate-400 mb-2">
                timer
              </span>
              <p className="text-2xl font-bold text-slate-900">~20 min</p>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                Est. Wait
              </p>
            </div>
          </div>
          <div className="w-full space-y-3">
            <button
              onClick={onNext}
              className="w-full py-3.5 px-4 rounded-lg bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-slate-900 font-bold text-lg shadow-sm flex items-center justify-center gap-2 group"
            >
              <span>View Live Status</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onCancel}
              className="w-full py-3 px-4 rounded-lg bg-transparent hover:bg-slate-50 text-slate-600 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
              <span>Leave Queue</span>
            </button>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 w-full">
            <div className="flex gap-3 text-left">
              <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">
                info
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                We'll notify you via SMS when it's almost your turn. Feel free to
                wait comfortably elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

