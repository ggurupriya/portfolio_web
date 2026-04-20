import { motion } from 'framer-motion';
import { Code2, ExternalLink, Mail } from 'lucide-react';

const C = { navy: '#080c14', muted: '#111927', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', slate: '#1e293b' } as const;

const socials = [
  { icon: Code2, label: 'GitHub', href: 'https://github.com/' },
  { icon: ExternalLink, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: Mail, label: 'Email', href: 'mailto:gurupriya@example.com' },
];

const Contact = () => (
  <footer id="contact" style={{ position: 'relative', padding: '128px 48px', background: C.muted, borderTop: `1px solid ${C.slate}`, overflow: 'hidden' }}>
    {/* Background radial glow */}
    <div style={{
      position: 'absolute', top: '50%', left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 700, height: 700, borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(56,189,248,0.055) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 56 }}
      >
        <div style={{ height: 1, width: 64, background: C.slate }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase' }}>06. Get In Touch</span>
        <div style={{ height: 1, width: 64, background: C.slate }} />
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', fontWeight: 700, color: C.snow, margin: '0 0 20px', lineHeight: 1.05 }}
      >
        Let's{' '}
        <span style={{ color: C.sky }} className="text-glow">Connect</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
        style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: C.silver, lineHeight: 1.75, maxWidth: 480, margin: '0 auto 40px' }}
      >
        Open to internships, research collaborations, or a conversation about ML and systems.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="mailto:gurupriya@example.com"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        whileHover={{ scale: 1.04 }}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          fontFamily: 'JetBrains Mono, monospace', fontSize: 14,
          background: C.sky, color: C.navy,
          padding: '14px 36px',
          textDecoration: 'none',
          marginBottom: 56,
          transition: 'all 0.3s',
        }}
        className="glow-blue"
      >
        <Mail style={{ width: 16, height: 16 }} />
        Say Hello →
      </motion.a>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 72 }}
      >
        {socials.map(({ icon: Icon, label, href }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            whileHover={{ y: -4 }}
            style={{ color: C.silver, textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => (e.currentTarget.style.color = C.sky)}
            onMouseLeave={e => (e.currentTarget.style.color = C.silver)}
          >
            <Icon style={{ width: 20, height: 20 }} strokeWidth={1.5} />
          </motion.a>
        ))}
      </motion.div>

      {/* Footer bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: `1px solid ${C.slate}` }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>
          Designed & Built by <span style={{ color: C.sky }}>Guru Priya G</span>
        </span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>© 2026</span>
      </div>

    </div>
  </footer>
);

export default Contact;
