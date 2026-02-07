
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Dashboard } from './pages/Dashboard';
import { PestDoctor } from './pages/PestDoctor';
import { Marketplace } from './pages/Marketplace';
import { Transparency } from './pages/Transparency';
import { Search, Bell, User, Menu, X, Leaf } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentLang, setCurrentLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'pest-doctor': return <PestDoctor />;
      case 'marketplace': return <Marketplace />;
      case 'transparency': return <Transparency />;
      case 'certification': 
        return (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <h2 className="text-xl font-bold">Certification Portal</h2>
            <p>Module loading... Coming soon for next audit cycle.</p>
          </div>
        );
      case 'knowledge': 
        return (
          <div className="flex flex-col items-center justify-center h-64 text-slate-400">
            <h2 className="text-xl font-bold">Knowledge Hub</h2>
            <p>Accessing library of bio-fertilizer tutorials...</p>
          </div>
        );
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 fixed top-0 left-0 right-0 z-50 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-md">
               <Leaf size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight hidden md:block">GK Organic</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden sm:flex items-center gap-4">
             <LanguageSwitcher currentLang={currentLang} onSelect={setCurrentLang} />
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-slate-400 hover:text-emerald-600 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="ml-2 w-8 h-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center overflow-hidden cursor-pointer">
              <User size={18} className="text-slate-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-slate-900/50 pt-16">
            <div className="w-64 bg-white h-full p-4 animate-in slide-in-from-left duration-200">
              <nav className="space-y-1">
                {NAV_ITEMS_MOBILE.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === item.id
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-4 border-t border-slate-100 pt-4 px-4">
                 <LanguageSwitcher currentLang={currentLang} onSelect={setCurrentLang} />
              </div>
            </div>
          </div>
        )}

        <main className="flex-1 lg:ml-64 p-4 md:p-8 bg-slate-50 overflow-x-hidden">
          {renderContent()}
        </main>
      </div>
      
      {/* Mobile Floating Action - Direct link to Pest Doctor */}
      {activeTab !== 'pest-doctor' && (
        <button 
          onClick={() => setActiveTab('pest-doctor')}
          className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl flex items-center justify-center z-40 hover:scale-110 transition-transform active:scale-95"
        >
          <Leaf size={24} />
        </button>
      )}
    </div>
  );
};

// Internal nav items for mobile
const NAV_ITEMS_MOBILE = [
  { id: 'dashboard', label: 'Dashboard', icon: <Leaf size={20} /> },
  { id: 'pest-doctor', label: 'Pest Doctor', icon: <Leaf size={20} /> },
  { id: 'marketplace', label: 'Marketplace', icon: <Leaf size={20} /> },
  { id: 'transparency', label: 'Transparency', icon: <Leaf size={20} /> },
];

export default App;
