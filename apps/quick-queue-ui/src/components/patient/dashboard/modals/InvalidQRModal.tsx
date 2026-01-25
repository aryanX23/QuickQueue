export const InvalidQRModal = ({
  isOpen,
  onClose,
  onRetry,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 text-center animate-fade-in-up">
        <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50/50">
          <span className="material-symbols-outlined text-4xl text-red-500">
            warning
          </span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Invalid QR Code
        </h2>
        <p className="text-lg font-medium text-slate-600 mb-2">
          We couldn't recognize this clinic's code.
        </p>
        <p className="text-sm text-slate-500 mb-8 leading-relaxed px-4">
          Please ensure you are scanning a valid QuickQueue QR code at the
          clinic location.
        </p>
        <div className="space-y-3">
          <button
            onClick={onRetry}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]"
          >
            <span className="material-symbols-outlined group-hover:-rotate-180 transition-transform duration-500">
              refresh
            </span>
            Try Again
          </button>
          <button
            onClick={onClose}
            className="w-full h-12 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group"
          >
            <span className="material-symbols-outlined group-hover:text-primary transition-colors">
              search
            </span>
            Find Clinic Manually
          </button>
        </div>
      </div>
    </div>
  );
};

