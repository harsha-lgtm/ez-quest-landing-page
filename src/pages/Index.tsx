
import { Calendar, Star, Shield, Users, Clock, CheckCircle, Download, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">EZ</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">Quest</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-green-600 transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-600 hover:text-green-600 transition-colors">Reviews</a>
            <a href="#download" className="text-gray-600 hover:text-green-600 transition-colors">Download</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your One-Stop Service <span className="text-green-600">Booking Platform</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            EZ Quest connects users with verified professionals like doctors, plumbers, carpenters, and more. 
            Book appointments with ease or offer your services by upgrading to a provider account.
          </p>
          
          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative bg-gradient-to-r from-green-100 to-blue-100 rounded-3xl p-12 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: "🏥", label: "Healthcare" },
                  { icon: "🔧", label: "Repairs" },
                  { icon: "🏠", label: "Home Services" },
                  { icon: "💼", label: "Business" }
                ].map((service, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl mb-4">{service.icon}</div>
                    <p className="text-gray-700 font-medium">{service.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full">
              <Download className="mr-2 h-5 w-5" />
              Download the App
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg rounded-full">
              <Users className="mr-2 h-5 w-5" />
              Become a Service Provider
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose EZ Quest?</h2>
            <p className="text-xl text-gray-600">Everything you need for seamless service booking</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: Shield, title: "Verified Providers", desc: "All service providers are verified and background-checked" },
              { icon: Calendar, title: "Smart Scheduling", desc: "In-app calendar with flexible time picker" },
              { icon: Users, title: "Dual-Role Support", desc: "Be both a user and service provider" },
              { icon: Star, title: "Premium Listings", desc: "Paid plans to showcase your services" },
              { icon: CheckCircle, title: "Reviews & Ratings", desc: "Transparent feedback system" }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0 bg-gray-50">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Benefits for Everyone</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Users Benefits */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Users</h3>
              <div className="space-y-4">
                {[
                  "Easy booking with just a few taps",
                  "Secure payments and transactions",
                  "Access to trusted professionals",
                  "Real-time availability updates",
                  "24/7 customer support"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Providers Benefits */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">For Providers</h3>
              <div className="space-y-4">
                {[
                  "Grow your business with new clients",
                  "Flexible scheduling that works for you",
                  "Use the app as both provider and user",
                  "Secure payment processing",
                  "Build your professional reputation"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Homeowner",
                image: "👩‍💼",
                quote: "EZ Quest helped me find a reliable carpenter in 10 minutes! The booking process was so smooth."
              },
              {
                name: "Dr. Michael Chen",
                role: "Healthcare Provider",
                image: "👨‍⚕️",
                quote: "As a provider, EZ Quest has helped me reach more patients and manage my schedule efficiently."
              },
              {
                name: "Lisa Rodriguez",
                role: "Busy Professional",
                image: "👩‍💻",
                quote: "I love how I can book services on-the-go. The app is intuitive and the providers are always professional."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-6xl mb-4">{testimonial.image}</div>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get the EZ Quest App</h2>
              <p className="text-xl text-gray-300 mb-8">
                Download now and start booking services or offering your expertise to thousands of users.
              </p>
              
              <p className="text-lg mb-8 text-gray-300">Available on Android & iOS</p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
                <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg">
                  <Smartphone className="mr-2 h-5 w-5" />
                  App Store
                </Button>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 rounded-3xl inline-block">
                <Smartphone className="h-32 w-32 text-white mx-auto" />
                <p className="text-white mt-4 font-medium">EZ Quest Mobile App</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-green-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start booking or offering services with EZ Quest today!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users and service providers who trust EZ Quest
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-12 py-4 text-xl rounded-full">
            <Download className="mr-2 h-6 w-6" />
            Download Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">EZ</span>
                </div>
                <span className="text-xl font-bold">Quest</span>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted platform for booking services and connecting with verified professionals. 
                Making service booking simple, secure, and efficient.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Terms</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {['📘', '🐦', '📷', '💼'].map((icon, index) => (
                  <a key={index} href="#" className="text-2xl hover:scale-110 transition-transform">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 EZ Quest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
