const Footer = () => {
  return (
    <footer className="bg-accent border-t border-border">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-3xl font-black text-primary mb-6">ASHLAUR</h3>
            <p className="text-muted mb-6 leading-relaxed">
              Building Tomorrow, Today. Precision. Power. Performance. Where vision meets extraordinary execution.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted hover:text-primary transition-colors">LinkedIn</a>
              <a href="#" className="text-muted hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-muted hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Commercial Construction</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Infrastructure</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Renovation</a></li>
              <li><a href="#" className="text-muted hover:text-primary transition-colors">Project Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Company</h4>
            <ul className="space-y-4">
              <li><a href="/about" className="text-muted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-muted hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/news" className="text-muted hover:text-primary transition-colors">News</a></li>
              <li><a href="/contact" className="text-muted hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Get In Touch</h4>
            <div className="space-y-4 text-muted">
              <p>123 Construction Ave</p>
              <p>Building City, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@ashlaur.com</p>
            </div>
            <button className="mt-6 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 animate-glow">
              GET QUOTE
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-2xl font-bold text-white mb-2">Stay Connected</h4>
              <p className="text-muted">Get the latest updates on our extraordinary projects.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-surface text-white rounded-l-xl border border-border focus:outline-none focus:border-primary flex-1 md:w-64"
              />
              <button className="bg-primary hover:bg-secondary text-white font-bold px-8 py-3 rounded-r-xl transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted">&copy; 2024 ASHLAUR Construction. All rights reserved. | Building Tomorrow, Today.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;