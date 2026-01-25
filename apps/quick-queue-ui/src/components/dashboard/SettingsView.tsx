import { useState } from 'react';
import { VerifyIdentityModal } from '@/components/common/modals/VerifyIdentityModal';

export const SettingsView = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<
    'saveChanges' | 'changePassword' | null
  >(null);

  const handleAction = (action: 'saveChanges' | 'changePassword') => {
    setPendingAction(action);
    setShowVerifyModal(true);
  };

  const handleVerify = () => {
    // In a real app, verify OTP then perform action
    setShowVerifyModal(false);
    setPendingAction(null);
    alert('Verification successful! Changes saved.');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-10">
      <div className="flex flex-col gap-2 border-b border-teal-100 pb-6">
        <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
          Settings
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Manage your clinic profile, security, and preferences.
        </p>
      </div>
      <form
        className="flex flex-col gap-8"
        onSubmit={(e) => {
          e.preventDefault();
          handleAction('saveChanges');
        }}
      >
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-teal-50/30">
            <span className="material-symbols-outlined text-primary">
              local_hospital
            </span>
            <h3 className="text-lg font-bold text-slate-900">Clinic Profile</h3>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Clinic Name
              </label>
              <input
                className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                type="text"
                defaultValue="Dr. Carter's Clinic - General Practice & Pediatrics"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Address
              </label>
              <textarea
                className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                rows={3}
                defaultValue={`123 Health Avenue, Suite 400\nMedical District, CA 90210`}
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number
              </label>
              <input
                className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                type="tel"
                defaultValue="+1 (555) 012-3456"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Support Email
              </label>
              <input
                className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                type="email"
                defaultValue="contact@carterclinic.com"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-teal-50/30">
            <span className="material-symbols-outlined text-primary">lock</span>
            <h3 className="text-lg font-bold text-slate-900">
              Account Security
            </h3>
          </div>
          <div className="p-6 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-sm uppercase tracking-wider font-bold text-slate-400 mb-4">
                  Change Password
                </h4>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Current Password
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                  placeholder="••••••••••••"
                  type="password"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  New Password
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                  type="password"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Confirm New Password
                </label>
                <input
                  className="w-full rounded-lg border-slate-200 text-slate-800 focus:border-primary focus:ring-primary shadow-sm"
                  type="password"
                />
              </div>
            </div>
            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Two-Factor Authentication
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Add an extra layer of security to your account.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    defaultChecked
                    className="sr-only peer"
                    type="checkbox"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex items-center gap-3 bg-teal-50/30">
            <span className="material-symbols-outlined text-primary">
              notifications_active
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Notification Preferences
            </h3>
          </div>
          <div className="p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">
                  Patient Check-in Alerts
                </p>
                <p className="text-sm text-slate-500">
                  Receive a notification when a new patient joins the queue.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  defaultChecked
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">
                  Daily Summary Report
                </p>
                <p className="text-sm text-slate-500">
                  Get a daily email summary of clinic performance.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-800">System Updates</p>
                <p className="text-sm text-slate-500">
                  Notifications about software maintenance and new features.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  defaultChecked
                  className="sr-only peer"
                  type="checkbox"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-4">
          <button
            className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
            type="button"
          >
            Cancel
          </button>
          <button
            className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>

      {showVerifyModal && (
        <VerifyIdentityModal
          isOpen={showVerifyModal}
          onClose={() => setShowVerifyModal(false)}
          onVerify={handleVerify}
          email="doctor@carterclinic.com"
        />
      )}
    </div>
  );
};

