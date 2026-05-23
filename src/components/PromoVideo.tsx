import { motion } from 'framer-motion';

const PromoVideo = () => {
  return (
    <section id="promo-video" style={{ padding: '40px 0 80px', background: 'var(--bg-primary)' }}>
      <div className="container">
        <div className="section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}
          >
            Lihat Keseruan Belajar!
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tonton video singkat ini untuk melihat bagaimana anak-anak belajar dan bermain dengan aplikasi kami.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            borderRadius: 'var(--radius-xl)', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            background: 'var(--bg-dark)',
            position: 'relative',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '8px solid white'
          }}
        >
          {/* PLACEHOLDER VIDEO - Ganti src dengan URL video YouTube atau source lokal */}
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: 10, background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6))' }}>
            <div 
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'var(--primary-500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 0 0 10px rgba(255, 179, 0, 0.3)',
                marginBottom: '1rem',
                animation: 'pulse 2s infinite'
              }}
            >
              <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: '5px' }}></div>
            </div>
            <p style={{ fontWeight: 600, fontSize: '1.2rem' }}>Klik untuk Memutar Video</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '8px' }}>(Area Placeholder Video Promosi)</p>
          </div>
          
          {/* Background image mockup for video cover */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.5, background: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop") center/cover' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoVideo;
