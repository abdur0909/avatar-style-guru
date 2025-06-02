
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shuffle, RotateCcw } from 'lucide-react';
import AvatarPreview from '@/components/AvatarPreview';
import AvatarSelector from '@/components/AvatarSelector';
import ColorSelector from '@/components/ColorSelector';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('👩‍💼');
  const [selectedColor, setSelectedColor] = useState('#3B82F6');
  const { toast } = useToast();

  const handleSaveAvatar = () => {
    toast({
      title: "Avatar Saved!",
      description: "Your avatar has been successfully updated.",
    });
  };

  const handleRandomAvatar = () => {
    const avatars = ['👩‍💼', '👨‍💼', '👩‍🎨', '👨‍🎨', '👩‍💻', '👨‍💻', '👩‍🎓', '👨‍🎓'];
    const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899', '#06B6D4', '#84CC16'];
    
    const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    setSelectedAvatar(randomAvatar);
    setSelectedColor(randomColor);
    
    toast({
      title: "Random Avatar Generated!",
      description: "Try the new look or customize it further.",
    });
  };

  const handleReset = () => {
    setSelectedAvatar('👩‍💼');
    setSelectedColor('#3B82F6');
    
    toast({
      title: "Avatar Reset",
      description: "Your avatar has been reset to default.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Style Your Avatar</h1>
            <p className="text-gray-600">Customize your profile appearance with our modern avatar builder</p>
          </div>
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <Button
              variant="outline"
              onClick={handleRandomAvatar}
              className="flex items-center space-x-2"
            >
              <Shuffle className="w-4 h-4" />
              <span>Random</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleReset}
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </Button>
            <Button
              onClick={handleSaveAvatar}
              className="bg-blue-600 hover:bg-blue-700 px-6"
            >
              Save Avatar
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Avatar Preview */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <AvatarPreview 
                selectedAvatar={selectedAvatar} 
                selectedColor={selectedColor}
              />
              
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Avatar Details</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Style:</span>
                    <span className="font-medium">{selectedAvatar}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Color:</span>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: selectedColor }}
                      />
                      <span className="font-medium">{selectedColor}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <Tabs defaultValue="avatar" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 h-12 bg-white rounded-none p-0 border-b border-gray-200">
                  <TabsTrigger 
                    value="avatar" 
                    className="relative text-base font-medium py-3 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent text-gray-600 hover:text-gray-900 transition-all duration-200 data-[state=active]:shadow-none bg-transparent"
                  >
                    Choose Avatar
                  </TabsTrigger>
                  <TabsTrigger 
                    value="color" 
                    className="relative text-base font-medium py-3 px-6 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent text-gray-600 hover:text-gray-900 transition-all duration-200 data-[state=active]:shadow-none bg-transparent"
                  >
                    Choose Color
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="avatar" className="mt-0">
                  <AvatarSelector 
                    selectedAvatar={selectedAvatar}
                    onAvatarSelect={setSelectedAvatar}
                  />
                </TabsContent>
                
                <TabsContent value="color" className="mt-0">
                  <ColorSelector 
                    selectedColor={selectedColor}
                    onColorSelect={setSelectedColor}
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Easy Customization</h3>
            </div>
            <p className="text-gray-600 text-sm">Simple and intuitive interface for creating the perfect avatar</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Live Preview</h3>
            </div>
            <p className="text-gray-600 text-sm">See your changes instantly as you customize your avatar</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">More Options</h3>
            </div>
            <p className="text-gray-600 text-sm">Additional avatar styles and customization options coming soon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
