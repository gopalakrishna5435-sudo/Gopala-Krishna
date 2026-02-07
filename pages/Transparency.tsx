
import React from 'react';
import { QrCode, CheckCircle2, MapPin, Calendar, Database, ShieldCheck, Search } from 'lucide-react';

const STEP_DATA = [
  { stage: 'Seed Sourcing', date: 'Jan 10, 2024', details: 'Non-GMO Heirloom Seeds', location: 'GK Farm, Sector 4', hash: '0x8f2...e31' },
  { stage: 'Organic Manure', date: 'Jan 15, 2024', details: 'Application of Vermicompost', location: 'GK Farm, Plot B', hash: '0x4c5...b22' },
  { stage: 'Irrigation Start', date: 'Jan 16, 2024', details: 'Drip irrigation from well water', location: 'Plot B-Main', hash: '0x1d3...a89' },
  { stage: 'Harvesting', date: 'Oct 22, 2024', details: 'Manual handpicking at peak ripeness', location: 'GK Farm, Plot B', hash: '0xf77...c54' },
  { stage: 'Packaging', date: 'Oct 23, 2024', details: 'Eco-friendly jute packaging', location: 'Processing Unit A', hash: '0x992...d10' },
];

export const Transparency: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-bold border border-emerald-200 shadow-sm">
          <Database size={16} />
          Powered by Agri-Blockchain
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">Farm-to-Fork Transparency</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          Scan your product's unique QR code to see its entire organic lifecycle verified on our private blockchain ledger.
        </p>
      </div>

      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-200 relative group cursor-pointer">
          <QrCode size={120} className="text-slate-800" />
          <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
             <span className="text-[10px] font-bold text-emerald-700">SCAN ME</span>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-400 uppercase">Product ID</span>
            <span className="text-sm font-mono bg-slate-100 px-2 py-1 rounded">GK-ORG-2024-8832</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Organic Kolar Tomatoes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Calendar size={16} />
              <span>Harvested: Oct 22</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={16} />
              <span>Kolar, Karnataka</span>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 w-fit px-3 py-1 rounded-lg">
              <ShieldCheck size={16} />
              NPOP India Certified
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200"></div>
        <div className="space-y-12">
          {STEP_DATA.map((step, idx) => (
            <div key={idx} className="relative pl-16">
              <div className="absolute left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 text-lg">{step.stage}</h4>
                  <span className="text-xs font-medium text-slate-400">{step.date}</span>
                </div>
                <p className="text-slate-600 text-sm mb-4">{step.details}</p>
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={12} />
                    {step.location}
                  </div>
                  <div className="text-[10px] font-mono text-slate-300">
                    TXN: {step.hash}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
