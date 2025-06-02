
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    username: 'Användarnamn',
    userId: 'dealitsqasim6881',
    email: 'itsqasim688@gmail.com',
    firstName: 'Muhammad Qasim',
    lastName: 'khan',
    phone: '03'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    toast({
      title: "Inställningar sparade!",
      description: "Dina personliga uppgifter har uppdaterats.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/')}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Inställningar</h1>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Personlig information</h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Avatar Section - Left Side */}
              <div className="lg:col-span-3">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-teal-600 flex items-center justify-center text-white text-4xl font-semibold shadow-lg">
                      👨‍💼
                    </div>
                    <button className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                      <Camera className="w-4 h-4" />
                    </button>
                  </div>
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                    Byt stil
                  </Button>
                </div>
              </div>

              {/* Form Fields - Right Side */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <div className="md:col-span-2">
                    <Label htmlFor="username" className="text-sm font-medium text-gray-700 mb-2 block">
                      @ Användarnamn
                    </Label>
                    <Input
                      id="username"
                      value={formData.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* User ID */}
                  <div className="md:col-span-2">
                    <Label className="text-sm font-medium text-gray-500 mb-2 block">
                      User ID
                    </Label>
                    <div className="text-gray-600 py-2">
                      {formData.userId}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                      @ E-post*
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* First Name */}
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      👤 Förnamn*
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      👤 Efternamn*
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div className="md:col-span-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                      📞 Telefon
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full"
                      placeholder="Telefonnummer"
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8">
                  <Button 
                    onClick={handleSave}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    Spara ändringar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
