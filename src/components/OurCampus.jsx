import React from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    src: "/campus1.jpg",
    alt: "University Campus Main View",
    gridArea: "1 / 1 / 3 / 3" // Large left square
  },
  {
    src: "/campus2.jpg",
    alt: "Campus Facilities & Buildings",
    gridArea: "1 / 3 / 2 / 4" // Top middle square
  },
  {
    src: "/campus3.jpg",
    alt: "Lush Green Pathways & Grounds",
    gridArea: "1 / 4 / 2 / 5" // Top right square
  },
  {
    src: "/campus4.jpg",
    alt: "Modern Academic Blocks",
    gridArea: "2 / 3 / 3 / 4" // Bottom middle square
  },
  {
    src: "/campus5.jpg",
    alt: "State-of-the-art Infrastructure",
    gridArea: "2 / 4 / 3 / 5" // Bottom right square
  }
]

const OurCampus = () => {
  return (
    <section id="campus" style={{ 
      backgroundColor: '#ffffff', 
      padding: '100px 0',
      color: '#1f2937'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ 
            color: 'var(--primary-color)', 
            fontSize: '0.78rem', 
            fontWeight: 700, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '16px'
          }}>
            Campus Infrastructure
          </div>
          <h2 style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', 
            fontWeight: 600,
            color: '#0f172a',
            lineHeight: 1.2,
            marginBottom: '20px'
          }}>
            Explore the Campus of <span style={{ color: 'var(--primary-color)', fontStyle: 'italic' }}>SGVU</span>
          </h2>
          <p style={{ 
            color: '#4b5563', 
            fontSize: '1.08rem', 
            lineHeight: 1.7, 
            maxWidth: '720px', 
            margin: '0 auto' 
          }}>
            A sprawling, state-of-the-art green campus in Jaipur equipped with modern academic blocks, advanced psychology laboratories, and world-class infrastructure.
          </p>
        </motion.div>

        {/* CSS Grid Gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 300px)',
          gap: '16px',
        }}>
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                gridArea: img.gridArea,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                position: 'relative'
              }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Mobile-friendly overrides */}
      <style>{`
        @media (max-width: 768px) {
          #campus .container > div:last-child {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          #campus .container > div:last-child > div {
            grid-area: auto !important;
            height: 250px;
          }
        }
      `}</style>
    </section>
  )
}

export default OurCampus
