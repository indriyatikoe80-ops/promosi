import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Screenshots = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
    
    // Update width on window resize
    const handleResize = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="screenshots" style={{ padding: '100px 0', background: 'var(--bg-dark)', color: 'white', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Tampilan <span className="text-gradient">Aplikasi</span></h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Desain ceria dan antarmuka yang ramah anak</p>
        </div>

        <motion.div 
          ref={carouselRef} 
          style={{ cursor: 'grab', overflow: 'hidden', paddingBottom: '30px' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div 
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ 
              display: 'flex', 
              gap: '20px',
              width: 'max-content'
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                style={{
                  minWidth: '260px',
                  height: '460px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  pointerEvents: 'none' /* Prevents child from interfering with drag */
                }}
              >
                <div style={{ textAlign: 'center', opacity: 0.5 }}>
                  <p style={{ fontSize: '3rem' }}>📱</p>
                  <p>Screenshot {i}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <p style={{ textAlign: 'center', marginTop: '10px', opacity: 0.5, fontSize: '0.9rem' }}>
          ↔ Klik dan geser untuk melihat lebih banyak
        </p>
      </div>
    </section>
  );
};

export default Screenshots;
