
import { Calendar, Star, Shield, Users, Clock, CheckCircle, Download, Smartphone } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../bootstrap-custom.css';

const Index = () => {
  return (
    <div className="min-vh-100" style={{background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)'}}>
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-bottom">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <div className="me-2" style={{width: '40px', height: '40px', backgroundColor: '#059669', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span className="text-white fw-bold fs-5">EZ</span>
              </div>
              <span className="fs-2 fw-bold text-dark">Quest</span>
            </div>
            <nav className="d-none d-md-flex">
              <a href="#features" className="text-decoration-none text-muted me-4 hover-green">Features</a>
              <a href="#benefits" className="text-decoration-none text-muted me-4 hover-green">Benefits</a>
              <a href="#testimonials" className="text-decoration-none text-muted me-4 hover-green">Reviews</a>
              <a href="#download" className="text-decoration-none text-muted hover-green">Download</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-1 fw-bold text-dark mb-4">
                Your One-Stop Service <span style={{color: '#059669'}}>Booking Platform</span>
              </h1>
              <p className="fs-4 text-muted mb-5 mx-auto" style={{maxWidth: '700px'}}>
                EZ Quest connects users with verified professionals like doctors, plumbers, carpenters, and more. 
                Book appointments with ease or offer your services by upgrading to a provider account.
              </p>
              
              {/* Hero Image */}
              <div className="mb-5">
                <div className="p-5 mb-4 rounded-5" style={{background: 'linear-gradient(to right, #dcfce7, #dbeafe)'}}>
                  <div className="row g-4">
                    {[
                      { icon: "🏥", label: "Healthcare" },
                      { icon: "🔧", label: "Repairs" },
                      { icon: "🏠", label: "Home Services" },
                      { icon: "💼", label: "Business" }
                    ].map((service, index) => (
                      <div key={index} className="col-6 col-md-3 text-center">
                        <div style={{fontSize: '3.5rem'}} className="mb-3">{service.icon}</div>
                        <p className="text-dark fw-medium">{service.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button className="btn btn-lg text-white px-4 py-3 rounded-pill" style={{backgroundColor: '#059669', fontSize: '1.1rem'}}>
                  <Download className="me-2" style={{width: '20px', height: '20px'}} />
                  Download the App
                </button>
                <button className="btn btn-outline-success btn-lg px-4 py-3 rounded-pill" style={{fontSize: '1.1rem', borderColor: '#059669', color: '#059669'}}>
                  <Users className="me-2" style={{width: '20px', height: '20px'}} />
                  Become a Service Provider
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">Why Choose EZ Quest?</h2>
            <p className="fs-4 text-muted">Everything you need for seamless service booking</p>
          </div>
          
          <div className="row g-4">
            {[
              { icon: Shield, title: "Verified Providers", desc: "All service providers are verified and background-checked" },
              { icon: Calendar, title: "Smart Scheduling", desc: "In-app calendar with flexible time picker" },
              { icon: Users, title: "Dual-Role Support", desc: "Be both a user and service provider" },
              { icon: Star, title: "Premium Listings", desc: "Paid plans to showcase your services" },
              { icon: CheckCircle, title: "Reviews & Ratings", desc: "Transparent feedback system" }
            ].map((feature, index) => (
              <div key={index} className="col-lg-2 col-md-4 col-sm-6">
                <div className="card text-center p-4 h-100 border-0" style={{backgroundColor: '#f9fafb'}}>
                  <div className="card-body p-0">
                    <feature.icon style={{width: '48px', height: '48px', color: '#059669'}} className="mx-auto mb-3" />
                    <h5 className="fw-semibold text-dark mb-2">{feature.title}</h5>
                    <p className="small text-muted">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-5" style={{backgroundColor: '#f0fdf4'}}>
        <div className="container">
          <h2 className="display-4 fw-bold text-center text-dark mb-5">Benefits for Everyone</h2>
          
          <div className="row g-4">
            {/* Users Benefits */}
            <div className="col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h3 className="fs-2 fw-bold text-dark mb-4 text-center">For Users</h3>
                <div className="vstack gap-3">
                  {[
                    "Easy booking with just a few taps",
                    "Secure payments and transactions",
                    "Access to trusted professionals",
                    "Real-time availability updates",
                    "24/7 customer support"
                  ].map((benefit, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <CheckCircle style={{width: '20px', height: '20px', color: '#059669'}} className="me-3 flex-shrink-0" />
                      <span className="text-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Providers Benefits */}
            <div className="col-md-6">
              <div className="bg-white p-4 rounded-4 shadow-sm h-100">
                <h3 className="fs-2 fw-bold text-dark mb-4 text-center">For Providers</h3>
                <div className="vstack gap-3">
                  {[
                    "Grow your business with new clients",
                    "Flexible scheduling that works for you",
                    "Use the app as both provider and user",
                    "Secure payment processing",
                    "Build your professional reputation"
                  ].map((benefit, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <CheckCircle style={{width: '20px', height: '20px', color: '#059669'}} className="me-3 flex-shrink-0" />
                      <span className="text-muted">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-3">What Our Users Say</h2>
            <p className="fs-4 text-muted">Real experiences from real people</p>
          </div>
          
          <div className="row g-4">
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
              <div key={index} className="col-md-4">
                <div className="card p-4 text-center h-100 shadow-sm">
                  <div className="card-body p-0">
                    <div style={{fontSize: '3.5rem'}} className="mb-3">{testimonial.image}</div>
                    <div className="d-flex justify-content-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} style={{width: '20px', height: '20px', color: '#fbbf24', fill: 'currentColor'}} />
                      ))}
                    </div>
                    <p className="text-muted mb-3 fst-italic">"{testimonial.quote}"</p>
                    <h5 className="fw-semibold text-dark">{testimonial.name}</h5>
                    <p className="small text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section id="download" className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-6">
              <h2 className="display-4 fw-bold mb-4">Get the EZ Quest App</h2>
              <p className="fs-4 mb-4" style={{color: '#d1d5db'}}>
                Download now and start booking services or offering your expertise to thousands of users.
              </p>
              
              <p className="fs-5 mb-4" style={{color: '#d1d5db'}}>Available on Android & iOS</p>
              
              <div className="d-flex flex-column flex-sm-row gap-3">
                <button className="btn bg-white text-dark px-4 py-3 rounded-3">
                  <Smartphone className="me-2" style={{width: '20px', height: '20px'}} />
                  Google Play
                </button>
                <button className="btn bg-white text-dark px-4 py-3 rounded-3">
                  <Smartphone className="me-2" style={{width: '20px', height: '20px'}} />
                  App Store
                </button>
              </div>
            </div>
            
            <div className="col-md-6 text-center">
              <div className="d-inline-block p-5 rounded-5" style={{background: 'linear-gradient(135deg, #059669, #2563eb)'}}>
                <Smartphone style={{width: '128px', height: '128px'}} className="text-white mx-auto d-block" />
                <p className="text-white mt-3 fw-medium">EZ Quest Mobile App</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 text-white" style={{backgroundColor: '#059669'}}>
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-3 fw-bold mb-4">
                Start booking or offering services with EZ Quest today!
              </h2>
              <p className="fs-4 mb-4" style={{opacity: '0.9'}}>
                Join thousands of users and service providers who trust EZ Quest
              </p>
              <button className="btn bg-white text-success btn-lg px-5 py-3 fs-4 rounded-pill" style={{color: '#059669'}}>
                <Download className="me-2" style={{width: '24px', height: '24px'}} />
                Download Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div className="me-2" style={{width: '32px', height: '32px', backgroundColor: '#059669', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span className="text-white fw-bold">EZ</span>
                </div>
                <span className="fs-4 fw-bold">Quest</span>
              </div>
              <p style={{color: '#d1d5db'}} className="mb-3">
                Your trusted platform for booking services and connecting with verified professionals. 
                Making service booking simple, secure, and efficient.
              </p>
            </div>
            
            <div className="col-md-3">
              <h5 className="fw-semibold mb-3">Quick Links</h5>
              <div className="vstack gap-2">
                <a href="#" className="text-decoration-none" style={{color: '#d1d5db'}}>About</a>
                <a href="#" className="text-decoration-none" style={{color: '#d1d5db'}}>Contact</a>
                <a href="#" className="text-decoration-none" style={{color: '#d1d5db'}}>Terms</a>
                <a href="#" className="text-decoration-none" style={{color: '#d1d5db'}}>Privacy</a>
              </div>
            </div>
            
            <div className="col-md-3">
              <h5 className="fw-semibold mb-3">Follow Us</h5>
              <div className="d-flex gap-3">
                {['📘', '🐦', '📷', '💼'].map((icon, index) => (
                  <a key={index} href="#" className="text-decoration-none fs-3">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <hr className="my-4" style={{borderColor: '#374151'}} />
          <div className="text-center">
            <p style={{color: '#9ca3af'}} className="mb-0">© 2024 EZ Quest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
