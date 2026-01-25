import { Link } from 'react-router-dom';

export const Signup = () => {
  return (
    <div className="flex min-h-screen font-display bg-white">
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto">
        <header className="flex items-center justify-between p-6 sm:p-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-slate-900">
              <span className="material-symbols-outlined text-xl">
                medical_services
              </span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              QuickQueue
            </span>
          </Link>
          <Link
            className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            to="/"
          >
            Back to home
          </Link>
        </header>
        <main className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-8">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                Create your account
              </h1>
              <p className="text-slate-500">
                Join 2,000+ practitioners managing their clinics efficiently.
              </p>
            </div>
            <button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-lg h-12 px-6 text-slate-700 font-medium hover:bg-slate-50 transition-all shadow-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
              <span>Sign up with Google</span>
            </button>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-500 font-medium">
                  or register with email
                </span>
              </div>
            </div>
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="Dr. Sarah Jenkins"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700">
                    Clinic Name
                  </label>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 px-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="Wellness Center"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Clinic Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    location_on
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="123 Medical Blvd, Suite 400"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Work Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    mail
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="sarah@clinic.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    lock
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-10 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      visibility
                    </span>
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Must be at least 8 characters
                </p>
              </div>
              <button
                className="w-full h-12 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
                type="submit"
              >
                <span>Create Account</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
              <p className="text-center text-sm text-slate-600 mt-4">
                Already have an account?{' '}
                <a
                  className="text-sage font-semibold hover:underline"
                  href="#"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </main>
        <footer className="p-6 text-center text-xs text-slate-400">
          © 2024 QuickQueue Medical Solutions
        </footer>
      </div>
      <div className="hidden lg:flex w-1/2 bg-forest relative overflow-hidden flex-col justify-between p-16">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-sage/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Operational
          </div>
        </div>
        <div className="relative z-10 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Streamline your patient flow with{' '}
            <span className="text-primary">intelligent queues</span>.
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join thousands of healthcare providers who have transformed their
            clinic operations. Reduce waiting times, optimize staff schedules,
            and deliver better patient care.
          </p>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-full bg-sage/30 flex items-center justify-center text-white border border-white/10 shrink-0 text-xl font-bold">
                SJ
              </div>
              <div>
                <div className="flex text-primary mb-1">
                  <span className="material-symbols-outlined text-[18px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[18px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[18px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[18px] fill-current">
                    star
                  </span>
                  <span className="material-symbols-outlined text-[18px] fill-current">
                    star
                  </span>
                </div>
                <p className="text-slate-200 italic mb-3">
                  "QuickQueue has completely revolutionized how we handle
                  appointments. Our no-show rate dropped by 40% in the first
                  month alone."
                </p>
                <div className="flex flex-col">
                  <span className="font-bold text-white">Dr. Sarah Jensen</span>
                  <span className="text-sm text-slate-400">
                    Chief Medical Officer, Jensen Family Practice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex gap-4 text-white/40 text-sm font-medium">
          <span>HIPAA Compliant</span>
          <span>•</span>
          <span>256-bit Encryption</span>
          <span>•</span>
          <span>24/7 Support</span>
        </div>
      </div>
    </div>
  );
};
