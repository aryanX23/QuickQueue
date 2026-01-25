import { useState, useRef, useEffect } from 'react';

export const VerifyIdentityModal = ({
  isOpen,
  onClose,
  onVerify,
  email,
}: {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;
  email: string;
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple chars
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).split('');
    const newOtp = [...otp];
    pastedData.forEach((char, index) => {
      if (index < 6) newOtp[index] = char;
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-[480px] rounded-2xl shadow-2xl p-8 transform transition-all scale-100 animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-sage">
            <span className="material-symbols-outlined text-[32px]">
              lock_reset
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Verify Your Identity
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-[85%] mx-auto leading-relaxed">
            Please enter the 6-digit security code sent to your email{' '}
            <span className="font-semibold text-slate-800">{email}</span>.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="w-12 h-14 sm:w-14 sm:h-16 border-2 border-slate-200 rounded-xl text-center text-2xl font-bold text-slate-900 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder-slate-300"
              maxLength={1}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <div className="space-y-4">
          <button
            onClick={onVerify}
            className="w-full py-3.5 bg-primary text-slate-900 font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            Verify & Update
          </button>
          <div className="flex items-center justify-center gap-1.5 text-sm">
            <span className="text-slate-500">Didn't receive code?</span>
            <button className="font-semibold text-sage hover:text-forest transition-colors underline-offset-2 hover:underline">
              Resend Code
            </button>
            <span className="text-slate-400 tabular-nums ml-1">00:45</span>
          </div>
        </div>
      </div>
    </div>
  );
};

