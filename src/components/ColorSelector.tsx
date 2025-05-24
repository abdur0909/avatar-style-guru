
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ColorSelectorProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const predefinedColors = [
  '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1',
  '#14B8A6', '#F43F5E', '#8B5A2B', '#6B7280', '#1F2937'
];

const ColorSelector = ({ selectedColor, onColorSelect }: ColorSelectorProps) => {
  const [customColor, setCustomColor] = useState('#3B82F6');

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Preset Colors</h3>
        <div className="grid grid-cols-5 gap-3">
          {predefinedColors.map((color) => (
            <button
              key={color}
              onClick={() => onColorSelect(color)}
              className={cn(
                "w-12 h-12 rounded-xl border-2 transition-all duration-200",
                "hover:scale-110 hover:shadow-lg",
                selectedColor === color 
                  ? "border-gray-900 shadow-md scale-105" 
                  : "border-gray-200 hover:border-gray-300"
              )}
              style={{ backgroundColor: color }}
            >
              {selectedColor === color && (
                <svg className="w-4 h-4 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Color</h3>
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="space-y-4">
            <div className="relative">
              <div 
                className="w-full h-32 rounded-lg border-2 border-gray-200 cursor-pointer relative overflow-hidden"
                style={{
                  background: `linear-gradient(to bottom, transparent, black), linear-gradient(to right, white, ${customColor})`
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width;
                  const y = (e.clientY - rect.top) / rect.height;
                  
                  // Simple color calculation based on position
                  const r = Math.round(255 * (1 - y) * x);
                  const g = Math.round(255 * (1 - y) * x * 0.8);
                  const b = Math.round(255 * (1 - y));
                  const newColor = `rgb(${r}, ${g}, ${b})`;
                  
                  setCustomColor(newColor);
                  onColorSelect(newColor);
                }}
              >
                <div className="absolute w-4 h-4 border-2 border-white rounded-full shadow-lg transform -translate-x-2 -translate-y-2 pointer-events-none"
                     style={{ 
                       left: '50%', 
                       top: '50%',
                       backgroundColor: selectedColor === customColor ? customColor : 'transparent'
                     }}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="color"
                value={customColor}
                onChange={(e) => {
                  setCustomColor(e.target.value);
                  onColorSelect(e.target.value);
                }}
                className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer"
              />
              <div className="flex-1">
                <input
                  type="text"
                  value={customColor}
                  onChange={(e) => {
                    setCustomColor(e.target.value);
                    onColorSelect(e.target.value);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="#3B82F6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorSelector;
