import { Link } from 'react-router-dom';

export const PatientLogin = () => {
  return (
    <div className="bg-white min-h-screen font-display flex">
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto bg-white z-10">
        <header className="flex items-center justify-between p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-teal-700">
              <span className="material-symbols-outlined text-xl text-primary-dark">
                medical_services
              </span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              QuickQueue
            </span>
          </div>
          <a
            className="text-sm font-medium text-slate-500 hover:text-primary-dark transition-colors"
            href="#"
          >
            Help Center
          </a>
        </header>
        <main className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-8">
          <div className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">
                Patient Login
              </h1>
              <p className="text-slate-500">
                Access your appointments and history securely.
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
              <span>Log in with Google</span>
            </button>
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200"></span>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-slate-500 font-medium">
                  or log in with email
                </span>
              </div>
            </div>
            <form className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    mail
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-slate-700">
                    Password
                  </label>
                  <a
                    className="text-xs font-medium text-primary-dark hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
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
              </div>
              <button
                className="w-full h-12 bg-primary-dark text-white font-semibold rounded-lg shadow-lg shadow-primary-dark/20 hover:bg-teal-700 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2"
                type="submit"
              >
                <span>Log in</span>
                <span className="material-symbols-outlined text-[20px]">
                  login
                </span>
              </button>
            </form>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="bg-background-light rounded-xl p-5 text-center">
                <p className="text-sm text-slate-600 mb-3">
                  Need to see a doctor quickly?
                </p>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-dark/20 text-primary-dark font-bold rounded-lg h-12 hover:bg-primary-dark/5 hover:border-primary-dark transition-all"
                  href="#"
                >
                  <span>Join Queue as Guest</span>
                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-slate-600 mt-6">
              Don't have an account?{' '}
              <Link
                className="text-primary-dark font-semibold hover:underline"
                to="/patient/signup"
              >
                Sign up
              </Link>
            </p>
          </div>
        </main>
        <footer className="p-6 text-center text-xs text-slate-400">
          © 2024 QuickQueue Medical Solutions
        </footer>
      </div>
      <div className="hidden lg:flex w-1/2 relative overflow-hidden flex-col justify-end p-16">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern Clinic Lobby"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYE1hw_PFk0j0jt8SAaw24XsA4kLbrkyyReJbDjrnmexVijJdp5lsK7gVIGxOpEXT898hybp3ChDT-liUzjve05CqQS_S5U-BU1rR1KMjvKbaCPwh72avl050MhtLCHMLACKBDMlUQ3-aVzOrofA_d2F6kI9UbqME1Qy1agGHNL6TJrrSa9QHwrSZc5rcDA5PQ3w8Eiowt1OUBmKrgCNYwhxtHxNHuoSkBpYYGCSqeC9VuAGqhGrbj7ztmXOCD8KEJd1FNB-PPzAg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-800/60 to-transparent mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-950/80"></div>
        </div>
        <div className="relative z-10 max-w-lg mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight drop-shadow-sm">
            Join the queue from anywhere.
          </h2>
          <p className="text-lg md:text-xl text-teal-50 font-light leading-relaxed drop-shadow-sm">
            Skip the waiting room, not the care. Experience a seamless path to
            better health.
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-6 text-white/90 text-sm font-medium border-t border-white/20 pt-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal-300">
              lock
            </span>
            <span>Secure & Private</span>
          </div>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-teal-300">
              verified_user
            </span>
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};
