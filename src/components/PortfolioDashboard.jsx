import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SkillsSection from './SkillsSection.jsx';
import ProjectsPage from './ProjectsPage';
import SideNavigation from './SideNavigation';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';
import Hero from './Hero';
import CertificatesSection from './CertificatesSection.jsx';
import KonamiEasterEgg from './KonamiEasterEgg.jsx';

const PortfolioDashboard = () => {
  const phoneNumber = '918733012811';
  const [isExpanded, setIsExpanded] = useState(false);
  const [bgColor, setBgColor] = useState(localStorage.getItem('preferredBgColor') || 'black');
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedColor = localStorage.getItem('preferredBgColor') || 'black';
      setBgColor(updatedColor);
    };

    const handlePreferredColorMessage = (event) => {
      if (event.data?.type === 'preferredBgColor:update' && event.data?.value) {
        setBgColor(event.data.value);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('message', handlePreferredColorMessage);

    const intervalId = setInterval(() => {
      const currentColor = localStorage.getItem('preferredBgColor');
      if (currentColor && currentColor !== bgColor) {
        setBgColor(currentColor);
      }
    }, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('message', handlePreferredColorMessage);
      clearInterval(intervalId);
    };
  }, [bgColor]);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const target = event.target.closest('a[href^="#"], button[data-scroll-target]');
      if (!target) return;

      const targetId = target.getAttribute('href')?.slice(1) || target.dataset.scrollTarget;
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      event.preventDefault();
      window.requestAnimationFrame(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    };

    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      setIsScrollTopVisible((previous) => (previous === shouldShow ? previous : shouldShow));
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getGradientClass = () => {
    switch (bgColor) {
      case 'blue':
        return 'from-black/30 to-blue-500/50';
      case 'green':
        return 'from-black/30 to-green-500/50';
      case 'black':
        return 'from-black/30 to-black-500/50';
      case 'violet':
        return 'from-black/30 to-violet-500/50';
      case 'pink':
        return 'from-black/30 to-pink-500/50';
      case 'red':
        return 'from-black/30 to-red-500/50';
      case 'orange':
        return 'from-black/30 to-orange-500/50';
      default:
        return 'from-black/30 to-pink-500/50';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SideNavigation isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <div className={`main-content ${isExpanded ? 'expanded' : ''}`}>
        <div className="container mx-auto px-6 py-12" id="home">
          {isScrollTopVisible && (
            <motion.button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-8 right-4 z-40 h-12 w-12 rounded-full bg-gradient-to-r from-red-500 to-purple-600 shadow-lg shadow-red-500/40 hover:shadow-purple-500/40 transition-transform duration-300 hover:-translate-y-1"
              aria-label="Scroll back to top"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ↑
            </motion.button>
          )}
          <header className="flex justify-between items-center mb-16">
            <h1 className="text-3xl font-light">
              <span className="font-bold">Priyasha </span>
              Yadav.
            </h1>
            <nav className="hidden md:flex gap-8">
              <button
                data-scroll-target="contact-form"
                className="px-6 py-2 bg-[#08081A] text-white rounded-full hover:bg-[#111122] hover:opacity-90 transition-colors z-10 my-4"
              >
                Contact Me
              </button>
            </nav>
          </header>

          <section id="hero" className="mb-32">
            <Hero />
          </section>

          <section id="projects" className="mb-32">
            <ProjectsPage />
          </section>

          <section id="skills">
            <SkillsSection />
          </section>

          <div className="fixed inset-0 pointer-events-none">
            <div className={`absolute inset-0 bg-gradient-to-r ${getGradientClass()} opacity-85`}></div>
            <div className="relative w-full h-full">
              {Array.from({ length: 20 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <section id="certificates-section" className="mb-32 px-4">
          <CertificatesSection />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <KonamiEasterEgg />

        <section id="contact" className="py-16 px-4">
          <ContactForm />
        </section>

        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-24 z-10 bg-green-500 p-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-8 h-8"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.98.58 3.83 1.57 5.38L2 22l4.76-1.52C8.17 21.4 10.03 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.11 17.99c-1.67 0-3.29-.48-4.67-1.38l-.34-.22-2.82.91.93-2.74-.23-.35A7.84 7.84 0 0 1 4.1 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm4.08-5.37c-.23-.12-1.35-.66-1.56-.73-.21-.08-.37-.12-.53.12-.15.23-.6.73-.73.88-.14.15-.27.17-.5.06-.23-.12-.97-.35-1.85-1.09-.68-.6-1.15-1.34-1.29-1.56s-.01-.34.1-.46c.1-.1.23-.27.35-.4s.15-.23.23-.38c.08-.15.04-.29-.02-.4s-.53-1.28-.72-1.74c-.19-.46-.39-.4-.53-.41-.14-.01-.29-.01-.44-.01s-.4.06-.61.29-.8.79-.8 1.92.82 2.24.94 2.4c.12.15 1.61 2.46 3.89 3.46 1.45.63 2.02.69 2.74.58.42-.06 1.35-.55 1.54-1.08.19-.54.19-1 .14-1.08-.04-.09-.19-.15-.42-.27z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default PortfolioDashboard;