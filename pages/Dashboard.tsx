
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { MOCK_SOIL_DATA } from '../constants';
// Added CloudSun to the lucide-react imports
import { Droplets, Thermometer, Wind, Sun, Activity, Database, CloudSun } from 'lucide-react';

const MetricCard = ({ icon: Icon, label, value, unit, color }: any) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-lg ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <span className="text-sm font-medium text-slate-500">{label}</span>
    </div>
    <div className="flex items-baseline gap-1">
      <span className="text-2xl font-bold text-slate-800">{value}</span>
      <span className="text-sm font-medium text-slate-400">{unit}</span>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Field Overview</h1>
        <div className="flex items-center gap-2 bg-emerald-100 px-3 py-1 rounded-full text-emerald-700 text-sm font-medium">
          <Activity size={16} />
          Real-time IoT Sync Active
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard icon={Droplets} label="Soil Moisture" value="42" unit="%" color="bg-blue-500" />
        <MetricCard icon={Activity} label="Soil pH" value="6.5" unit="pH" color="bg-emerald-500" />
        <MetricCard icon={Thermometer} label="Temperature" value="28" unit="°C" color="bg-orange-500" />
        <MetricCard icon={Database} label="N-P-K Levels" value="32-12-18" unit="mg/kg" color="bg-purple-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Health Trends (24h)</h3>
            <select className="text-xs font-semibold bg-slate-50 border border-slate-200 p-1 rounded">
              <option>Moisture</option>
              <option>Nitrogen</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_SOIL_DATA}>
                <defs>
                  <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="timestamp" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="moisture" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMoisture)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-2xl text-white shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold flex items-center gap-2">
              <CloudSun size={20} />
              Hyper-local Weather
            </h3>
            <span className="text-xs bg-white/20 px-2 py-1 rounded">Chikkaballapur, KA</span>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-5xl font-bold mb-2">29°C</div>
            <p className="text-emerald-100 font-medium">Partly Cloudy • Humidity 62%</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Organic Farming Advice</p>
              <p className="text-sm">Expect light dew tonight. Ideal for applying Vermicompost tea early morning to boost microbial activity.</p>
            </div>
            <div className="bg-yellow-400/20 p-3 rounded-xl border border-yellow-400/40 flex gap-3">
              <Wind size={24} className="text-yellow-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-yellow-100 uppercase">Pest Alert</p>
                <p className="text-xs text-white">Increased aphid activity reported in neighboring clusters due to high humidity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
