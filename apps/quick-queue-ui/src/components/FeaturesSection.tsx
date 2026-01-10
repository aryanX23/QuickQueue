export const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 sm:px-10">
      <div className="layout-container flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1">
          <div className="flex flex-col gap-10 @container">
            <div className="flex flex-col gap-4 text-center items-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-dark">
                <span className="flex h-2 w-2 rounded-full bg-primary"></span>
                Features
              </div>
              <h2 className="text-text-main dark:text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
                Streamlined Healthcare Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-normal leading-normal max-w-[720px]">
                Designed for efficiency, security, and peace of mind. We take care
                of the logistics so you can focus on health.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="flex flex-1 gap-4 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col items-start transition-all hover:shadow-lg">
                <div className="p-3 rounded-lg bg-primary/10 text-text-main dark:text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    schedule
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    Real-time Tracking
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Track your spot in the queue live from your dashboard. Know
                    exactly when to leave home.
                  </p>
                </div>
              </div>
              {/* Feature 2 */}
              <div className="flex flex-1 gap-4 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col items-start transition-all hover:shadow-lg">
                <div className="p-3 rounded-lg bg-primary/10 text-text-main dark:text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    calendar_month
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    Instant Booking
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Book appointments instantly without administrative hassles or
                    long phone holds.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="flex flex-1 gap-4 rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 flex-col items-start transition-all hover:shadow-lg">
                <div className="p-3 rounded-lg bg-primary/10 text-text-main dark:text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    verified_user
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main dark:text-white text-xl font-bold leading-tight">
                    Secure Records
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                    Fully HIPAA compliant data protection. Your health history is
                    safe and accessible only to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

