import React from 'react';
import { Menu, X, Heart, Cake, GlassWater, PartyPopper, ChevronRight, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Music2, MessageCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showWhatsApp, setShowWhatsApp] = React.useState(false);

  const services = [
    { 
      icon: Heart, 
      title: 'Wedding Decorations', 
      description: 'Transform your special day into a magical celebration with our elegant wedding decorations. We specialize in both traditional African and modern wedding themes, offering:',
      features: [
        'Custom backdrop designs',
        'Traditional ceremony setups',
        'Reception area styling',
        'Floral arrangements',
        'Lighting design'
      ]
    },
    { 
      icon: Cake, 
      title: 'Birthday Parties', 
      description: 'Create unforgettable birthday memories with our creative and vibrant party setups. Our birthday decoration services include:',
      features: [
        'Theme-based decorations',
        'Balloon arrangements',
        'Custom photo areas',
        'Table settings',
        'Kids party specialties'
      ]
    },
    { 
      icon: GlassWater, 
      title: 'Corporate Events', 
      description: 'Elevate your corporate events with our professional and sophisticated decoration services. We offer:',
      features: [
        'Conference room styling',
        'Award ceremony setups',
        'Brand-aligned designs',
        'Exhibition booth decoration',
        'Networking event ambiance'
      ]
    },
    { 
      icon: PartyPopper, 
      title: 'Cultural Ceremonies', 
      description: 'Celebrate your cultural heritage() with our authentic and traditional decoration themes. We specialize in:',
      features: [
        'Traditional ceremony setups',
        'Cultural symbol integration',
        'Custom backdrop designs',
        'Traditional color schemes',
        'Ceremonial area styling'
      ]
    },
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&q=80", alt: "African wedding decoration" },
    { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", alt: "Traditional African wedding" },
    { url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80", alt: "Traditional ceremony setup" },
    { url: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80", alt: "African wedding setup" },
    { url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80", alt: "Wedding reception" },
    { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80", alt: "Outdoor wedding setup" },
    { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80", alt: "Traditional wedding ceremony" },
    { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80", alt: "Wedding decoration" },
    { url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80", alt: "Wedding setup" },
    { url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80", alt: "African celebration" },
    { url: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80", alt: "Cultural wedding" },
    { url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80", alt: "Traditional celebration" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-800 text-white">
                <PartyPopper className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-purple-800">Petals Decor</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-800">Home</a>
              <a href="#services" className="text-gray-700 hover:text-purple-800">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-purple-800">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-800">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-purple-800">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-800">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-gray-700 hover:text-purple-800">Gallery</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-800">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16">
        <video 
          autoPlay 
          loop 
          muted 
          className="w-full h-[600px] object-cover"
          poster="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80"
        >
          <source src="https://player.vimeo.com/external/374545566.sd.mp4?s=9943177c29f20244ef62accb46e757d1e6b95a87&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Creating Magical Moments</h1>
            <p className="text-xl md:text-2xl mb-8">Transform your events into unforgettable experiences</p>
            <a href="#contact" className="bg-purple-800 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300">
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <service.icon className="w-12 h-12 text-purple-800 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <ChevronRight className="w-4 h-4 text-purple-800 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover rounded-lg shadow-md transition duration-300 transform group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition duration-300">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  <span>+256 782713764</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>info@petalsdeco.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>Kampala, Uganda</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition duration-300">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition duration-300">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition duration-300">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition duration-300">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition duration-300">
                    <Music2 className="w-6 h-6" />
                  </a>
                  <button 
                    onClick={() => setShowWhatsApp(true)} 
                    className="hover:text-purple-300 transition duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg text-gray-900" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg text-gray-900" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-lg text-gray-900"></textarea>
              <button type="submit" className="bg-white text-purple-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Bot */}
      {showWhatsApp && (
        <div className="fixed bottom-4 right-4 bg-white text-gray-900 p-4 rounded-lg shadow-xl z-50">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold">WhatsApp Chat</h4>
            <button onClick={() => setShowWhatsApp(false)} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <p className="mb-4">Chat with us on WhatsApp!</p>
          <a 
            href="https://wa.me/256782713764" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-lg inline-flex items-center hover:bg-green-600 transition duration-300"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Chat
          </a>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Petals Decor. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;