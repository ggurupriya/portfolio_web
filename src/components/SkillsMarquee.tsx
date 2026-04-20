import React from 'react';
import { motion } from 'framer-motion';

const C = { surface: '#0d1525', muted: '#111927', silver: '#64748b', sky: '#38bdf8', slate: '#1e293b' } as const;

const skills = [
  { name: 'Python',          icon: '🐍' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Scikit-learn',    icon: '⚙️' },
  { name: 'XGBoost',         icon: '🌲' },
  { name: 'Flask',           icon: '🧪' },
  { name: 'React',           icon: '⚛️' },
  { name: 'Elasticsearch',   icon: '🔍' },
  { name: 'Data Analytics',  icon: '📊' },
  { name: 'SQL',             icon: '🗄️' },
  { name: 'Git',             icon: '📦' },
  { name: 'Cybersecurity',   icon: '🛡️' },
  { name: 'Random Forest',   icon: '🌳' },
];

const Item = ({ name, icon }: { name: string; icon: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 36px', flexShrink: 0 }}>
    <span style={{ fontSize: 16 }}>{icon}</span>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
      {name}
    </span>
    <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'rgba(56,189,248,0.25)', padding: '0 20px' }}>◆</span>
  </div>
);

const SkillsMarquee = () => {
  const rowStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    marginBottom: 8,
  };
  const fadeL: React.CSSProperties = {
    position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
    background: `linear-gradient(to right, ${C.muted}, transparent)`,
    zIndex: 10, pointerEvents: 'none',
  };
  const fadeR: React.CSSProperties = {
    position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
    background: `linear-gradient(to left, ${C.muted}, transparent)`,
    zIndex: 10, pointerEvents: 'none',
  };

  return (
    <section id="skills" style={{ background: C.muted, borderTop: `1px solid ${C.slate}`, borderBottom: `1px solid ${C.slate}`, padding: '60px 0', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 36 }}>
        <div style={{ height: 1, width: 64, background: C.slate }} />
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: C.silver, letterSpacing: '0.16em', textTransform: 'uppercase' }}>Tech Stack</span>
        <div style={{ height: 1, width: 64, background: C.slate }} />
      </div>

      {/* Row 1 → */}
      <div style={rowStyle}>
        <div style={fadeL} />
        <div style={fadeR} />
        <motion.div
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
          animate={{ x: [0, -2200] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 28, ease: 'linear' }}
        >
          {[...skills, ...skills, ...skills].map((s, i) => <Item key={i} name={s.name} icon={s.icon} />)}
        </motion.div>
      </div>

      {/* Row 2 ← */}
      <div style={rowStyle}>
        <div style={fadeL} />
        <div style={fadeR} />
        <motion.div
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
          animate={{ x: [-2200, 0] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 34, ease: 'linear' }}
        >
          {[...skills].reverse().concat([...skills].reverse(), [...skills].reverse()).map((s, i) => <Item key={i} name={s.name} icon={s.icon} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
