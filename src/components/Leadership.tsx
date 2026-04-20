import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const C = { navy: '#080c14', surface: '#0d1525', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', green: '#34d399', slate: '#1e293b' } as const;

const preview = {
  title: 'Leadership & Extracurriculars',
  subtitle: 'Beyond the Code',
  description: 'Explore my achievements in technical club leadership, workshops, hackathons, and community engagement — showcasing teamwork and commitment to growing the tech community.'
};

const Leadership = () => (
  <section id="leadership" style={{ position: 'relative', padding: '128px 48px', background: C.navy }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 80 }}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: C.sky }}>05.</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Leadership & Extracurriculars</span>
        <div style={{ height: 1, background: C.slate, width: 180 }} />
      </motion.div>

      {/* Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        whileHover={{ y: -4, borderColor: 'rgba(56,189,248,0.4)' }}
        style={{
          width: '100%',
          border: '1.5px solid rgba(56,189,248,0.2)',
          background: `linear-gradient(135deg, rgba(56,189,248,0.08) 0%, rgba(13,21,37,0.4) 100%)`,
          padding: '64px 56px',
          borderRadius: '12px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s',
          cursor: 'default',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(56,189,248,0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: `linear-gradient(90deg, transparent, rgba(56,189,248,0.4), transparent)`,
        }} />

        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Content */}
        <motion.div style={{ position: 'relative', zIndex: 1 }}>
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 12,
              color: C.sky,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: '0 0 16px',
              fontWeight: 500,
            }}
          >
            {preview.subtitle}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: C.snow,
              margin: '0 0 24px',
              lineHeight: 1.2,
            }}
          >
            {preview.title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16,
              color: C.silver,
              lineHeight: 1.8,
              margin: '0 0 40px',
              maxWidth: 600,
            }}
          >
            {preview.description}
          </motion.p>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to="/leadership"
              style={{ textDecoration: 'none' }}
            >
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.silver,
                  background: 'transparent',
                  border: `1.5px solid rgba(56,189,248,0.3)`,
                  padding: '12px 32px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.6)';
                  e.currentTarget.style.color = C.sky;
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(56,189,248,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)';
                  e.currentTarget.style.color = C.silver;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                View All
                <ArrowRight style={{ width: 16, height: 16 }} strokeWidth={2} />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Leadership;
