export const DashboardView = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-8">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-8 border border-teal-100 shadow-[0_8px_30px_-6px_rgba(13,148,136,0.1)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '160px' }}
              >
                clinical_notes
              </span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">
                    play_circle
                  </span>
                  <h3 className="text-slate-500 font-bold uppercase tracking-wider text-sm">
                    Current Session
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl text-slate-400 font-medium mr-2">
                    Serving
                  </span>
                  <span className="text-7xl font-black text-slate-900 tracking-tighter">
                    A-104
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-teal-50 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-800 leading-tight">
                      Sarah Jenkins
                    </p>
                    <p className="text-sm text-slate-500">
                      Regular Check-up • 15m elapsed
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button className="bg-primary hover:bg-primary-hover text-white rounded-xl px-10 py-5 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/40 flex items-center justify-center gap-3 transition-all active:scale-[0.98] group/btn">
                  <span className="text-xl font-bold">Call Next</span>
                  <span className="material-symbols-outlined text-3xl group-hover/btn:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
                <button className="text-slate-400 hover:text-slate-600 text-sm font-medium flex items-center justify-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    skip_next
                  </span>
                  Skip this patient
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 px-1">
              <span className="material-symbols-outlined text-slate-400">
                format_list_bulleted
              </span>
              Queue List
              <span className="bg-teal-50 text-primary px-2 py-0.5 rounded-full text-xs font-bold border border-teal-100">
                12 Waiting
              </span>
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold text-xs border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4">Token</th>
                      <th className="px-6 py-4">Patient Name</th>
                      <th className="px-6 py-4">Purpose</th>
                      <th className="px-6 py-4">Wait Time</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-slate-700">
                        A-105
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        Michael Chen
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                          Consultation
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>
                        24 mins
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                          Mark No-Show
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-slate-700">
                        A-106
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        Emma Wilson
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
                          Follow-up
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>
                        18 mins
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                          Mark No-Show
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-6 py-4 font-mono font-bold text-slate-700">
                        A-107
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-900">
                        James Rodriguez
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-700">
                          Lab Review
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">
                          schedule
                        </span>
                        12 mins
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors inline-flex items-center gap-1">
                          Mark No-Show
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 p-3 border-t border-slate-200 text-center">
                <button className="text-primary text-sm font-bold hover:underline">
                  View Full List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4 flex flex-col gap-6">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-slate-400">
              insights
            </span>
            Today's Stats
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm flex items-center gap-5">
              <div className="size-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                <span className="material-symbols-outlined text-3xl">
                  groups
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Total Patients Served
                </p>
                <p className="text-3xl font-black text-slate-900 mt-1">24</p>
                <p className="text-xs text-green-600 font-bold mt-1 flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  +12% vs last week
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-teal-100 shadow-sm flex items-center gap-5">
              <div className="size-14 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
                <span className="material-symbols-outlined text-3xl">
                  timer
                </span>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-medium">
                  Avg. Wait Time
                </p>
                <p className="text-3xl font-black text-slate-900 mt-1">
                  14<span className="text-lg font-bold text-slate-400 ml-1">min</span>
                </p>
                <p className="text-xs text-green-600 font-bold mt-1 flex items-center">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Within target (15m)
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-6 shadow-lg text-white relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-20">
              <span
                className="material-symbols-outlined"
                style={{ fontSize: '140px' }}
              >
                medical_information
              </span>
            </div>
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-2">Clinic Notice</h4>
              <p className="text-teal-100 text-sm leading-relaxed mb-4">
                Staff meeting scheduled for 4:00 PM today regarding the new triage
                protocols.
              </p>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors border border-white/30">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

