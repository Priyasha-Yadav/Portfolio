export const guidedTourSteps = [
  {
    id: 'hero-intro',
    selector: '#hero',
    title: 'Welcome to the Tour',
    description:
      "Let's kick things off with the hero section. This is where I share the biggest headline about what I do and why it matters.",
    voiceScript:
      "Welcome to my portfolio! This hero section spotlights my mission and sets the tone for the rest of the experience."
  },
  {
    id: 'projects-highlight',
    selector: '#projects',
    title: 'Featured Projects',
    description:
      "Here you'll find hand-picked projects with the stories, tools, and outcomes that showcase how I solve real-world problems.",
    voiceScript:
      "These featured projects dive into the solutions I've built—complete with the stacks, impact, and lessons learned."
  },
  {
    id: 'skills-overview',
    selector: '#skills',
    title: 'Skillset Snapshot',
    description:
      "This section maps out my core technologies and strengths, making it easy to see how I can plug into your next idea.",
    voiceScript:
      "Here’s a quick overview of my current toolkit and skills, so you can instantly see where I deliver the most value."
  },
  {
    id: 'side-nav',
    selector: '[data-tour-target="side-navigation"]',
    title: 'Quick Navigation',
    description:
      "This compact navigation keeps every section one click away—expand it to explore shortcuts, socials, and even hidden challenges.",
    voiceScript:
      "Need to jump around fast? Use this side navigation to hop into sections, socials, or even discover hidden surprises."
  },
  {
    id: 'achievements',
    selector: '#certificates-section',
    title: 'Certifications & Wins',
    description:
      "From certifications to recognitions, this corner captures milestones that back up the experience you’ve seen so far.",
    voiceScript:
      "These certifications and highlights show the credentials that underscore my hands-on experience."
  },
  {
    id: 'contact-cta',
    selector: '#contact',
    title: 'Let’s Connect',
    description:
      "Ready to collaborate? Drop me a message through this contact form and let's build something memorable together.",
    voiceScript:
      "If you’re ready to collaborate or just want to say hi, the contact form is the easiest way to reach me."
  },
  // {
  //   id: 'settings-panel',
  //   selector: ({ hasSeenSettings }) => {
  //     if (typeof document === 'undefined') return null;

  //     const settingsPanel = document.querySelector('[data-tour-target="settings-panel"]');
  //     if (settingsPanel) {
  //       return settingsPanel;
  //     }

  //     if (hasSeenSettings) {
  //       return document.querySelector('[data-tour-target="side-navigation"]');
  //     }

  //     const toggleButton = document.querySelector('[data-tour-target="side-nav-toggle"]');
  //     toggleButton?.click();

  //     return (
  //       document.querySelector('[data-tour-target="settings-panel"]') ??
  //       document.querySelector('[data-tour-target="side-navigation"]')
  //     );
  //   },
  //   title: 'Personalize the Vibe',
  //   description:
  //     "Open the settings to swap background themes and discover the easter eggs that tailor the experience to you.",
  //   voiceScript:
  //     "Customize the mood with background themes and uncover mini surprises tucked inside this settings panel."
  // },
  ];