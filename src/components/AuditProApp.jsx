import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import { X, Play, Star } from 'lucide-react';

const HeroSection = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <div className="relative bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              The complete <span className="relative">
                hotel audit platform
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 -z-10"></span>
              </span>
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

const ScrollingLogos = () => {
  const logos = [
    "Hilton", "Marriott", "Hyatt", "Four Seasons", "Ritz Carlton", 
    "Sheraton", "Holiday Inn", "Best Western", "Westin", "Wyndham"
  ];
  
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-10">
          Trusted by over 4,000 hotels
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex">
            {logos.map((logo, index) => (
              <div key={index} className="mx-8 w-40 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                {logo}
              </div>
            ))}
            {logos.map((logo, index) => (
              <div key={`repeat-${index}`} className="mx-8 w-40 h-16 bg-gray-100 rounded flex items-center justify-center text-gray-600">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src="/api/placeholder/400/400" 
              alt="Audit Pro Features" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              You Can Do It All With <span className="text-orange-500">Audit Pro</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the future of hotel auditing with Audit Pro.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  DISCOVER
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Find hotels to audit</h3>
                  <p className="text-gray-600">Access our database of hotels looking for quality audits.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  APPLY
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Apply for opportunities</h3>
                  <p className="text-gray-600">Submit applications to audit hotels that match your expertise.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  REPORT
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Create detailed reports</h3>
                  <p className="text-gray-600">Use our templates to create professional audit reports.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MatchFinder = () => {
  return (
    <div className="py-16 bg-indigo-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find Best-Fit Hotels In
              <span className="relative ml-2">
                Seconds
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 -z-10"></span>
              </span>
              , Not Weeks
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Discover relevant auditing opportunities instantly, explore over 20,000 expert-curated hotels, and find best-fit audits from a database of over 400,000. See who is supporting your peers with Peer Prospecting.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <p className="text-center text-lg font-medium text-gray-700 mb-4">
                You have <span className="font-bold text-blue-600">87</span> new matches!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">First Class Hotels</p>
                    <p className="text-sm text-gray-600">Hilton Foundation</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4">$50,000</p>
                    <Button variant="outline" className="text-orange-500 border-orange-500">
                      <span className="mr-1">❤</span> Save
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Luxury Staycations</p>
                    <p className="text-sm text-gray-600">Zendesk</p>
                  </div>
                  <div className="flex items-center">
                    <p className="font-medium mr-4">$10,000</p>
                    <Button variant="outline" className="text-orange-500 border-orange-500">
                      <span className="mr-1">❤</span> Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ManagementSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Streamline Audit Management And
              <span className="relative ml-2">
                Meet Every Deadline
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 -z-10"></span>
              </span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Streamline your workflow with automated deadlines, task tracking, and portfolio overviews. Boost teamwork with shared docs, reminders, and calendar integration. Tailor the platform to fit your needs.
            </p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="flex justify-between mb-4">
                <div className="space-y-1">
                  <p className="font-medium">Overview</p>
                </div>
                <div className="flex space-x-4">
                  <p className="text-sm text-gray-500">Payments</p>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">Tasks</p>
                    <span className="ml-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">8</span>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-500">Documents</p>
                    <span className="ml-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center text-xs">3</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-yellow-500">★</span>
                <h3 className="text-lg font-medium">Luxury Resort Audit</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Submission Date:</p>
                  <p className="text-sm">Jan 15, 2023</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Date Notified:</p>
                  <p className="text-sm">Mar 1, 2023</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Amount Requested:</p>
                  <p className="text-sm">$500,000</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Start of Audit Period:</p>
                  <p className="text-sm">Jan 15, 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Full Report:</p>
                  <p className="text-sm text-blue-600">📄 Full Report</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">End of Audit Period:</p>
                  <p className="text-sm">Jan 15, 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProposalSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-100 rounded-lg p-6 h-80 flex items-center justify-center">
            <img 
              src="/api/placeholder/400/280" 
              alt="Proposal Templates" 
              className="rounded-lg shadow"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Craft high-quality
              <span className="relative ml-2">
                report drafts
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 -z-10"></span>
              </span>
              in 5 minutes
            </h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Enhance audit report writing with AI that learns from past applications, resurfacing your best ideas. Centralize documents securely and access active audit applications with one click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Audit Pro is a one-stop shop where I can research and track hotels all in one place.",
      name: "Beth Kander-Dauphin",
      title: "Chief Strategist Officer",
      company: "Goldring/Woldenberg Institute of Southern Jewish Life"
    },
    {
      quote: "Audit Pro has fundamentally changed the way we work, especially finding accommodations that really fit us.",
      name: "Theresa Anderson",
      title: "Director of Development",
      company: "Salesian Sisters of Tampa, Inc."
    },
    {
      quote: "Audit Pro is an all-year round platform we can track on a year-on-year basis. We got history in there, we got documents in there. It just makes everything easier.",
      name: "Beth Noble",
      title: "Senior Audit Administrator",
      company: "Phoenix Children's Foundation"
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-orange-400" fill="#f97316" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Teams of 1 to 100 Win More with Audit Pro
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white shadow-md transition-all duration-500 transform ${index === activeIndex ? 'scale-105' : 'scale-100'}`}>
              <CardContent className="p-6">
                <div className="text-3xl text-blue-300 mb-4">❝</div>
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="link" className="text-blue-600 p-0">
                    Read more stories →
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Try 14 days for free
          </Button>
        </div>
      </div>
    </div>
  );
};

const FundersSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto max-w-7xl">
        <p className="text-center text-xl text-gray-700 mb-8">
          Over $1 billion in active audits from hotels like:
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Marriott</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Hilton</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Hyatt</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Four Seasons</div>
          <div className="w-32 h-16 flex items-center justify-center text-gray-400">Ritz Carlton</div>
        </div>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-orange-100 to-blue-100">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          The only 
          <span className="relative mx-2">
            complete audit solution
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-orange-200 -z-10"></span>
          </span>
        </h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Since 2015, over 4,000 organizations have used Audit Pro to find, win more audit opportunities, empowering them to expand their impact on critical missions such as evaluating luxury hotels, ensuring guest satisfaction, and improving hospitality standards.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input 
            type="email" 
            placeholder="Enter your work email address" 
            className="px-4 py-3 rounded-md border border-gray-300 flex-grow"
          />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
            Start your free trial
          </Button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-orange-500 text-2xl font-bold mb-6">audit pro</h3>
            <div className="flex space-x-4 text-gray-600">
              <span>in</span>
              <span>f</span>
              <span>x</span>
              <span>yt</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Explore Hotels</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Explore Chains</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Best Practices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Why Audit Pro</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">How We're Different</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Success Stories</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Testimonials</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Ebooks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Newsletter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-sm text-gray-600">
          © 2025, Audit Pro. All rights reserved
        </div>
      </div>
    </footer>
  );
};

const AuditProApp = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-4 border-b border-gray-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex justify-between items-center">
            <div className="text-orange-500 text-2xl font-bold">audit pro</div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">Platform</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Log In</a>
            </nav>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Try 14 days free
            </Button>
          </div>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <ScrollingLogos />
        <FeatureSection />
        <MatchFinder />
        <ManagementSection />
        <ProposalSection />
        <TestimonialsSection />
        <FundersSection />
        <CTASection />
      </main>
      
      <Footer />
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AuditProApp;
