export const FindClinicView = () => {
  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white border-none rounded-2xl shadow-xl shadow-slate-200/50 focus:ring-2 focus:ring-primary text-slate-700 transition-all outline-none"
                placeholder="Search by clinic name, doctor, or specialty..."
                type="text"
              />
            </div>
            <button className="size-14 bg-white flex items-center justify-center rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            Nearby Clinics
            <span className="bg-primary/20 text-sage text-xs px-2 py-1 rounded-full">
              12 Available
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <select className="bg-transparent border-none text-sm font-semibold text-slate-700 focus:ring-0 cursor-pointer outline-none">
              <option>Closest Distance</option>
              <option>Wait Time</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20 lg:pb-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-teal-50 rounded-2xl">
                <span className="material-symbols-outlined text-sage text-3xl">
                  medical_services
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end text-sm font-medium text-emerald-600">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>~15 min wait</span>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">
                  Estimated Time
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sage transition-colors">
                City Health Care
              </h3>
              <p className="text-slate-600 font-medium mb-3">
                Dr. Robert Chen, General Practitioner
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <span>124 Medical Dr, Upper East Side</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Join Queue</span>
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-teal-50 rounded-2xl">
                <span className="material-symbols-outlined text-sage text-3xl">
                  child_care
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end text-sm font-medium text-amber-500">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>~45 min wait</span>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">
                  Busy hour
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sage transition-colors">
                Kids First Pediatrics
              </h3>
              <p className="text-slate-600 font-medium mb-3">
                Dr. Sarah Miller, Pediatrician
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <span>89 Lexington Ave, Midtown</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Join Queue</span>
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-teal-50 rounded-2xl">
                <span className="material-symbols-outlined text-sage text-3xl">
                  vaccines
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end text-sm font-medium text-emerald-600">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>~5 min wait</span>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">
                  Available Now
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sage transition-colors">
                Downtown Wellness
              </h3>
              <p className="text-slate-600 font-medium mb-3">
                Dr. Alex Rivera, Family Medicine
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <span>45 Wall St, Financial District</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Join Queue</span>
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-teal-50 rounded-2xl">
                <span className="material-symbols-outlined text-sage text-3xl">
                  eye_tracking
                </span>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 justify-end text-sm font-medium text-amber-500">
                  <span className="material-symbols-outlined text-sm">
                    schedule
                  </span>
                  <span>~30 min wait</span>
                </div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">
                  Moderate Queue
                </p>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sage transition-colors">
                Vision Care Center
              </h3>
              <p className="text-slate-600 font-medium mb-3">
                Dr. Emily Watson, Optometrist
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                <span>210 Broadway, Lower Manhattan</span>
              </div>
            </div>
            <button className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Join Queue</span>
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </div>
        </div>
      </div>
      <footer className="mt-auto p-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2024 QuickQueue Medical Solutions. All clinic wait times are estimates
        and subject to change.
      </footer>
    </div>
  );
};

