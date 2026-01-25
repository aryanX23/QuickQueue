export const ClinicClosedScreen = ({ onHome }: { onHome: () => void }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden flex flex-col animate-fade-in-up">
        <div className="h-2 w-full bg-amber-500"></div>
        <div className="p-8 sm:p-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-amber-500 opacity-10 animate-pulse"></div>
            <div className="relative flex items-center justify-center size-20 rounded-full bg-amber-50 text-amber-500">
              <span className="material-symbols-outlined text-[40px]">
                schedule
              </span>
            </div>
          </div>
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Clinic is currently closed
            </h1>
            <p className="text-slate-500 max-w-xs mx-auto">
              The queue is not accepting new check-ins at this time.
            </p>
          </div>
          <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-6 mb-8 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                calendar_month
              </span>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                Weekly Hours
              </h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                <span>Mon - Fri</span>
                <span className="font-medium text-slate-900">
                  08:00 AM - 06:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center text-slate-600 border-b border-slate-200 pb-2 last:border-0 last:pb-0">
                <span>Saturday</span>
                <span className="font-medium text-slate-900">
                  09:00 AM - 01:00 PM
                </span>
              </li>
              <li className="flex justify-between items-center text-slate-600 pb-2 last:border-0 last:pb-0">
                <span>Sunday</span>
                <span className="font-medium text-amber-500">Closed</span>
              </li>
            </ul>
          </div>
          <div className="w-full space-y-3">
            <button className="w-full py-3.5 px-4 rounded-lg bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-slate-900 font-bold text-lg shadow-sm flex items-center justify-center gap-2 group">
              <span>View Operating Hours</span>
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onHome}
              className="w-full py-3 px-4 rounded-lg bg-transparent hover:bg-slate-50 text-slate-600 font-medium transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">
                home
              </span>
              <span>Return Home</span>
            </button>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 w-full">
            <div className="flex gap-3 text-left">
              <span className="material-symbols-outlined text-amber-500 text-xl shrink-0 mt-0.5">
                warning
              </span>
              <p className="text-sm text-slate-500 leading-relaxed">
                If this is a medical emergency, please dial 911 immediately or
                visit the nearest emergency room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

