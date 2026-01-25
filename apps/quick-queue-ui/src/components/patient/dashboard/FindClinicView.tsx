import { useState } from 'react';
import { QueueJoinModal } from './modals/QueueJoinModal';

export const FindClinicView = () => {
  const [selectedClinic, setSelectedClinic] = useState<any>(null);

  const clinics = [
    {
      id: 1,
      name: 'City Health Care',
      doctor: 'Dr. Robert Chen, General Practitioner',
      location: '124 Medical Dr, Upper East Side',
      wait: '~15 min wait',
      status: 'Estimated Time',
      icon: 'medical_services',
      color: 'emerald',
    },
    {
      id: 2,
      name: 'Kids First Pediatrics',
      doctor: 'Dr. Sarah Miller, Pediatrician',
      location: '89 Lexington Ave, Midtown',
      wait: '~45 min wait',
      status: 'Busy hour',
      icon: 'child_care',
      color: 'amber',
    },
    {
      id: 3,
      name: 'Downtown Wellness',
      doctor: 'Dr. Alex Rivera, Family Medicine',
      location: '45 Wall St, Financial District',
      wait: '~5 min wait',
      status: 'Available Now',
      icon: 'vaccines',
      color: 'emerald',
    },
    {
      id: 4,
      name: 'Vision Care Center',
      doctor: 'Dr. Emily Watson, Optometrist',
      location: '210 Broadway, Lower Manhattan',
      wait: '~30 min wait',
      status: 'Moderate Queue',
      icon: 'eye_tracking',
      color: 'amber',
    },
  ];

  return (
    <div className="p-4 lg:p-8 max-w-7xl mx-auto w-full">
      <div className="mb-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex items-center gap-3">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                search
              </span>
              <input
                className="w-full h-14 pl-12 pr-4 bg-white border-none rounded-2xl shadow-xl shadow-slate-200/50 focus:ring-2 focus:ring-primary text-slate-700 transition-all outline-none"
                placeholder="Search by clinic name, doctor, or specialty..."
                type="text"
              />
            </div>
            <button className="size-14 bg-white flex items-center justify-center rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 text-slate-600 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            Nearby Clinics
            <span className="bg-primary/20 text-sage text-xs px-2 py-1 rounded-full">
              12 Available
            </span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">Sort by:</span>
            <select className="bg-transparent border-none text-sm font-semibold text-slate-700 focus:ring-0 cursor-pointer outline-none">
              <option>Closest Distance</option>
              <option>Wait Time</option>
              <option>Top Rated</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-20 lg:pb-0">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-teal-50 rounded-2xl">
                  <span className="material-symbols-outlined text-sage text-3xl">
                    {clinic.icon}
                  </span>
                </div>
                <div className="text-right">
                  <div
                    className={`flex items-center gap-1 justify-end text-sm font-medium ${
                      clinic.color === 'emerald'
                        ? 'text-emerald-600'
                        : 'text-amber-500'
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      schedule
                    </span>
                    <span>{clinic.wait}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">
                    {clinic.status}
                  </p>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-sage transition-colors">
                  {clinic.name}
                </h3>
                <p className="text-slate-600 font-medium mb-3">
                  {clinic.doctor}
                </p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  <span>{clinic.location}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedClinic(clinic)}
                className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Join Queue</span>
                <span className="material-symbols-outlined text-xl">login</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-auto p-8 border-t border-slate-200 text-center text-xs text-slate-400">
        © 2024 QuickQueue Medical Solutions. All clinic wait times are estimates
        and subject to change.
      </footer>

      <QueueJoinModal
        clinic={selectedClinic}
        isOpen={!!selectedClinic}
        onClose={() => setSelectedClinic(null)}
      />
    </div>
  );
};

