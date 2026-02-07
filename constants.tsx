
import React from 'react';
import { Leaf, Sprout, ShoppingBag, CloudSun, ShieldCheck, QrCode, BookOpen, Users } from 'lucide-react';

export const APP_LOGO = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/gk-organic-logo.png"; // Placeholder for the provided image

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी (Hindi)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'ml', name: 'മലയാളം (Malayalam)' },
  { code: 'mr', name: 'मराठी (Marathi)' },
  { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ (Punjabi)' }
];

export const NAV_ITEMS = [
  { id: 'dashboard', label: 'Farmer Dashboard', icon: <Sprout size={20} /> },
  { id: 'certification', label: 'Certification', icon: <ShieldCheck size={20} /> },
  { id: 'marketplace', label: 'Marketplace', icon: <ShoppingBag size={20} /> },
  { id: 'pest-doctor', label: 'AI Pest Doctor', icon: <Leaf size={20} /> },
  { id: 'transparency', label: 'Farm-to-Fork', icon: <QrCode size={20} /> },
  { id: 'knowledge', label: 'Knowledge Hub', icon: <BookOpen size={20} /> },
  { id: 'community', label: 'Community', icon: <Users size={20} /> }
];

export const MOCK_SOIL_DATA = [
  { timestamp: '08:00', ph: 6.5, moisture: 45, nitrogen: 32 },
  { timestamp: '12:00', ph: 6.6, moisture: 42, nitrogen: 30 },
  { timestamp: '16:00', ph: 6.4, moisture: 40, nitrogen: 28 },
  { timestamp: '20:00', ph: 6.5, moisture: 48, nitrogen: 35 },
];

export const MOCK_PRODUCTS = [
  { id: '1', name: 'Organic Alphonso Mango', price: 450, unit: 'Dozen', farmer: 'Rajesh Kumar', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400', category: 'Fruits' },
  { id: '2', name: 'Desi Cow Ghee', price: 950, unit: '500ml', farmer: 'Sunita Devi', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&q=80&w=400', category: 'Dairy' },
  { id: '3', name: 'Organic Red Rice', price: 120, unit: 'kg', farmer: 'Naveen B', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400', category: 'Grains' },
];
