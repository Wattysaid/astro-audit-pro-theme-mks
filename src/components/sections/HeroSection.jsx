import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, Play } from 'lucide-react';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              The <span className="marker-underline">complete</span>{' '}
              hotel audit platform
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover best-fit hotels, craft winning audit reports, and manage your audits — all in one place.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white py-6 px-8 rounded-md">
              Try 14 days free
            </Button>
            <p className="text-sm text-gray-500 mt-4">Only 14 free trials left this week.</p>
          </div>
          
          <div className="relative bg-white p-6 rounded-xl shadow-lg">
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-gray-600">Marriott Grand Hotel</p>
                  <p className="text-xs text-gray-500">The Luxury Collection</p>
                </div>
                <p className="text-lg font-bold text-black">$50,000</p>
              </div>
              <Button size="sm" variant="outline" className="text-orange-500 border-orange-500 w-full">
                <span className="mr-2">❤</span> Save
              </Button>
            </div>
            
            <div className="relative mt-4 mb-8 h-48 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer"
                 onClick={() => setVideoOpen(true)}>
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500">10</p>
                <p className="text-sm font-medium">Auditor Deadline</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500">17</p>
                <p className="text-sm font-medium">Task Due</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogClose className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
            <X className="h-5 w-5" />
          </DialogClose>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
            <p className="text-white">Video placeholder - Demo of Audit Pro platform</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HeroSection;
