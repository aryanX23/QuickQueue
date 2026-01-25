import { useState } from 'react';
import { DashboardView } from './DashboardView';
import { QRPortalView } from './QRPortalView';
import { SettingsView } from './SettingsView';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'qr' | 'settings'>('dashboard');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/doctor/login');
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col font-display transition-colors duration-200">
      <div className="relative flex h-screen w-full overflow-hidden">
        <aside className="w-72 bg-white border-r border-teal-100 flex-col justify-between hidden lg:flex z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col h-full p-5">
            <div className="flex items-center gap-4 p-3 mb-8 bg-teal-50/50 rounded-xl border border-teal-100/50">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 shadow-sm border-2 border-white ring-2 ring-primary/20"
                data-alt="Doctor profile picture"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJ8n2Z1j7XLwLd8WNIN45s1BjwiK9AkFehTJv4QP-hcmMzfw5aw0n9fDEkMazMATevh7U6zxm1hEAMEWnA0g1TWz6iaVYwOTOLI5Ipe0penGAjruL-8VeoDRdP9FykhBPfdxC8OliNV6tnJlcn-_P9XMFPFFVtsDoH61JBBPPjNpM-IlB86EI1k4Wp2PSjPxLsiApo6CXYC8J3BwSu7lKVx6PYKw1PDDs_OdiWjUR-iWwQR7SX70r3ptaLEstKpGUb106pICPoioI")',
                }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-slate-900 text-base font-bold leading-tight">
                  Dr. Carter
                </h1>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mt-0.5">
                  Gen. Practitioner
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-2 flex-1">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full text-left ${
                  currentView === 'dashboard'
                    ? 'bg-gradient-to-r from-teal-50 to-white text-teal-900 border-l-4 border-primary shadow-sm'
                    : 'hover:bg-teal-50 text-slate-600 hover:text-primary'
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    currentView === 'dashboard'
                      ? 'text-primary fill-current'
                      : 'group-hover:scale-110 transition-transform'
                  }`}
                >
                  dashboard
                </span>
                <span className={`text-sm ${currentView === 'dashboard' ? 'font-bold' : 'font-medium'}`}>
                  Dashboard
                </span>
              </button>
              <button
                onClick={() => setCurrentView('qr')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full text-left ${
                  currentView === 'qr'
                    ? 'bg-gradient-to-r from-teal-50 to-white text-teal-900 border-l-4 border-primary shadow-sm'
                    : 'hover:bg-teal-50 text-slate-600 hover:text-primary'
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    currentView === 'qr'
                      ? 'text-primary fill-current'
                      : 'group-hover:scale-110 transition-transform'
                  }`}
                >
                  qr_code_2
                </span>
                <span className={`text-sm ${currentView === 'qr' ? 'font-bold' : 'font-medium'}`}>
                  QR Portal
                </span>
              </button>
              <button
                onClick={() => setCurrentView('settings')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all w-full text-left ${
                  currentView === 'settings'
                    ? 'bg-gradient-to-r from-teal-50 to-white text-teal-900 border-l-4 border-primary shadow-sm'
                    : 'hover:bg-teal-50 text-slate-600 hover:text-primary'
                }`}
              >
                <span
                  className={`material-symbols-outlined ${
                    currentView === 'settings'
                      ? 'text-primary fill-current'
                      : 'group-hover:scale-110 transition-transform'
                  }`}
                >
                  settings
                </span>
                <span className={`text-sm ${currentView === 'settings' ? 'font-bold' : 'font-medium'}`}>
                  Settings
                </span>
              </button>
            </nav>
            <div className="mt-auto pt-6 border-t border-teal-100">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-slate-500 hover:text-red-600 transition-colors"
              >
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-medium">Log Out</span>
              </button>
            </div>
          </div>
        </aside>
        
        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-teal-100 z-50 px-6 py-2 shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.1)]">
            <div className="flex justify-around items-center">
                <button 
                    onClick={() => setCurrentView('dashboard')}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${currentView === 'dashboard' ? 'text-primary' : 'text-slate-400'}`}
                >
                    <span className={`material-symbols-outlined ${currentView === 'dashboard' ? 'fill-current' : ''}`}>dashboard</span>
                    <span className="text-[10px] font-bold">Dashboard</span>
                </button>
                <button 
                    onClick={() => setCurrentView('qr')}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${currentView === 'qr' ? 'text-primary' : 'text-slate-400'}`}
                >
                    <span className={`material-symbols-outlined ${currentView === 'qr' ? 'fill-current' : ''}`}>qr_code_2</span>
                    <span className="text-[10px] font-bold">QR Portal</span>
                </button>
                <button 
                    onClick={() => setCurrentView('settings')}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${currentView === 'settings' ? 'text-primary' : 'text-slate-400'}`}
                >
                    <span className={`material-symbols-outlined ${currentView === 'settings' ? 'fill-current' : ''}`}>settings</span>
                    <span className="text-[10px] font-bold">Settings</span>
                </button>
                <button 
                    onClick={handleLogout}
                    className="flex flex-col items-center gap-1 p-2 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                >
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-sm font-medium sr-only">Log Out</span>
                </button>
            </div>
        </div>

        <div className="flex-1 flex flex-col h-full overflow-hidden relative bg-background-light pb-20 lg:pb-0">
          <header className="h-16 lg:h-20 flex items-center justify-between px-4 lg:px-8 border-b border-teal-100/60 bg-white/60 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="size-9 text-primary bg-teal-100/50 rounded-lg p-1.5 flex items-center justify-center hidden md:flex">
                {currentView === 'dashboard' && <span className="material-symbols-outlined">dashboard</span>}
                {currentView === 'qr' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                )}
                {currentView === 'settings' && (
                  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                )}
              </div>
              <h2 className="text-xl font-black tracking-tight text-teal-950 hidden sm:block">
                {currentView === 'dashboard' && 'Dashboard'}
                {currentView === 'qr' && 'QuickQueue'}
                {currentView === 'settings' && 'QuickQueue'}
              </h2>
            </div>
            {currentView === 'dashboard' && (
              <div className="flex items-center justify-center flex-1 mx-4">
                <div className="bg-slate-100 p-1.5 rounded-full flex items-center border border-slate-200 shadow-inner max-w-sm w-full relative">
                  <button className="flex-1 bg-white text-emerald-700 py-2 rounded-full shadow-sm font-bold text-sm transition-all flex items-center justify-center gap-2 border border-slate-100">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    CLINIC OPEN
                  </button>
                  <button className="flex-1 text-slate-400 py-2 rounded-full font-medium text-sm hover:text-slate-600 transition-colors flex items-center justify-center">
                    CLOSED
                  </button>
                </div>
              </div>
            )}
            <div className="flex items-center gap-4 ml-auto">
              <button className="size-10 flex items-center justify-center rounded-full hover:bg-teal-50 text-slate-500 hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
              <div
                className="hidden md:flex bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white shadow-md"
                data-alt="User avatar small"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMIc37IsZMjToEEWwupWe8vLhpJbz6xPN7nNIMEnb7vsAyRiDPgNtVvq_7e1uZvcHruO76U6u-QFld8tyvDJ4hgMACOajEVCDCECT7WhSJUZXtz-yqLfwCxgXrjGMDw_QCk6i4KT3-HtA0xLXCEdOiPD_Nee7x8Og0Y9ufqaZ35K4nWVnE2atGxxpq7OtyJTt1Vr18UbNCXimJdJPW-MUdEHDTnGhfM_I94srtilAnVbxFRhUvHMeDSTAZLlvhtl4RKqnh9iKpZpc")',
                }}
              ></div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-6 lg:p-10">
            {currentView === 'dashboard' && <DashboardView />}
            {currentView === 'qr' && <QRPortalView />}
            {currentView === 'settings' && <SettingsView />}
          </main>
        </div>
      </div>
    </div>
  );
};