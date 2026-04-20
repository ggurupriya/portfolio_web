import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';

const C = { navy: '#080c14', surface: '#0d1525', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', green: '#34d399', slate: '#1e293b' } as const;

interface Project {
  id: number; num: string; title: string; tagline: string;
  category: string; year: string; tech: string[];
  bullets: string[]; featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1, num: '01', title: 'InstantBlock', tagline: 'Phishing Attack Discovery',
    category: 'ML · Security', year: 'Apr 2026', featured: true,
    tech: ['Python', 'Scikit-learn', 'Random Forest', 'Flask', 'Chrome Extension'],
    bullets: [
      'Browser Extension identifying "Zero-Day" phishing sites via URL mathematical structure — no blacklists required.',
      'Random Forest on 13 URL features (domain entropy, char ratios, length) → 93% detection accuracy.',
      'Flask backend processes links in milliseconds, triggering instant "BLOCKED" overlay on malicious domains.',
    ],
  },
  {
    id: 2, num: '02', title: 'MorphPot', tagline: 'Adaptive Honeypot',
    category: 'Cybersecurity · ML', year: 'Jan 2026',
    tech: ['Python', 'Scikit-learn', 'Elasticsearch', 'Kibana', 'SSH'],
    bullets: [
      'Interactive SSH honeypot with behavioral anomaly detection — identifies zero-day attack patterns without signatures.',
      'Automated payload analysis, anomaly scoring, IoC generation, and real-time threat monitoring dashboard.',
    ],
  },
  {
    id: 3, num: '03', title: 'Sleep Apnea Screening', tagline: 'Wearable Health Analytics',
    category: 'Data Science · Healthcare', year: 'Sep 2025',
    tech: ['Python', 'XGBoost', 'Data Analytics', 'LOSO Validation'],
    bullets: [
      'XGBoost on multi-modal wrist data achieving 94% sensitivity across 50 subjects via LOSO validation.',
      'Custom 0.2 threshold corrects optical sensor bias — identified 15/16 at-risk patients, minimizing false negatives.',
    ],
  },
  {
    id: 4, num: '04', title: 'GPU Autoscaler', tagline: 'SLA-Aware Resource Orchestration',
    category: 'Systems · Simulation', year: 'Feb 2026',
    tech: ['Python', 'Discrete Event Simulation', 'L40S', 'A100', 'H100'],
    bullets: [
      'Discrete-event simulation for resource allocation across heterogeneous GPU clusters (L40S, A100, H100).',
      'Queue-length + utilization scaling strategy improving responsiveness under varying workloads.',
      'Reduced latency ~48%, cost ~22.7%, SLA violations from 75% → 23.7%.',
    ],
  },
];

const Projects = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const sel = projects.find(p => p.id === selected);

  return (
    <section id="projects" style={{ position: 'relative', padding: '128px 48px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 72 }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: C.sky }}>03.</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Projects</span>
          <div style={{ height: 1, background: C.slate, width: 180 }} />
        </motion.div>

        {/* Project list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelected(p.id)}
              style={{
                border: '1px solid rgba(30,41,59,0.8)',
                background: C.surface,
                padding: '28px 32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 28,
                transition: 'border-color 0.35s, background 0.35s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.35)'; (e.currentTarget as HTMLElement).style.background = '#0d1a2d'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)'; (e.currentTarget as HTMLElement).style.background = C.surface; }}
            >
              {/* Number */}
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 40, fontWeight: 700, color: 'rgba(30,41,59,0.7)', minWidth: 64, transition: 'color 0.35s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(56,189,248,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(30,41,59,0.7)')}
              >{p.num}</span>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '8px 16px', marginBottom: 10 }}>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 18, fontWeight: 600, color: C.snow, margin: 0, transition: 'color 0.3s' }}>{p.title}</h3>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>{p.tagline}</span>
                  {p.featured && (
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: C.sky, background: 'rgba(56,189,248,0.1)', padding: '2px 8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Featured</span>
                  )}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: C.silver, border: '1px solid rgba(30,41,59,0.8)', background: C.navy, padding: '3px 8px' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>{p.year}</span>
                <div style={{ width: 34, height: 34, border: '1px solid rgba(30,41,59,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = C.sky; el.style.color = C.sky; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(30,41,59,0.8)'; el.style.color = C.silver; }}
                >
                  <span style={{ color: C.silver, fontSize: 14 }}>→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed', inset: 0, zIndex: 50,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '48px 24px',
              background: 'rgba(8,12,20,0.85)',
              backdropFilter: 'blur(16px)',
            }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                background: C.surface,
                border: '1px solid rgba(30,41,59,0.9)',
                width: '100%', maxWidth: 640,
                maxHeight: '90vh', overflowY: 'auto',
                position: 'relative',
              }}
              className="no-scrollbar"
            >
              {/* Accent top bar */}
              <div style={{ height: 2, background: `linear-gradient(90deg, ${C.sky}, ${C.green}, ${C.sky})` }} />

              <div style={{ padding: '40px 44px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.sky }}>{sel.num}</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>{sel.category}</span>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver }}>· {sel.year}</span>
                    </div>
                    <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 28, fontWeight: 700, color: C.snow, margin: '0 0 4px' }}>{sel.title}</h2>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: C.sky, margin: 0 }}>{sel.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    style={{
                      width: 36, height: 36,
                      border: '1px solid rgba(30,41,59,0.8)',
                      background: 'transparent',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', color: C.silver, transition: 'all 0.2s', flexShrink: 0,
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.sky; (e.currentTarget as HTMLElement).style.color = C.sky; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,41,59,0.8)'; (e.currentTarget as HTMLElement).style.color = C.silver; }}
                  >
                    <X style={{ width: 14, height: 14 }} />
                  </button>
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                  {sel.tech.map(t => (
                    <span key={t} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.sky, background: 'rgba(56,189,248,0.1)', padding: '4px 12px' }}>{t}</span>
                  ))}
                </div>

                {/* Bullets */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {sel.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.silver, lineHeight: 1.75 }}
                    >
                      <span style={{ color: C.sky, flexShrink: 0, marginTop: 2 }}>▹</span>
                      {b}
                    </motion.li>
                  ))}
                </ul>

                {/* Footer links */}
                <div style={{ display: 'flex', gap: 20, paddingTop: 20, borderTop: '1px solid rgba(30,41,59,0.6)' }}>
                  {[{ icon: Code2, label: 'GitHub' }, { icon: ExternalLink, label: 'Live Demo' }].map(({ icon: Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.sky)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.silver)}
                    >
                      <Icon style={{ width: 14, height: 14 }} /> {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
