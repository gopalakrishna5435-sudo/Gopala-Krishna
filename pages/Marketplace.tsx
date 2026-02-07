
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Search, Filter, ShoppingCart, User } from 'lucide-react';

export const Marketplace: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Direct-to-Consumer Market</h1>
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search organic produce..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50">
            <Filter size={18} className="text-slate-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_PRODUCTS.map(product => (
          <div key={product.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                Certified Organic
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs font-medium uppercase tracking-tighter">
                {product.category}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">{product.name}</h3>
              <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                <User size={14} />
                <span>By {product.farmer}</span>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-xl font-bold text-emerald-700">₹{product.price}</span>
                  <span className="text-slate-400 text-sm"> / {product.unit}</span>
                </div>
                <button className="flex items-center gap-2 bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-800 transition-colors">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
