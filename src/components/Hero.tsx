import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, Code2, ExternalLink, Mail } from 'lucide-react';

const C = {
  navy: '#080c14',
  surface: '#0d1525',
  snow: '#e2e8f0',
  silver: '#64748b',
  sky: '#38bdf8',
  green: '#34d399',
  slate: '#1e293b',
} as const;

const roles = ['ML Engineer', 'Data Scientist', 'CS Student', 'AI Builder'];

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const springY = useSpring(rawY, { stiffness: 80, damping: 20 });

  // Typewriter
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < target.length) {
        t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 85);
      } else {
        t = setTimeout(() => setTyping(false), 1600);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 48);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIdx]);

  // Mouse parallax
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const h = (e: MouseEvent) => setMouse({
      x: (e.clientX / window.innerWidth - 0.5) * 24,
      y: (e.clientY / window.innerHeight - 0.5) * 24,
    });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  const codeSnippets = [
    { text: 'model.fit(X_train, y_train)', top: '14%', left: '3%' },
    { text: 'accuracy_score: 0.937', top: '68%', right: '4%' },
    { text: 'import sklearn.ensemble', top: '24%', right: '6%' },
    { text: 'flask run --port 5000', bottom: '20%', left: '3%' },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 80, overflow: 'hidden' }}
    >
      {/* Radial glow blobs */}
      <motion.div style={{
        position: 'absolute', top: '20%', right: '20%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 70%)',
        x: mouse.x * 0.4, y: mouse.y * 0.4,
        pointerEvents: 'none',
      }} />
      <motion.div style={{
        position: 'absolute', bottom: '25%', left: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
        x: -mouse.x * 0.2, y: -mouse.y * 0.2,
        pointerEvents: 'none',
      }} />

      {/* Floating code fragments */}
      {codeSnippets.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 + i * 0.2 }}
          style={{
            position: 'absolute',
            top: (s as { top?: string }).top,
            bottom: (s as { bottom?: string }).bottom,
            left: (s as { left?: string }).left,
            right: (s as { right?: string }).right,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: 'rgba(56,189,248,0.18)',
            pointerEvents: 'none',
            userSelect: 'none',
            x: mouse.x * (0.08 + i * 0.04),
            y: mouse.y * (0.08 + i * 0.04),
          }}
        >
          {s.text}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        style={{ y: springY, opacity, scale, position: 'relative', zIndex: 10, maxWidth: 1280, margin: '0 auto', padding: '0 48px', width: '100%' }}
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28 }}
        >
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green, boxShadow: `0 0 10px ${C.green}` }} className="animate-pulse" />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.silver, letterSpacing: '0.1em' }}>
            Hi, my name is
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16,1,0.3,1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.5rem, 9vw, 7rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: C.snow,
            margin: 0,
            marginBottom: 8,
          }}
        >
          Guru Priya G.
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(1.4rem, 4.5vw, 3.5rem)',
            fontWeight: 600,
            color: C.silver,
            marginBottom: 28,
            lineHeight: 1.2,
          }}
        >
          <span className="cursor-blink" style={{ color: C.sky }}>{displayed}</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: C.silver, lineHeight: 1.75, maxWidth: 520, marginBottom: 44 }}
        >
          Pre-final year CSE student building end-to-end ML pipelines and research-grade security tools.
          Passionate about applying AI to solve real-world problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px',
              background: C.sky, color: C.navy,
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 500,
              textDecoration: 'none', transition: 'all 0.3s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View Projects →
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '12px 28px',
              border: `1px solid ${C.slate}`,
              color: C.snow,
              fontFamily: 'JetBrains Mono, monospace', fontSize: 13,
              textDecoration: 'none', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = C.sky; (e.currentTarget as HTMLElement).style.color = C.sky; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = C.slate; (e.currentTarget as HTMLElement).style.color = C.snow; }}
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: 24 }}
        >
          {[
            { icon: Code2, href: 'https://github.com/', label: 'GitHub' },
            { icon: ExternalLink, href: 'https://linkedin.com/', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{ color: C.silver, transition: 'color 0.3s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.sky)}
              onMouseLeave={e => (e.currentTarget.style.color = C.silver)}
            >
              <Icon style={{ width: 18, height: 18 }} strokeWidth={1.5} />
            </a>
          ))}
          <div style={{ width: 96, height: 1, background: C.slate }} />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        style={{
          position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: C.silver,
        }}
      >
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase' }}>scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown style={{ width: 14, height: 14, color: C.sky }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
