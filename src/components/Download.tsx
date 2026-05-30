import { motion } from 'framer-motion';
import APP_DATA from '../data/content';

const Download = () => {
  return (
    <section id="download" style={{ background: 'var(--bg-dark)', color: 'white', textAlign: 'center', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            {APP_DATA.download.title}
          </h2>
          <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto 3rem auto', fontSize: '1.125rem' }}>
            {APP_DATA.download.subtitle}
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <motion.a
              href={APP_DATA.download.apkUrl}
              download
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '1.25rem',
                padding: '20px 50px',
                animation: 'pulse 2s infinite',
              }}
            >
              {APP_DATA.download.buttonText}
            </motion.a>

            <motion.a
              href={`mailto:${APP_DATA.email}?subject=Permintaan%20Aplikasi%20Belajar%20Anak`}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '1.25rem',
                padding: '20px 50px',
                border: '2px solid white',
                color: 'white',
                background: 'transparent',
              }}
            >
              {APP_DATA.download.emailButtonText}
            </motion.a>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              *Klik tombol di atas untuk download APK langsung, atau kirim email jika ingin minta link.
            </p>
          </div>
          
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.7 }}>
            {APP_DATA.download.trustBadges.map((badge, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
