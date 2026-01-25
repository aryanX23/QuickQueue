export const QRPortalView = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="flex flex-wrap justify-between items-end gap-6 pb-6 border-b border-teal-100">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Patient Check-in Portal
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            Manage your clinic's digital entry point.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-100/80 text-emerald-800 shadow-sm border border-emerald-200/50">
            <span className="relative flex h-2.5 w-2.5 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Portal Active
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-4">
          <div className="bg-gradient-to-br from-slate-50 to-teal-50/50 rounded-2xl p-8 lg:p-12 border border-slate-200 flex justify-center shadow-inner">
            <div
              className="bg-white text-slate-900 w-full max-w-[400px] aspect-[1/1.4] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden relative print:shadow-none print:w-full print:aspect-auto print:h-screen ring-1 ring-slate-900/5 transition-transform hover:scale-[1.01] duration-500"
              id="printable-area"
            >
              <div className="h-5 bg-primary w-full"></div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center gap-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100">
                <div className="flex flex-col items-center gap-4">
                  <div className="size-24 rounded-2xl bg-gradient-to-tr from-teal-50 to-white flex items-center justify-center text-primary shadow-sm border border-teal-100/50 transform rotate-3">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '48px' }}
                    >
                      local_hospital
                    </span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-800 leading-tight tracking-tight">
                      Dr. Carter's Clinic
                    </h2>
                    <p className="text-slate-500 font-medium mt-1 text-lg">
                      General Practice & Pediatrics
                    </p>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <img
                    alt="QR Code for clinic check-in"
                    className="size-56 md:size-60 object-contain rendering-pixelated"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzYeGL4HHJVfDeLkgHCoV7nJG3ki07BOzlTpg0yFCqFpvhu91Ry1VAvBo0PsGUv3vkS7aSofE1rFDlwJfDmpOP5nf3L6WNZO0XOq6lBfZkbMcstkBtABBm6XAXFwV-tPdV3-_dT4UpbJohKmIsGDPYCgwlSYv_7JOZs-w-VjZjs-keI4KN3VCd0oW-KkshtMo-SZiO2FykG1O24lAJUeiYw2YlIpHHqREUUjAxQczcjJ5J-SzeI0d-QaVPn5YDLCuLt-CyLtZKf94"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xl font-bold text-slate-800">
                    Scan to join the queue
                  </p>
                  <div className="bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm inline-block mx-auto">
                    <p className="text-primary font-mono text-lg font-bold tracking-wide">
                      quickqueue.app/c/8832
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100 flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                <span className="material-symbols-outlined text-lg">
                  verified_user
                </span>
                <span>Secure QuickQueue Portal</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="text-sm text-slate-400 italic">
              Preview of printed signage
            </p>
          </div>
        </div>
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  qr_code_scanner
                </span>
                QR Code Actions
              </h3>
              <p className="text-sm text-slate-500">
                Generate assets for your physical location.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              <button
                className="group flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 active:scale-[0.98] active:shadow-sm"
                onClick={() => window.print()}
              >
                <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform">
                  print
                </span>
                Print Signage
              </button>
              <button className="group flex items-center justify-center gap-3 w-full bg-white border-2 border-slate-100 hover:border-primary/30 hover:bg-teal-50/30 text-slate-700 font-bold py-4 px-6 rounded-xl transition-all active:scale-[0.98]">
                <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">
                  download
                </span>
                Download PNG
              </button>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100">
            <label className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    link
                  </span>
                  <span className="text-slate-900 text-base font-bold">
                    Direct Clinic URL
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-teal-700 px-2 py-1 bg-teal-50 rounded border border-teal-100">
                  Permanent
                </span>
              </div>
              <div className="relative flex items-center group">
                <input
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3.5 pl-4 pr-12 text-slate-600 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 group-hover:border-primary/30 transition-colors"
                  readOnly
                  type="text"
                  value="https://quickqueue.app/c/8832"
                />
                <button
                  className="absolute right-2 p-1.5 rounded-md hover:bg-slate-200 text-slate-400 hover:text-primary transition-colors"
                  title="Copy to clipboard"
                >
                  <span className="material-symbols-outlined text-xl">
                    content_copy
                  </span>
                </button>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                Share via SMS or Email. Patients can click to join the queue
                without scanning.
              </p>
            </label>
          </div>
          <div className="rounded-xl p-5 bg-orange-50/80 border border-orange-100 flex gap-4 items-start">
            <span className="material-symbols-outlined text-orange-500 shrink-0 mt-0.5">
              warning
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-orange-900">
                Security Zone
              </p>
              <p className="text-xs text-orange-800/80 leading-relaxed">
                Suspect unauthorized access? You can invalidate the current code.
                Previous signage will stop working immediately.
              </p>
              <button className="text-left text-xs font-bold text-orange-700 hover:underline inline-flex items-center gap-1 mt-1">
                Re-generate Code
                <span className="material-symbols-outlined text-[14px]">
                  refresh
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

