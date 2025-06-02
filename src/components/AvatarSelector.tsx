
import React from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface AvatarOption {
  id: string;
  emoji: string;
  name: string;
  category: string;
  available: boolean;
}

interface AvatarSelectorProps {
  selectedAvatar: string;
  onAvatarSelect: (avatar: string) => void;
}

const avatarOptions: AvatarOption[] = [
  { id: '1', emoji: '👩‍💼', name: 'Professional Woman', category: 'Professional', available: true },
  { id: '2', emoji: '👨‍💼', name: 'Professional Man', category: 'Professional', available: true },
  { id: '3', emoji: '👩‍🎨', name: 'Creative Woman', category: 'Creative', available: true },
  { id: '4', emoji: '👨‍🎨', name: 'Creative Man', category: 'Creative', available: true },
  { id: '5', emoji: '👩‍💻', name: 'Tech Woman', category: 'Professional', available: true },
  { id: '6', emoji: '👨‍💻', name: 'Tech Man', category: 'Professional', available: true },
  { id: '7', emoji: '👩‍🎓', name: 'Student Woman', category: 'Casual', available: true },
  { id: '8', emoji: '👨‍🎓', name: 'Student Man', category: 'Casual', available: true },
  { id: '9', emoji: '🧑‍🎤', name: 'Musician', category: 'Creative', available: false },
  { id: '10', emoji: '👩‍🔬', name: 'Scientist', category: 'Professional', available: false },
  { id: '11', emoji: '👨‍🍳', name: 'Chef', category: 'Professional', available: true },
  { id: '12', emoji: '👩‍⚕️', name: 'Doctor Woman', category: 'Professional', available: true },
  { id: '13', emoji: '👨‍⚕️', name: 'Doctor Man', category: 'Professional', available: true },
  { id: '14', emoji: '👩‍🏫', name: 'Teacher Woman', category: 'Professional', available: true },
  { id: '15', emoji: '👨‍🏫', name: 'Teacher Man', category: 'Professional', available: true },
];

const AvatarSelector = ({ selectedAvatar, onAvatarSelect }: AvatarSelectorProps) => {
  const groupedAvatars = avatarOptions.reduce((acc, avatar) => {
    if (!acc[avatar.category]) {
      acc[avatar.category] = [];
    }
    acc[avatar.category].push(avatar);
    return acc;
  }, {} as Record<string, AvatarOption[]>);

  const renderAvatarItem = (avatar: AvatarOption) => (
    <div
      onClick={() => avatar.available && onAvatarSelect(avatar.emoji)}
      className={cn(
        "relative bg-white rounded-xl p-6 border-2 cursor-pointer",
        "transition-all duration-200 hover:shadow-lg",
        avatar.available 
          ? "border-gray-200 hover:border-blue-300 hover:scale-105" 
          : "border-gray-100 cursor-not-allowed opacity-50",
        selectedAvatar === avatar.emoji && "border-blue-500 bg-blue-50 shadow-md"
      )}
    >
      <div className="text-center">
        <div className="text-4xl mb-3">{avatar.emoji}</div>
        <p className="text-xs font-medium text-gray-700 truncate">{avatar.name}</p>
      </div>
      
      {selectedAvatar === avatar.emoji && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      {!avatar.available && (
        <div className="absolute inset-0 bg-white bg-opacity-80 rounded-xl flex items-center justify-center">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-8">
      {Object.entries(groupedAvatars).map(([category, avatars]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
          
          {avatars.length <= 4 ? (
            // Simple grid for 4 or fewer items
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {avatars.map((avatar) => (
                <div key={avatar.id}>
                  {renderAvatarItem(avatar)}
                </div>
              ))}
            </div>
          ) : (
            // Carousel for more than 4 items
            <div className="px-8">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent className="py-8">
                  {avatars.map((avatar) => (
                    <CarouselItem key={avatar.id} className="md:basis-1/3 lg:basis-1/4">
                      {renderAvatarItem(avatar)}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4" />
                <CarouselNext className="-right-4" />
              </Carousel>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarSelector;
