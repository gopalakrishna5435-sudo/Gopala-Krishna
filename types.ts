
export enum AppLanguage {
  HINDI = 'hi',
  KANNADA = 'kn',
  TELUGU = 'te',
  TAMIL = 'ta',
  MALAYALAM = 'ml',
  MARATHI = 'mr',
  BENGALI = 'bn',
  GUJARATI = 'gu',
  PUNJABI = 'pa',
  ENGLISH = 'en'
}

export interface SoilData {
  ph: number;
  moisture: number;
  nitrogen: number;
  phosphorus: number;
  potassium: number;
  timestamp: string;
}

export interface CertificationLog {
  id: string;
  type: 'Input' | 'Harvest' | 'Audit';
  date: string;
  description: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  unit: string;
  farmer: string;
  image: string;
  category: string;
}

export interface BlockchainStep {
  id: string;
  stage: string;
  date: string;
  details: string;
  location: string;
  photoUrl?: string;
  hash: string;
}
