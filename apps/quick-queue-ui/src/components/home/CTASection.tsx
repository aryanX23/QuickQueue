export const CTASection = () => {
  return (
    <section className="bg-[#eafafa] border-t border-gray-200 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 -left-20 w-40 h-40 bg-primary/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="layout-container flex justify-center py-20 px-4 sm:px-10 relative z-10">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1 text-center items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="text-text-main dark:text-black tracking-tight text-4xl font-black leading-tight sm:text-5xl">
                Ready to skip the wait?
              </h2>
              <p className="text-gray-600 dark:text-gray-500 text-lg font-normal leading-normal max-w-2xl mx-auto">
                Join thousands of doctors and patients using QuickQueue to make healthcare simpler,
                faster, and friendlier.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-text-main text-lg font-bold shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1">
                <span className="truncate">Get Started for Free</span>
              </button>
              <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-white border border-gray-200 text-text-main text-lg font-bold hover:bg-gray-50 transition-colors">
                <span className="truncate">Contact Sales</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
