import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Company',
      href: '/about',
      dropdown: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'Vision, Mission & Values', href: '/vision-mission-values' },
        { name: 'Leadership Team', href: '/leadership-team' },
        { name: 'CSR Initiatives', href: '/csr-initiatives' },
        { name: 'Achievements & Awards', href: '/achievements-awards' }
      ]
    },
    {
      name: 'Manufacturing',
      href: '/manufacturing',
      dropdown: [
        { name: 'Manufacturing Facilities', href: '/manufacturing-facilities' },
        { name: 'Production Processes', href: '/production-processes' },
        { name: 'Quality Control & Testing', href: '/quality-control-testing' },
        { name: 'In-House Tooling & Moulding', href: '/in-house-tooling-moulding' },
        { name: 'Material Compounding', href: '/material-compounding' },
        { name: 'R&D & Innovation', href: '/rd-innovation' }
      ]
    },
    { name: 'Products', href: '/products' },
    {
      name: 'Capabilities',
      href: '/capabilities',
      dropdown: [
        { name: 'In-House Compounding', href: '/capabilities/in-house-compounding' },
        { name: 'Technical Expertise', href: '/capabilities/technical-expertise' },
        { name: 'Testing & Quality Assurance', href: '/capabilities/testing-quality-assurance' },
        { name: 'Product Customization', href: '/capabilities/product-customization' },
        { name: 'Large-Scale Production', href: '/capabilities/large-scale-production' },
        { name: 'Prototype Development', href: '/capabilities/prototype-development' },
        { name: 'Supply Chain & Logistics', href: '/capabilities/supply-chain-logistics' }
      ]
    },
    {
      name: 'Compliance',
      href: '/compliance',
      dropdown: [
        { name: 'Quality Management System', href: '/compliance/quality-management-system' },
        { name: 'Environmental Standards', href: '/compliance/environmental-standards' },
        { name: 'Occupational Health & Safety', href: '/compliance/occupational-health-safety' },
        { name: 'Material Compliance Certifications', href: '/compliance/material-compliance-certifications' }
      ]
    },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Industries Served', href: '/industries' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 h-20 transition-all duration-300`}
      style={{
        backgroundImage: `url('https://i.postimg.cc/htvsSRnZ/Screenshot-2025-06-18-141446.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Millat Polymer Logo"
            className="w-48 lg:w-52 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block text-gray-900 font-medium text-sm xl:text-base tracking-wide">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2">
            {navigationLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <Link
                      to={link.href}
                      className={`relative px-3 xl:px-4 py-3 whitespace-nowrap flex items-center ${
                        location.pathname === link.href ||
                        (link.dropdown && link.dropdown.some(item => location.pathname === item.href))
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                    <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-[9999] pointer-events-none group-hover:pointer-events-auto border border-gray-100">
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-5 py-3 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-colors text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`relative px-3 xl:px-4 py-3 whitespace-nowrap ${
                      location.pathname === link.href
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-blue-600 hover:text-blue-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-block bg-[#6b7280] text-gray-200 px-8 py-2 rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200 font-semibold text-sm"
        >
          get in<br />touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#1e3a8a]"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </header>
  );
};

export default Header;