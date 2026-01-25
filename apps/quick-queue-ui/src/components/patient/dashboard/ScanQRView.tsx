import { useState, useEffect } from 'react';
import { InvalidQRModal } from './modals/InvalidQRModal';

export const ScanQRView = () => {
  const [showInvalidModal, setShowInvalidModal] = useState(false);

  // Simulate scan failure after 5 seconds for demo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInvalidModal(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 w-full h-full">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <div className="relative w-full aspect-square md:aspect-video max-h-[500px] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            alt="Live Viewfinder"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_ko-trYJdyGD5QutqYrceI5X0Hx_on21dQEKKLTvZ6BNplYPmmHG94QAsgNO3GHBeVtPMqWhtkaS80VS4jdedR_r6a3T4HqUjPYrFElII8MsBY_CIfiHJxHqQnREDo42f-8SrVsSCU7tA5OJJdfbMMm1D1g6shDIEn0NLl4jQhJ_8BbykWg1JIIW1rq24m2tZBLWmsRTgqVG1Wn9SUGZ9KBOK-yZb9Hhpr_2iaApkVt5SqJ1UyZEhAV8qYtdftbd1OVw2iMofVo"
          />
          <div className="absolute inset-0 qr-scanner-overlay pointer-events-none"></div>
          <div className="absolute top-[15%] left-[15%] scanner-corner border-t-4 border-l-4 rounded-tl-lg"></div>
          <div className="absolute top-[15%] right-[15%] scanner-corner border-t-4 border-r-4 rounded-tr-lg"></div>
          <div className="absolute bottom-[85%] left-[15%] scanner-corner"></div>
          <div className="absolute bottom-[15%] left-[15%] scanner-corner border-b-4 border-l-4 rounded-bl-lg"></div>
          <div className="absolute bottom-[15%] right-[15%] scanner-corner border-b-4 border-r-4 rounded-br-lg"></div>
          <div className="scan-line"></div>
          <div className="absolute inset-x-0 bottom-10 flex justify-center">
            <div className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Waiting for QR code...
            </div>
          </div>
        </div>
        <div className="mt-10 text-center space-y-6 max-w-md">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Ready to check in?
            </h2>
            <p className="text-slate-600 font-medium">
              Position the clinic's QR code within the frame to join the queue
              instantly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-12 px-8 bg-primary text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">flash_on</span>
              Enable Flash
            </button>
            <button className="w-full sm:w-auto h-12 px-8 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">upload</span>
              Upload from Gallery
            </button>
          </div>
          <p className="text-xs text-slate-400 italic">
            By scanning, you agree to our Terms of Service for digital check-in.
          </p>
        </div>
      </div>
      <footer className="p-6 text-center text-xs text-slate-400 shrink-0 mt-auto">
        © 2024 QuickQueue Medical Solutions • Secure HIPAA Compliant Check-in
      </footer>

      <InvalidQRModal
        isOpen={showInvalidModal}
        onClose={() => setShowInvalidModal(false)}
        onRetry={() => {
          setShowInvalidModal(false);
          // In a real app, restart scanning here
        }}
      />
    </div>
  );
};

