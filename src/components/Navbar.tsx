import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Terminal } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40));

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 50,
        backgroundColor: scrolled ? 'rgba(8,12,20,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(30,41,59,0.8)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <nav style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 32, height: 32,
            border: '1px solid rgba(56,189,248,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.3s',
          }}>
            <Terminal style={{ width: 14, height: 14, color: '#38bdf8' }} strokeWidth={1.5} />
          </div>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#e2e8f0', letterSpacing: '0.05em' }}>
            gurupriya<span style={{ color: '#38bdf8' }}>_</span>
          </span>
        </a>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: 32, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map((link, i) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <a
                  href={link.href}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#38bdf8' : '#64748b',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = '#e2e8f0'; }}
                  onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = '#64748b'; }}
                >
                  <span style={{ color: 'rgba(56,189,248,0.6)', marginRight: 4, fontSize: 10 }}>0{i + 1}.</span>
                  {link.label}
                </a>
              </motion.li>
            );
          })}
        </ul>

        {/* Resume */}
        <motion.a
          href="/resume.pdf"
          download
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 11,
            color: '#38bdf8',
            border: '1px solid rgba(56,189,248,0.35)',
            padding: '8px 16px',
            textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(56,189,248,0.1)'; (e.currentTarget as HTMLElement).style.borderColor = '#38bdf8'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(56,189,248,0.35)'; }}
        >
          Resume ↓
        </motion.a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
