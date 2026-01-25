import { useState } from 'react';
import { InLineScreen } from '../../queue/InLineScreen';
import { YourTurnScreen } from '../../queue/YourTurnScreen';
import { VisitCompletedScreen } from '../../queue/VisitCompletedScreen';
import { ClinicClosedScreen } from '../../queue/ClinicClosedScreen';

export const QueueJoinModal = ({
  clinic,
  isOpen,
  onClose,
}: {
  clinic: any;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [queueState, setQueueState] = useState<
    'confirm' | 'in-line' | 'your-turn' | 'completed' | 'closed'
  >('confirm');

  if (!isOpen || !clinic) return null;

  const handleJoinQueue = () => {
    // Randomly decide if clinic closes for demo purposes (10% chance)
    if (Math.random() > 0.9) {
      setQueueState('closed');
    } else {
      setQueueState('in-line');
    }
  };

  if (queueState === 'in-line') {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <InLineScreen
          onNext={() => setQueueState('your-turn')}
          onCancel={onClose}
        />
      </div>
    );
  }

  if (queueState === 'your-turn') {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <YourTurnScreen
          onNext={() => setQueueState('completed')}
          onCancel={onClose}
        />
      </div>
    );
  }

  if (queueState === 'completed') {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <VisitCompletedScreen onHome={onClose} />
      </div>
    );
  }

  if (queueState === 'closed') {
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <ClinicClosedScreen onHome={onClose} />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-fade-in-up">
        <div className="bg-teal-50 p-6 pb-8 text-center relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="size-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm text-sage">
            <span className="material-symbols-outlined text-4xl">
              medical_services
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900">{clinic.name}</h2>
          <p className="text-slate-600 font-medium">{clinic.doctor}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mt-2">
            <span className="material-symbols-outlined text-sm">
              location_on
            </span>
            <span>{clinic.location}</span>
          </div>
        </div>
        <div className="px-6 -mt-5 relative z-10">
          <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex items-center justify-between">
            <div className="flex flex-col items-center flex-1 border-r border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Queue Status
              </span>
              <div className="flex items-center gap-1 mt-1 text-emerald-600 font-bold">
                <span className="material-symbols-outlined text-lg">
                  groups
                </span>
                <span className="text-lg">4 Ahead</span>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Est. Wait
              </span>
              <div className="flex items-center gap-1 mt-1 text-slate-900 font-bold">
                <span className="material-symbols-outlined text-lg">timer</span>
                <span className="text-lg">~20 mins</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 pt-6">
          <form action="#" className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleJoinQueue(); }}>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Patient Name
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                  person
                </span>
                <input
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:ring-0 focus:border-slate-300 cursor-not-allowed opacity-80"
                  readOnly
                  type="text"
                  value="Jane Doe"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Purpose of Visit
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-sage">
                  stethoscope
                </span>
                <select
                  className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select reason...
                  </option>
                  <option value="consultation">General Consultation</option>
                  <option value="fever">Fever / Flu Symptoms</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="followup">Follow-up Visit</option>
                  <option value="prescription">Prescription Refill</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <span className="material-symbols-outlined text-amber-500 text-xl shrink-0 mt-0.5">
                info
              </span>
              <p className="text-xs text-amber-800 leading-relaxed">
                By joining, you agree to arrive at the clinic at least 10
                minutes before your estimated time. Late arrivals may lose their
                spot.
              </p>
            </div>
            <div className="pt-2">
              <button
                className="w-full py-4 bg-sage hover:bg-[#3d8b8b] text-white font-bold rounded-xl shadow-lg shadow-sage/30 hover:shadow-sage/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>Confirm & Join Queue</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <div className="text-center mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-sm font-medium text-slate-500 hover:text-red-500 transition-colors"
                >
                  Cancel Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

