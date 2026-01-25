import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section className="flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 sm:px-10">
        <div className="@container">
          <div className="flex flex-col gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
            <div className="w-full @[864px]:w-1/2 flex flex-col gap-6 @[480px]:gap-8 justify-center order-2 @[864px]:order-1">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-text-main dark:text-black text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[864px]:text-6xl">
                  Healthcare, <br />
                  <span className="text-primary">Without the Wait.</span>
                </h1>
                <h2 className="text-gray-600 dark:text-gray-500 text-base font-normal leading-relaxed @[480px]:text-lg max-w-xl">
                  The real-time clinic management system connecting doctors and patients seamlessly.
                  Join the queue from home and arrive just in time.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/doctor/signup" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-text-main text-base font-bold transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                  <span className="truncate">Manage Practice</span>
                </Link>
                <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white border border-gray-200 text-text-main text-base font-bold hover:bg-gray-50 transition-colors">
                  <span className="truncate">Book Appointment</span>
                </button>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <span className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    data-alt="Portrait of a smiling woman"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbgDnyvkR-33uHAKJtCUU5aPy0tqVaOWZXnFYjbyvBXtr3nO6cJ2uGH2NRM9Jn3C6o5DQFmih2f7si49kEB4M3c63s7kHQJGncbw0xRIA66scyQy8mGbTIbzt0BC3PLSKJwXsNU31QgQMGhLyaxAQxXPFcEwtnxbLSD2G8Pjb0TaM9eQcANbLxS7oskFkyrmj4KCVgCDsrQdTRyX_TMTMZOl_xhyhChdPRQqD_4kKU_qlK2ph5YQWg27Gx-MVJxWWkZ7xbGuTK2_8')",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    data-alt="Portrait of a smiling man"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCDcKlErjNE-pkQ61zlScImAsySpQNKgRVPS0x50HIOs3gjgu9_oPvqW9GSE8b3__EJIDYGASL2biOyfp9eCMMd-E5bcbn91j-rw0ON86wFpEnfm1E9V64ydr30AbQzPXSSImoqPCa38c9F2lQpwHmHhRbsowretBhTyhChrUSi4aoFACuywOh6QyzuYV_65HMpTi8OVvNnBSHJWLuGL-kAGsfhy2a6mNGx9T_ejFutaz5S20avQ05FUFhlnNpdadf8s0kX7OviCvI')",
                    }}
                  />
                  <div
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white dark:border-background-dark bg-cover bg-center"
                    data-alt="Portrait of a serious man"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBz49V00kbMTl9XwyoRoZ76ZIyW0smj2Chaic6-DQhYusRlO5MFHNN3ysM_U10A159pDUHqTQemEsnq8J-sEIEzUNvXxTDiCnU9lH9ADgiE8k9M9NW3wDu568JGCfSsSfz8aKwvLL07OkUqife58tL-hBksk3pP1UCwMGArVDwWjeN_fmczjzrSsdRP0MfBYeNPZK67bARsdBVwodHz7EO48TuXj_ZhXIUujix0xT0JZn_RY7ub3NZr7FOYJ8bz9e9hECBfJXN3qLA')",
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
                  data-alt="Modern clean doctor's office waiting area with soft lighting"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5S81Am3U8vfURA00n_shRXVUxQbGCQcPei3tUWDvFRZqS7FnIuHI1RhYLwivtVFnu7XgAkxH8AED-CmP9R9yhFXhFPpp8pBJPDiQwkRC-PaFtuHs6QGBwurFrBqACdGTZAXShffHV0AEetDXkktloi9cIe9F6FV98uNqK9oFMZIB98F1h3gs4hiO292O7HjHiofV8LUBWJGJSTpTSfLYczF161MI1b2sJXoiNFoH-CfPh1pFGivyfri7J9jwaQf7auKP6yAA9OXc')",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                  <div className="bg-green-100 bg-green-200 p-2 rounded-full">
                    <span className="material-symbols-outlined text-green-600 text-green-400">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-main text-black">
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
