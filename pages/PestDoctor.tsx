
import React, { useState, useRef } from 'react';
import { Camera, Upload, Loader2, Leaf, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { detectPest } from '../services/geminiService';

export const PestDoctor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        analyzeImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async (base64: string) => {
    setLoading(true);
    setResult(null);
    try {
      const base64Data = base64.split(',')[1];
      const diagnostic = await detectPest(base64Data);
      setResult(diagnostic);
    } catch (error) {
      alert("AI Analysis failed. Please check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Leaf className="text-emerald-600" size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">AI Organic Pest Doctor</h1>
        <p className="text-slate-500 max-w-lg mx-auto mb-8">
          Upload a photo of your diseased crop or pests. Our AI identifies the issue and suggests 100% natural, organic remedies.
        </p>

        <div className="flex flex-col items-center gap-4">
          {image ? (
            <div className="relative group">
              <img src={image} alt="Crop" className="w-64 h-64 object-cover rounded-2xl shadow-md border-4 border-emerald-50" />
              <button 
                onClick={() => {setImage(null); setResult(null);}}
                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg"
              >
                ✕
              </button>
            </div>
          ) : (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="w-full max-w-md h-64 border-2 border-dashed border-slate-300 rounded-3xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition-all group"
            >
              <div className="p-4 bg-slate-100 rounded-full group-hover:bg-emerald-100 transition-colors">
                <Camera size={32} className="text-slate-400 group-hover:text-emerald-600" />
              </div>
              <p className="text-slate-500 font-medium">Click to capture or upload leaf photo</p>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center gap-2 text-emerald-600 font-medium animate-pulse">
              <Loader2 className="animate-spin" />
              Thinking... Identifying organic solutions
            </div>
          )}
        </div>
      </div>

      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className={`${result.urgency === 'High' ? 'text-red-500' : 'text-orange-500'}`} />
              <h3 className="text-xl font-bold text-slate-800">Diagnosis</h3>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
              <p className="text-2xl font-bold text-slate-800">{result.diagnosis}</p>
              <p className="text-sm font-medium text-emerald-600">Confidence: {result.confidence}</p>
            </div>
            <div className="space-y-3">
              <p className="font-bold text-slate-700 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-500" /> 
                Preventative Advice
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">{result.preventativeAdvice}</p>
            </div>
          </div>

          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6 text-emerald-800">
              <Sparkles size={20} className="text-emerald-600" />
              <h3 className="text-xl font-bold">Natural Remedies</h3>
            </div>
            <div className="space-y-4">
              {result.naturalRemedies.map((remedy: string, idx: number) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex gap-3">
                  <div className="w-6 h-6 bg-emerald-100 text-emerald-700 flex items-center justify-center rounded-full text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 font-medium leading-tight">{remedy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
