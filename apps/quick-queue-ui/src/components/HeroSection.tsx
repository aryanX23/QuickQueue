export const HeroSection = () => {
  return (
    <section className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 sm:px-10">
        <div className="@container">
          <div className="flex flex-col gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
            <div className="w-full @[864px]:w-1/2 flex flex-col gap-6 @[480px]:gap-8 justify-center order-2 @[864px]:order-1">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-text-main dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl">
                  Healthcare, <br />
                  <span className="text-primary">Without the Wait.</span>
                </h1>
                <h2 className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed @[480px]:text-lg max-w-xl">
                  The real-time clinic management system connecting doctors and
                  patients seamlessly. Join the queue from home and arrive just in
                  time.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-main text-base font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                  <span className="truncate">Manage Practice</span>
                </button>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-text-main dark:text-white text-base font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                  <span className="truncate">Book Appointment</span>
                </button>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100')",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100')",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100')",
                    }}
                  />
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Trusted by 10k+ patients
                </span>
              </div>
            </div>
            <div className="w-full @[864px]:w-1/2 order-1 @[864px]:order-2">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-slate-800 relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800')",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                    <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main dark:text-white">
                      Next Available: 10:15 AM
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Dr. Sarah Jensen • General Practice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

