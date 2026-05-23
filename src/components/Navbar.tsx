import { useState, useEffect } from 'react';
import APP_DATA from '../data/content';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Fitur', href: '#features' },
    { name: 'Tampilan', href: '#screenshots' },
    { name: 'Lisensi', href: '#pricing' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <nav 
      id="navbar" 
      className={isScrolled ? 'scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        padding: isScrolled ? '12px 0' : '20px 0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none',
      }}
    >
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span 
              className="nav-brand" 
              style={{ 
                fontFamily: "'Fredoka One', cursive", 
                color: isScrolled ? 'var(--primary-400)' : 'var(--text-primary)', 
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center'
              }}
            >
            <img src="/promosi/icon.png" alt="icon" style={{ width: '28px', height: '28px', marginRight: '8px' }} /> {APP_DATA.appName}
          </span>
        </div>
        
        <ul 
          className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
          style={{ 
            display: 'flex', 
            gap: '24px',
            ...(isMobileMenuOpen && {
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              background: 'var(--bg-card)',
              flexDirection: 'column',
              padding: '20px',
              boxShadow: 'var(--shadow-md)',
              display: 'flex'
            })
          }}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  fontWeight: 600, 
                  transition: 'color 0.3s ease',
                  color: 'var(--text-primary)'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <button 
          className="hamburger" 
          id="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--text-primary)'
            }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          #hamburger { display: block !important; }
          .nav-links { display: none !important; }
          .nav-links.active { display: flex !important; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
