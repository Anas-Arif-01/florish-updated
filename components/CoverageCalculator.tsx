'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function CoverageCalculator() {
  const [length, setLength] = useState<number | ''>('');
  const [width, setWidth] = useState<number | ''>('');
  const [wasteMargin, setWasteMargin] = useState<number>(10); // 10% standard waste

  const area = length && width ? Number(length) * Number(width) : 0;
  const totalAreaWithWaste = area ? Math.ceil(area * (1 + wasteMargin / 100)) : 0;

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-4 text-emerald-600">
        <Calculator className="w-5 h-5" />
        <h2 className="text-lg font-bold text-gray-900">Area Coverage Calculator</h2>
      </div>
      <p className="text-xs text-gray-500 mb-6">
        Enter your room dimensions to calculate required square footage including a waste allowance.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Length (Feet)</label>
          <input
            type="number"
            placeholder="e.g. 12"
            value={length}
            onChange={(e) => setLength(e.target.value ? Number(e.target.value) : '')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Width (Feet)</label>
          <input
            type="number"
            placeholder="e.g. 15"
            value={width}
            onChange={(e) => setWidth(e.target.value ? Number(e.target.value) : '')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-700 mb-1">
          Wastage Margin: <span className="text-emerald-600">{wasteMargin}%</span>
        </label>
        <input
          type="range"
          min="5"
          max="20"
          value={wasteMargin}
          onChange={(e) => setWasteMargin(Number(e.target.value))}
          className="w-full accent-emerald-600"
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Total Material Required</p>
          <p className="text-2xl font-black text-emerald-600">{totalAreaWithWaste} sq ft</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Net Room Area</p>
          <p className="text-sm font-semibold text-gray-700">{area} sq ft</p>
        </div>
      </div>
    </div>
  );
}