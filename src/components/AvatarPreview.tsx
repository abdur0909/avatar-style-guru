
import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarPreviewProps {
  selectedAvatar: string;
  selectedColor: string;
}

const AvatarPreview = ({ selectedAvatar, selectedColor }: AvatarPreviewProps) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        <div 
          className={cn(
            "w-32 h-32 rounded-full border-4 border-white shadow-xl",
            "transition-all duration-300 hover:scale-105"
          )}
          style={{ backgroundColor: selectedColor }}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center text-white text-4xl font-semibold">
            {selectedAvatar}
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
        <p className="text-sm text-gray-500">Your avatar appearance</p>
      </div>
    </div>
  );
};

export default AvatarPreview;
