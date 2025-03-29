import SkillsSection from './SkillsSection.jsx';
import ProjectsPage from './ProjectsPage';
import SideNavigation from './SideNavigation';
import AboutMe from './AboutMe';
import ContactForm from './ContactForm';
import Hero from './Hero';
import CertificatesSection from './CertificatesSection.jsx';

const PortfolioDashboard = ({ activeColor }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Side Navigation */}
      <SideNavigation />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-light">
            <span className="font-bold">Priyasha </span>
            Yadav.
          </h1>
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => {
                const element = document.getElementById('contact-form');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-2 bg-[#08081A] text-white rounded-full hover:bg-[#111122] hover:opacity-90 transition-colors z-10"
            >
              Contact Me
            </button>
          </nav>
        </header>

        {/* Hero Section */}
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <ProjectsPage />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <SkillsSection />
        </section>

        {/* Network Effect Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className={`absolute inset-0 bg-gradient-to-r from-black/30 to-pink-500/50 opacity-85`}
          ></div>

          <div className="relative w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-ping"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `translate(-50%, -50%)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Certificates */}
      <section id="certificates-section" className="mb-32 px-4">
        <CertificatesSection />
      </section>


      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="py-16 px-4">
        <ContactForm />
      </section>
    </div>
  );
};

export default PortfolioDashboard;
