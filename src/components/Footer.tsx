import APP_DATA from '../data/content';

const Footer = () => {
  return (
    <footer id="contact" style={{ background: '#111', color: 'white', padding: '80px 0 40px 0' }}>
      <div className="container">
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '60px',
            marginBottom: '60px'
          }}
        >
          {/* Logo & About */}
          <div>
            <span style={{ fontFamily: "'Fredoka One', cursive", color: 'var(--primary-400)', fontSize: '1.8rem', display: 'block', marginBottom: '1.5rem' }}>
              <img src="/promosi/icon.png" alt="icon" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '8px' }} /> {APP_DATA.appName}
            </span>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>
              {APP_DATA.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Navigasi</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {APP_DATA.footer.quickLinks.map((link, i) => (
                <li key={i}><a href={`#${link.toLowerCase()}`} style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }}>{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Hubungi Kami</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)' }}>
              <li>📧 {APP_DATA.footer.contact.email}</li>
            </ul>
          </div>
        </div>

        <div 
          style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '30px', 
            textAlign: 'center', 
            color: 'rgba(255,255,255,0.4)',
            fontSize: '0.9rem'
          }}
        >
          <p>© {new Date().getFullYear()} {APP_DATA.appName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
