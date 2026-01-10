export const StatsSection = () => {
  return (
    <section className="bg-white dark:bg-slate-900 border-y border-gray-100 dark:border-slate-800">
      <div className="layout-container flex justify-center py-10 px-4 sm:px-10">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-100 dark:border-slate-800 bg-background-light dark:bg-slate-800/50 shadow-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                  timer
                </span>
                <p className="text-text-main dark:text-white text-base font-medium leading-normal">
                  Avg Wait Time
                </p>
              </div>
              <p className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight">
                12 mins
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium leading-normal flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  trending_down
                </span>
                15% vs industry avg
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-100 dark:border-slate-800 bg-background-light dark:bg-slate-800/50 shadow-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                  medical_services
                </span>
                <p className="text-text-main dark:text-white text-base font-medium leading-normal">
                  Trusted Clinics
                </p>
              </div>
              <p className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight">
                500+
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium leading-normal flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                Growing daily
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-100 dark:border-slate-800 bg-background-light dark:bg-slate-800/50 shadow-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-3xl">
                  sentiment_satisfied
                </span>
                <p className="text-text-main dark:text-white text-base font-medium leading-normal">
                  Happy Patients
                </p>
              </div>
              <p className="text-text-main dark:text-white tracking-tight text-3xl font-bold leading-tight">
                10k+
              </p>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium leading-normal flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">star</span>
                4.9/5 Average Rating
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

