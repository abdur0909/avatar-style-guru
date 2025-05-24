
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
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">Preview</h3>
        <p className="text-sm text-gray-500">Your avatar appearance</p>
      </div>
    </div>
  );
};

export default AvatarPreview;
