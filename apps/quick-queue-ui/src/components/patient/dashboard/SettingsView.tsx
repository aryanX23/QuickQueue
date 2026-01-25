import { useState } from 'react';
import { VerifyIdentityModal } from '@/components/common/modals/VerifyIdentityModal';

export const SettingsView = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    'updateProfile' | 'changePassword' | 'deleteAccount' | null
  >(null);

  const handleAction = (
    action: 'updateProfile' | 'changePassword' | 'deleteAccount'
  ) => {
    setPendingAction(action);
    setShowVerifyModal(true);
  };

  const handleVerify = () => {
    // In a real app, verify OTP then perform action
    setShowVerifyModal(false);
    setPendingAction(null);
    alert('Verification successful! Action completed.');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 w-full pb-20 lg:pb-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Profile Settings</h2>
        <p className="text-slate-500">
          Manage your personal information and security preferences.
        </p>
      </div>
      <div className="space-y-6">
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">
              Personal Information
            </h3>
            <p className="text-sm text-slate-500">
              This information will be visible to clinics during check-in.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    person
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="text"
                    defaultValue="Jane Doe"
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
                    className="w-full h-11 rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="email"
                    defaultValue="jane@example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    phone
                  </span>
                  <input
                    className="w-full h-11 rounded-lg border border-slate-200 bg-white pl-10 pr-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    type="tel"
                    defaultValue="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button
                onClick={() => handleAction('updateProfile')}
                className="px-6 py-2.5 bg-primary text-slate-900 font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.01] transition-all"
              >
                Update Profile
              </button>
            </div>
          </div>
        </section>
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">
              Change Password
            </h3>
            <p className="text-sm text-slate-500">
              Ensure your account stays secure with a strong password.
            </p>
          </div>
          <div className="p-6 space-y-4 max-w-md">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Current Password
              </label>
              <input
                className="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                New Password
              </label>
              <input
                className="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-slate-700">
                Confirm New Password
              </label>
              <input
                className="w-full h-11 rounded-lg border border-slate-200 bg-white px-4 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="pt-2">
              <button
                onClick={() => handleAction('changePassword')}
                className="px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-all"
              >
                Change Password
              </button>
            </div>
          </div>
        </section>
        <section className="bg-red-50 rounded-xl border border-red-100 overflow-hidden">
          <div className="p-6 flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-red-900">
                Delete Account
              </h3>
              <p className="text-sm text-red-700">
                Permanently remove your account and all associated data. This
                action cannot be undone.
              </p>
            </div>
            <button
              onClick={() => handleAction('deleteAccount')}
              className="px-6 py-2.5 bg-red-600 text-white font-bold rounded-lg shadow-lg shadow-red-200 hover:bg-red-700 hover:scale-[1.01] transition-all whitespace-nowrap"
            >
              Delete Account
            </button>
          </div>
        </section>
      </div>
      <footer className="mt-12 py-6 text-center text-xs text-slate-400">
        © 2024 QuickQueue Medical Solutions. All rights reserved.
      </footer>

      {showVerifyModal && (
        <VerifyIdentityModal
          isOpen={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
          onVerify={handleVerify}
          email="jane@example.com"
        />
      )}
    </div>
  );
};

