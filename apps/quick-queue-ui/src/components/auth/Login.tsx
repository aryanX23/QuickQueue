import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="bg-background-light min-h-screen flex flex-col font-display">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-10 py-3 bg-white">
        <div className="flex items-center gap-4 text-slate-900">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-slate-900">
            <span className="material-symbols-outlined text-xl">
              medical_services
            </span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            QuickQueue
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600 hidden sm:block">
            Don't have an account?
          </span>
          <Link
            to="/doctor/signup"
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/10 text-slate-900 text-sm font-bold leading-normal border border-primary/20 hover:bg-primary/20 transition-colors"
          >
            <span>Sign Up</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="max-w-[450px] w-full bg-white shadow-xl rounded-xl overflow-hidden border border-slate-100">
          <div className="h-32 bg-gradient-to-br from-primary/30 to-sage/20 flex items-center justify-center relative overflow-hidden">
            <div className="absolute -right-8 -top-8 size-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-8 -bottom-8 size-32 bg-sage/20 rounded-full blur-3xl"></div>
            <div className="z-10 bg-white p-4 rounded-full shadow-lg">
              <span className="material-symbols-outlined text-4xl text-sage">
                stethoscope
              </span>
            </div>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">
                Doctor Login
              </h1>
              <p className="text-sage font-medium mt-1">
                Welcome back, doctor. Please enter your details.
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
                <span className="bg-white px-4 text-slate-500 font-medium uppercase tracking-wider text-xs">
                  or continue with email
                </span>
              </div>
            </div>
            <form className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Work Email
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    mail
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
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
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                    lock
                  </span>
                  <input
                    className="w-full h-12 rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-11 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-xl">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <input
                    className="size-4 rounded border-slate-300 text-primary focus:ring-primary"
                    id="remember"
                    type="checkbox"
                  />
                  <label
                    className="text-sm text-slate-600 cursor-pointer"
                    htmlFor="remember"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  className="text-sm font-medium text-sage hover:underline"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                className="w-full h-14 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
                type="submit"
              >
                <span>Access Dashboard</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-sm text-slate-500">
              Trusted by clinics in over 15 countries. Secure & HIPAA compliant.
            </p>
          </div>
        </div>
      </main>
      <footer className="py-8 px-10 text-center text-slate-400 text-xs uppercase tracking-widest font-bold">
        © 2024 QuickQueue Medical Solutions
      </footer>
    </div>
  );
};
