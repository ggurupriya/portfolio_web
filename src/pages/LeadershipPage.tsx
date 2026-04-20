import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, Award, Briefcase, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const C = { navy: '#080c14', surface: '#0d1525', muted: '#111927', snow: '#e2e8f0', silver: '#64748b', sky: '#38bdf8', green: '#34d399', slate: '#1e293b' } as const;

const leadershipItems = [
  { 
    icon: Users, 
    title: 'Team Lead', 
    context: 'University Tech Club', 
    accent: C.sky, 
    bg: 'rgba(56,189,248,0.1)',
    desc: 'Directed 15 members building internal university tools; managed agile sprints and cross-team collaboration.',
    date: '2024 - Present',
    details: [
      'Led biweekly sprints with 15+ developers',
      'Implemented agile methodologies for better project tracking',
      'Mentored junior members in full-stack development',
      'Improved team velocity by 40% through process optimization',
    ]
  },
  { 
    icon: Trophy, 
    title: 'Hackathon Winner', 
    context: 'Innovate 2025', 
    accent: C.green, 
    bg: 'rgba(52,211,153,0.1)',
    desc: '1st place among 200+ teams for an AI-driven pipeline — competing against final-year and postgrad participants.',
    date: 'March 2025',
    details: [
      'Built ML pipeline with 94% accuracy in 24 hours',
      'Ranked 1st among 200+ teams',
      'Competed against postgraduate participants',
      'Developed end-to-end data processing framework',
    ]
  },
  { 
    icon: Calendar, 
    title: 'Event Organizer', 
    context: 'Annual Tech Summit', 
    accent: C.sky, 
    bg: 'rgba(56,189,248,0.1)',
    desc: 'Curated technical workshops on ML systems and data engineering for 300+ attendees.',
    date: 'November 2024',
    details: [
      'Organized 5 technical workshops',
      'Coordinated with 10+ industry speakers',
      'Managed 300+ attendees across 3 days',
      'Achieved 4.8/5 participant satisfaction rating',
    ]
  },
  { 
    icon: Award, 
    title: 'Best Project Award', 
    context: 'CSE Department', 
    accent: C.green, 
    bg: 'rgba(52,211,153,0.1)',
    desc: 'Recognized for innovative ML research project on real-time anomaly detection in IoT systems.',
    date: 'September 2024',
    details: [
      'Developed anomaly detection system for IoT data',
      'Published findings in departmental journal',
      'Selected as top 3 projects from 150+ submissions',
      'Presented at annual tech conference',
    ]
  },
  { 
    icon: Briefcase, 
    title: 'Workshop Facilitator', 
    context: 'AI/ML Bootcamp', 
    accent: C.sky, 
    bg: 'rgba(56,189,248,0.1)',
    desc: 'Conducted hands-on sessions on machine learning fundamentals and practical applications for 100+ participants.',
    date: '2024 - 2025',
    details: [
      'Led 8-week comprehensive ML bootcamp',
      '100+ students trained in ML basics',
      'Created course materials and assignments',
      'Achieved 85% participant completion rate',
    ]
  },
  { 
    icon: BookOpen, 
    title: 'Mentorship Program Lead', 
    context: 'Tech Community', 
    accent: C.green, 
    bg: 'rgba(52,211,153,0.1)',
    desc: 'Mentored 20+ junior developers and students, guiding them through technical challenges and career development.',
    date: 'Ongoing',
    details: [
      'One-on-one mentoring sessions for 20+ mentees',
      'Career guidance and technical skill development',
      'Created learning resources and roadmaps',
      'Facilitated networking with industry professionals',
    ]
  },
];

const LeadershipPage = () => {
  return (
    <div style={{ minHeight: '100vh', background: C.navy }}>
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          padding: '20px 48px',
          borderBottom: `1px solid rgba(30,41,59,0.4)`,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <Link 
          to="/" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 8,
            textDecoration: 'none',
            color: C.silver,
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = C.sky)}
          onMouseLeave={e => (e.currentTarget.style.color = C.silver)}
        >
          <ArrowLeft style={{ width: 18, height: 18 }} strokeWidth={1.5} />
          Back to Home
        </Link>
      </motion.div>

      {/* Main Content */}
      <section style={{ position: 'relative', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: 80 }}
          >
            <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: C.sky, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>BEYOND THE CODE</p>
            <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: C.snow, margin: 0, lineHeight: 1.2, marginBottom: 24 }}>
              Leadership & Extracurriculars
            </h1>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, color: C.silver, lineHeight: 1.8, maxWidth: 600, margin: 0 }}>
              Explore my achievements in technical club leadership, hackathons, workshops, and community engagement — showcasing teamwork and commitment to growing the tech community.
            </p>
          </motion.div>

          {/* Grid of Leadership Items */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 28 }}>
            {leadershipItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -8, borderColor: 'rgba(56,189,248,0.5)' }}
                style={{
                  border: '1.5px solid rgba(30,41,59,0.6)',
                  background: `linear-gradient(135deg, ${C.surface} 0%, rgba(13,21,37,0.5) 100%)`,
                  padding: '40px 32px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  cursor: 'default',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
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
                  background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)`,
                  opacity: 0.5,
                }} />

                {/* Icon */}
                <div style={{ width: 48, height: 48, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
                  <item.icon style={{ width: 24, height: 24, color: item.accent }} strokeWidth={1.5} />
                </div>

                {/* Header */}
                <div>
                  <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: C.silver, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>{item.context}</p>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, fontWeight: 700, color: C.snow, margin: '0 0 8px' }}>{item.title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: item.accent, fontWeight: 500, margin: 0 }}>{item.date}</p>
                </div>

                {/* Description */}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: C.silver, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>

                {/* Details List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {item.details.map((detail, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + i * 0.05 }}
                      style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}
                    >
                      <div style={{ width: 4, height: 4, background: item.accent, borderRadius: '50%', marginTop: '8px', flexShrink: 0 }} />
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: C.silver, margin: 0, lineHeight: 1.5 }}>{detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadershipPage;
