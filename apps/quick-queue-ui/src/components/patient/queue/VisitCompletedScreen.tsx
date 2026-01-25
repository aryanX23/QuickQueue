export const VisitCompletedScreen = ({ onHome }: { onHome: () => void }) => {
  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="relative z-10 w-full max-w-[480px] bg-white rounded-2xl shadow-xl border border-teal-100 overflow-hidden flex flex-col animate-fade-in-up">
        <div className="h-2 w-full bg-teal-500"></div>
        <div className="p-8 sm:p-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-teal-500 opacity-10 animate-pulse"></div>
            <div className="relative flex items-center justify-center size-20 rounded-full bg-teal-50 text-teal-600">
              <span className="material-symbols-outlined text-[40px]">
                check_circle
              </span>
            </div>
          </div>
          <div className="text-center space-y-2 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Visit Completed
            </h1>
            <p className="text-slate-500 max-w-sm mx-auto">
              Thank you for choosing Dr. Sarah Bennett's Clinic
            </p>
          </div>
          <div className="w-full bg-slate-50 border border-slate-100 rounded-xl p-6 mb-8 relative overflow-hidden flex justify-between items-center text-center">
            <div className="flex-1 px-2 border-r border-slate-200">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                Token
              </div>
              <div className="text-2xl font-bold text-slate-900">A-42</div>
            </div>
            <div className="flex-1 px-2">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                Total Wait Time
              </div>
              <div className="text-2xl font-bold text-slate-900">
                18{' '}
                <span className="text-sm font-medium text-slate-500 align-middle">
                  mins
                </span>
              </div>
            </div>
          </div>
          <div className="w-full mb-8 text-center space-y-3">
            <h3 className="text-sm font-semibold text-slate-900">
              Rate Your Experience
            </h3>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <span className="material-symbols-outlined text-3xl text-slate-300 hover:text-amber-400 transition-colors">
                    star
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="w-full bg-teal-50 border border-teal-100 rounded-lg p-4 mb-8 flex gap-3 text-left">
            <span className="material-symbols-outlined text-teal-600 text-xl shrink-0 mt-0.5">
              receipt_long
            </span>
            <div>
              <h4 className="text-sm font-bold text-teal-900 mb-1">
                Next Steps
              </h4>
              <p className="text-sm text-teal-700 leading-relaxed">
                Your digital receipt and prescription (if any) have been sent to
                your email.
              </p>
            </div>
          </div>
          <div className="w-full space-y-3">
            <button
              onClick={onHome}
              className="w-full py-3.5 px-4 rounded-lg bg-primary hover:bg-primary/90 active:scale-[0.98] transition-all duration-200 text-slate-900 font-bold text-lg shadow-sm flex items-center justify-center gap-2 group"
            >
              <span>Back to Home</span>
            </button>
            <button className="w-full py-3 px-4 rounded-lg bg-transparent hover:bg-slate-50 text-slate-600 font-medium transition-colors flex items-center justify-center gap-2 group">
              <span className="material-symbols-outlined text-[20px] text-slate-400 group-hover:text-primary transition-colors">
                download
              </span>
              <span>Download Visit Summary</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

