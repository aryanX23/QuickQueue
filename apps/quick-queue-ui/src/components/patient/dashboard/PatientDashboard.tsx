import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FindClinicView } from './FindClinicView';
import { ScanQRView } from './ScanQRView';
import { SettingsView } from './SettingsView';

export const PatientDashboard = () => {
  const [currentView, setCurrentView] = useState<'find' | 'scan' | 'settings'>('find');
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate('/patient/login');
  };

  return (
    <div className="bg-background-light min-h-screen font-display flex overflow-hidden transition-colors duration-200">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-white border-r border-slate-200 flex-col h-screen shrink-0 hidden lg:flex z-20 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]">
        <div className="p-6 flex items-center gap-3">
          <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-slate-900">
            <span className="material-symbols-outlined text-xl">
              monitor_heart
            </span>
          </div>
          <span className="text-lg font-bold text-slate-900">
            QuickQueue
          </span>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-2">
          <button
            onClick={() => setCurrentView('find')}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentView === 'find'
                ? 'bg-primary/10 border-l-4 border-primary text-forest font-semibold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-forest font-medium'
            }`}
          >
            <span className="material-symbols-outlined">search</span>
            <span>Find Clinic</span>
          </button>
          <button
            onClick={() => setCurrentView('scan')}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentView === 'scan'
                ? 'bg-primary/10 border-l-4 border-primary text-forest font-semibold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-forest font-medium'
            }`}
          >
            <span className="material-symbols-outlined">qr_code_scanner</span>
            <span>Scan QR</span>
          </button>
          <button
            onClick={() => setCurrentView('settings')}
            className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg transition-all ${
              currentView === 'settings'
                ? 'bg-primary/10 border-l-4 border-primary text-forest font-semibold'
                : 'text-slate-600 hover:bg-slate-50 hover:text-forest font-medium'
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </button>
        </nav>
        <div className="p-6 border-t border-slate-200">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="size-10 rounded-full bg-sage flex items-center justify-center text-white overflow-hidden">
              <img
                alt="User avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOrUuJSkMZ2EEJhRGYysdYhWlM1aoXnDUrMOD717OjtZe9a66R1l2ZOufna1xjyi61MWS16EEUJHjp5IMZXyUxQDalGpJmKuhgxBCeWunVj0B6DMzKRiUV0oV89Wr0Z2Oi9qJyt9E3n0M99zn0QZ6Ovi6MsGnzJOdUICf1iuqkRbvhZnnPoJJkcgsbq1SOnFbeNKA_W5FD7x9t0CQ3xRYckCm3jAGzWr1LDMvoUtYkQj1s2sXAjkCkN5johFLhKQO3krQuw-I9lOc"
              />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-sm font-semibold text-slate-900 truncate">
                Jane Doe
              </p>
              <p className="text-xs text-slate-500 truncate">Patient Account</p>
            </div>
            <button
              onClick={handleLogout}
              className="text-slate-400 hover:text-red-500 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 px-6 py-2 shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setCurrentView('find')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentView === 'find' ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <span
              className={`material-symbols-outlined ${
                currentView === 'find' ? 'fill-current' : ''
              }`}
            >
              search
            </span>
            <span className="text-[10px] font-bold">Find</span>
          </button>
          <button
            onClick={() => setCurrentView('scan')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentView === 'scan' ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <span
              className={`material-symbols-outlined ${
                currentView === 'scan' ? 'fill-current' : ''
              }`}
            >
              qr_code_scanner
            </span>
            <span className="text-[10px] font-bold">Scan</span>
          </button>
          <button
            onClick={() => setCurrentView('settings')}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              currentView === 'settings' ? 'text-primary' : 'text-slate-400'
            }`}
          >
            <span
              className={`material-symbols-outlined ${
                currentView === 'settings' ? 'fill-current' : ''
              }`}
            >
              settings
            </span>
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-slate-50/50 flex flex-col pb-20 lg:pb-0">
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 lg:px-8 sticky top-0 z-20 shrink-0">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              {currentView === 'find' && 'Welcome back, Jane'}
              {currentView === 'scan' && 'Scan Clinic QR Code'}
              {currentView === 'settings' && 'Settings'}
            </h1>
            <p className="text-xs text-slate-500">
              {currentView === 'find' && 'Find and join queues near you today.'}
              {currentView === 'scan' && 'Join the queue at your location'}
              {currentView === 'settings' && 'Patient Dashboard'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            {currentView === 'find' && (
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-sm font-medium text-slate-700">
                  New York, NY
                </span>
                <span className="material-symbols-outlined text-sage">
                  location_on
                </span>
              </div>
            )}
            {currentView === 'scan' && (
              <button className="hidden sm:flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="material-symbols-outlined">help</span>
                Support
              </button>
            )}
          </div>
        </header>

        {currentView === 'find' && <FindClinicView />}
        {currentView === 'scan' && (
          <ScanQRView onNavigateToFind={() => setCurrentView('find')} />
        )}
        {currentView === 'settings' && <SettingsView />}
      </main>
    </div>
  );
};

