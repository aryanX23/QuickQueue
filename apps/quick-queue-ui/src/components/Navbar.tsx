import { Logo } from './Logo';

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7f3f3] dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="layout-container flex h-full grow flex-col max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between whitespace-nowrap py-4">
          <div className="flex items-center gap-3 text-text-main dark:text-white">
            <div className="size-8 text-primary">
              <Logo />
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] font-display">
              QuickQueue
            </h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                About
              </a>
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Contact
              </a>
              <a
                className="text-sm font-medium leading-normal hover:text-primary transition-colors"
                href="#"
              >
                Support
              </a>
            </div>
            <div className="flex gap-2">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-text-main text-sm font-bold leading-normal tracking-[0.015em] transition-transform hover:scale-105">
                <span className="truncate">Doctor Login</span>
              </button>
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-transparent border border-gray-300 dark:border-gray-600 text-text-main dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span className="truncate">Patient Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

