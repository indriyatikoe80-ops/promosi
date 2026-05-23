import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const Pricing = () => {
  return (
    <section id="pricing" style={{ padding: '80px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255, 179, 0, 0.2)', padding: '6px 16px', borderRadius: '20px', fontWeight: 600, marginBottom: '1rem', color: 'var(--primary-500)' }}>
            Lisensi Premium
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}
          >
            Bermain Nyaman Tanpa Iklan
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Aplikasi Belajar Anak sepenuhnya GRATIS! Namun, jika Anda ingin pengalaman belajar 100% tanpa gangguan iklan, pilih paket lisensi premium di bawah ini.
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          alignItems: 'center',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {APP_DATA.pricing.map((tier, index) => (
            <motion.div 
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
              style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px 30px',
                boxShadow: tier.isPopular ? 'var(--shadow-yellow)' : 'var(--shadow-md)',
                position: 'relative',
                border: tier.isPopular ? '2px solid var(--primary-500)' : '2px solid transparent',
                transform: tier.isPopular ? 'scale(1.05)' : 'scale(1)',
                zIndex: tier.isPopular ? 10 : 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              {tier.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-warm)',
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  TERPOPULER
                </div>
              )}
              
              <h3 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                {tier.name}
              </h3>
              
              <div style={{ marginBottom: '20px' }}>
                <span style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '1rem', marginRight: '8px' }}>
                  {tier.originalPrice}
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                    {tier.price}
                  </span>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{tier.duration}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0', flex: 1 }}>
                {tier.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                    <span style={{ color: 'var(--secondary-400)', fontSize: '1.2rem' }}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', padding: '12px', borderRadius: '12px' }}
                onClick={() => alert("Lisensi dapat dibeli langsung di dalam aplikasi!")}
              >
                Beli di Aplikasi
              </button>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
            * Semua pembelian lisensi dilakukan aman langsung melalui menu pengaturan di dalam Aplikasi Belajar Anak.
          </p>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 992px) {
          #pricing > .container > div:nth-child(2) > div {
            transform: scale(1) !important;
          }
        }
      `}} />
    </section>
  );
};

export default Pricing;
