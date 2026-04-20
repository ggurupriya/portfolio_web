import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const C = { navy: '#080c14', surface: '#0d1525', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', green: '#34d399', slate: '#1e293b' } as const;

const exp = {
  role: 'Summer Research Intern',
  company: 'CSIR – National Aerospace Laboratories',
  location: 'Bengaluru, India',
  period: 'Jun – Jul 2025',
  stack: ['Python', 'Real-Time OS', 'ARINC 653', 'Visualization'],
  bullets: [
    'Contributed to an ARINC 653 hypervisor scheduling visualization tool, enabling clearer interpretation of partitioned real-time system behavior.',
    'Designed interactive components to simulate scheduling timelines, improving system-level debugging and analysis workflows.',
    'Gained hands-on exposure to avionics standards and performance-critical embedded software architectures.',
  ],
};

const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScale = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section ref={ref} id="experience" style={{ position: 'relative', padding: '128px 48px', background: C.surface }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 72 }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: C.sky }}>02.</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Experience</span>
          <div style={{ height: 1, background: C.slate, width: 180 }} />
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Animated vertical line */}
          <div style={{ position: 'absolute', left: 7, top: 0, bottom: 0, width: 1, background: 'rgba(30,41,59,0.5)' }}>
            <motion.div style={{ scaleY: lineScale, height: '100%', width: '100%', background: 'rgba(56,189,248,0.5)', transformOrigin: 'top' }} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            style={{ paddingLeft: 44, position: 'relative' }}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              style={{
                position: 'absolute', left: 0, top: 6,
                width: 16, height: 16,
                border: `2px solid ${C.sky}`,
                background: C.navy,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <div style={{ width: 6, height: 6, background: C.sky, borderRadius: '50%' }} />
            </motion.div>

            {/* Card */}
            <div
              style={{
                border: '1px solid rgba(30,41,59,0.8)',
                background: C.navy,
                padding: '36px 40px',
                position: 'relative',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(56,189,248,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(30,41,59,0.8)')}
            >
              {/* Header row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 20, fontWeight: 600, color: C.snow, margin: '0 0 6px' }}>{exp.role}</h3>
                  <a href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.sky, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                    {exp.company} <ExternalLink style={{ width: 12, height: 12 }} />
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver }}>{exp.period}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <MapPin style={{ width: 11, height: 11 }} />{exp.location}
                  </span>
                </div>
              </div>

              {/* Stack tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {exp.stack.map(s => (
                  <span key={s} style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: C.sky, background: 'rgba(56,189,248,0.1)', padding: '4px 10px', letterSpacing: '0.05em' }}>{s}</span>
                ))}
              </div>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.silver, lineHeight: 1.7 }}
                  >
                    <span style={{ color: C.sky, marginTop: 2, flexShrink: 0 }}>▹</span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
