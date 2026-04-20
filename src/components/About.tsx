import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Brain, ShieldCheck, BarChart2, Code2 } from 'lucide-react';

const C = { navy: '#080c14', surface: '#0d1525', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', green: '#34d399', slate: '#1e293b' } as const;

const stats = [
  { value: '9.52', label: 'CGPA' },
  { value: '93%', label: 'ML Accuracy' },
  { value: '94%', label: 'Sensitivity' },
  { value: '4+', label: 'Projects' },
];

const interests = [
  { icon: Brain, label: 'Machine Learning' },
  { icon: BarChart2, label: 'Data Science' },
  { icon: ShieldCheck, label: 'Cybersecurity' },
  { icon: Code2, label: 'AI Systems' },
];

const skills = ['Python','Scikit-learn','XGBoost','Random Forest','Flask','React','SQL','Elasticsearch','Data Analytics','Git','Java','Arduino'];

const bioLines = [
  'Pre-final year Computer Science and Engineering student with a strong foundation in Machine Learning, Data Science, and Visualization. Built end-to-end ML pipelines and research-grade tools across internship and project work.',
  'Interned at CSIR–National Aerospace Laboratories, contributing to an ARINC 653 hypervisor scheduling visualization tool for real-time avionics systems.',
];

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imgMousePos, setImgMousePos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineH = useTransform(scrollYProgress, [0.1, 0.8], ['0%', '100%']);
  const imgScale = useTransform(scrollYProgress, [0.1, 0.5], [0.8, 1]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.4], [60, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) * 0.05,
      y: (e.clientY - rect.top - rect.height / 2) * 0.05,
    });
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setImgMousePos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.1,
      y: (e.clientY - rect.top - rect.height / 2) * 0.1,
    });
  };

  const handleImageMouseLeave = () => {
    setImgMousePos({ x: 0, y: 0 });
  };

  const sectionStyle: React.CSSProperties = {
    position: 'relative', padding: '128px 48px', overflow: 'hidden',
  };

  return (
    <section ref={ref} id="about" style={sectionStyle}>
      {/* Background glow effects */}
      <div style={{
        position: 'absolute', top: '-10%', left: '-5%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: 1280, margin: '0 auto 56px', display: 'flex', alignItems: 'center', gap: 12 }}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: C.sky }}>01.</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase' }}>About Me</span>
        <div style={{ height: 1, background: C.slate, width: 180 }} />
      </motion.div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '320px 1fr', gap: 80, position: 'relative', alignItems: 'start' }}
      >
        {/* Left: Profile Image + Focus Areas */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 32, position: 'sticky', top: '20px' }}
        >
          {/* Profile Picture Container */}
          <motion.div
            style={{ perspective: '1000px' }}
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(56,189,248,0.3)',
                background: 'transparent',
                x: imgMousePos.x,
                y: imgMousePos.y,
                transition: 'all 0.3s ease-out',
              }}
              whileHover={{ borderColor: 'rgba(56,189,248,0.6)' }}
            >
              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>Focus Areas</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 14px', borderRadius: '6px',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(56,189,248,0.08)';
                    e.currentTarget.style.borderLeft = `3px solid ${i % 2 === 0 ? C.sky : C.green}`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeft = 'none';
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 2, repeat: Infinity }}
                  >
                    <item.icon style={{ width: 18, height: 18, color: i % 2 === 0 ? C.sky : C.green, flexShrink: 0 }} strokeWidth={1.5} />
                  </motion.div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.silver }}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Bio + Skills */}
        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: 40 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              padding: '32px 28px', borderRadius: '12px',
              border: '2px solid rgba(56,189,248,0.2)',
              background: 'rgba(56,189,248,0.04)',
              backdropFilter: 'blur(10px)',
            }}
            whileHover={{
              borderColor: 'rgba(56,189,248,0.4)',
              background: 'rgba(56,189,248,0.08)',
            }}
          >
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 17, color: C.sky, fontWeight: 500, lineHeight: 1.7, margin: 0, marginBottom: 16 }}>
              👋 Hi! I'm a passionate CS student & ML engineer
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: C.silver, lineHeight: 1.8, margin: 0 }}>
              Pre-final year student with a strong foundation in Machine Learning, Data Science, and Visualization. I build end-to-end ML pipelines and research-grade tools that solve real-world problems.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {bioLines.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                style={{
                  padding: '24px 24px', borderRadius: '10px',
                  border: '1.5px solid rgba(56,189,248,0.15)',
                  background: 'rgba(56,189,248,0.02)',
                  backdropFilter: 'blur(8px)',
                }}
                whileHover={{
                  borderColor: 'rgba(56,189,248,0.4)',
                  background: 'rgba(56,189,248,0.06)',
                }}
              >
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: C.silver, lineHeight: 1.85, margin: 0 }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Passion Statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              padding: '28px 24px', borderRadius: '10px',
              background: `linear-gradient(135deg, rgba(56,189,248,0.12) 0%, rgba(52,211,153,0.06) 100%)`,
              border: '2px solid rgba(56,189,248,0.3)',
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{ borderColor: 'rgba(56,189,248,0.5)' }}
          >
            <motion.div
              style={{
                position: 'absolute', top: 0, left: '-100%', width: '100%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.2), transparent)',
              }}
              animate={{ left: '100%' }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: C.sky, fontWeight: 600, lineHeight: 1.7, margin: 0, position: 'relative', zIndex: 1 }}>
              ✨ Passionate about applying AI and data-driven approaches to solve real-world problems.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>💻 Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.08 }}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 13,
                    color: C.silver,
                    border: '1.5px solid rgba(56,189,248,0.2)',
                    background: `rgba(56,189,248,0.04)`,
                    padding: '8px 16px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.6)';
                    (e.currentTarget as HTMLElement).style.color = C.sky;
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(56,189,248,0.2)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.2)';
                    (e.currentTarget as HTMLElement).style.color = C.silver;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll progress line */}
        <div style={{ position: 'absolute', left: '350px', top: '120px', bottom: 0, width: 1, background: 'rgba(30,41,59,0.4)', zIndex: 0 }}>
          <motion.div style={{ height: lineH, width: '100%', background: 'rgba(56,189,248,0.6)', transformOrigin: 'top', boxShadow: '0 0 20px rgba(56,189,248,0.3)' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
