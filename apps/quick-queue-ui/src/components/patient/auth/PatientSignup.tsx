import { Link } from 'react-router-dom';

export const PatientSignup = () => {
  return (
    <div className="bg-white min-h-screen font-display flex">
      <div className="w-full lg:w-1/2 flex flex-col h-screen overflow-y-auto bg-white z-10">
        <header className="flex items-center justify-between p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-slate-900">
              <span className="material-symbols-outlined text-xl">
                monitor_heart
              </span>
            </div>
            <span className="text-lg font-bold text-slate-900">
              QuickQueue
            </span>
          </div>
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
                Create Patient Account
              </h1>
              <p className="text-slate-500">
                Sign up to book appointments and track wait times.
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
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    person
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="Jane Doe"
                    type="text"
                  />
                </div>
              </div>
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
                    placeholder="jane@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-slate-700">
                    Phone Number{' '}
                    <span className="text-slate-400 font-normal">
                      (optional)
                    </span>
                  </label>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    phone
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400"
                    placeholder="(555) 123-4567"
                    type="tel"
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
                className="w-full h-12 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
                type="submit"
              >
                <span>Create Account</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
              <p className="text-center text-sm text-slate-600 mt-4">
                Already have an account?{' '}
                <Link
                  className="text-sage font-semibold hover:underline"
                  to="/patient/login"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </main>
        <footer className="p-6 text-center text-xs text-slate-400">
          © 2024 QuickQueue Medical Solutions
        </footer>
      </div>
      <div className="hidden lg:flex w-1/2 bg-forest relative overflow-hidden flex-col justify-end p-16">
        <img
          alt="Patient relaxing at home with phone"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb_ko-trYJdyGD5QutqYrceI5X0Hx_on21dQEKKLTvZ6BNplYPmmHG94QAsgNO3GHBeVtPMqWhtkaS80VS4jdedR_r6a3T4HqUjPYrFElII8MsBY_CIfiHJxHqQnREDo42f-8SrVsSCU7tA5OJJdfbMMm1D1g6shDIEn0NLl4jQhJ_8BbykWg1JIIW1rq24m2tZBLWmsRTgqVG1Wn9SUGZ9KBOK-yZb9Hhpr_2iaApkVt5SqJ1UyZEhAV8qYtdftbd1OVw2iMofVo"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/80 to-transparent mix-blend-multiply opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-lg mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
            Your time is valuable.
          </h2>
          <p className="text-xl text-slate-200 mb-8 leading-relaxed font-medium">
            Track your appointment in real-time and arrive just when you're
            needed.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="flex -space-x-3">
              <img
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOuKAxO9MdSkv6nOI38Zt4ZbbJDtbqLId0icEKeukUQUZryzaoPtgKax4y1OjSi4jzSafu6z5QcBvhMJ71B3OiRsKyYJ6tvUmf66uwvFe3y7o1eYtUQ8WlxXgpJzGZihNnmnNBZams_kcBNjm-DYmFnHNXt3ScZ1M1F5deqPOKp1jrYAU8rDWNnTeum8sluWzaeE7F7bqKmuOSIZUvhptQ37Qckq-4oC-QP4xSOYkAJUlHjAEGFp00oXrf5pJEMHTlFD0BiYRRNC4"
              />
              <img
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwkqeEyZfKAbOvmByy5aPBgs5vFDEseRY7FIdoM5CtTY4whOVoOEuaiEBXm_4qlXeSTbsCHxcU55wBNbMjVgE10mfDZqGqakqs7HYM91AI0hFlJvdGZUXXpNWuv13YdyLi9U_Z9cYPEkCdUKPrtTht_XXUkGQUHXn59zpELBuAR9y1QrzIYam7J2jGBNx8qIe4TS7kKWFS_y0Qt36Wt03sPJjTPVF2H9-dn0AZHeBOFCg3bIypvwB6my6Yl2p3Usrtjtd9rhB0HWs"
              />
              <img
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjgGfDFGpVdhrsioJtiehhhERgOEht0ZyK9YQo5igSteqPBtxub25dkCJzn0t4Zs6ORVzcOaPfgu0V_AVLQIxduXkdGWfbfsIF31rF5jtOm13tdhsAcVWz-EpwEEkhb2ThBjFF8E-SQwnJnmRhoamtAhxfk4SyGomhP3frMXnH6aS4Iu5qH3iSuCRVIzKpadL3KKOa3iDMD2o994E0J9mgniD8-cAwUOSPVCMZA6NTNBwEwsUVBRswxKgF_mKKakDPKmHwa8d3Hg"
              />
              <div className="w-10 h-10 rounded-full border-2 border-forest bg-sage text-white flex items-center justify-center text-xs font-bold">
                +2k
              </div>
            </div>
            <div className="text-sm font-medium text-slate-300">
              Join trusted patients today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

