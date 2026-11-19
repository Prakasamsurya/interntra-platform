export const SERVICES = [
  {
    id: 'resume-creation',
    number: '01',
    shortName: 'Resume Creation',
    tagline: 'A resume that gets past the filters and into the hands of recruiters.',
    description:
      'We work with you to build a resume that presents your education, skills and projects the way employers expect to see them. From structure and formatting to wording and emphasis, every section is crafted to reflect what you can actually do — even when you have no formal work experience yet.',
    benefits: [
      'Fresher resume creation from scratch',
      'Professional, recruiter-ready formatting',
      'ATS-friendly resume guidance',
      'Content improvement and clearer wording',
      'Stronger skills and project presentation',
      'A full review pass before you start applying',
    ],
  },
  {
    id: 'linkedin-optimisation',
    number: '02',
    shortName: 'LinkedIn Optimisation',
    tagline: 'Turn a quiet profile into a professional presence recruiters actually visit.',
    description:
      'Most student profiles undersell the person behind them. We help you rewrite your headline, about section and experience descriptions so they read professionally, highlight your strengths, and make it easy for recruiters and connections to understand what you are looking for.',
    benefits: [
      'A professional headline that states your direction',
      'An About section written in your voice',
      'Skills presented so they surface in recruiter searches',
      'Experience descriptions that read professionally',
      'Project presentation that shows real capability',
      'Personal branding guidance for a consistent presence',
    ],
  },
  {
    id: 'portfolio-creation',
    number: '03',
    shortName: 'Portfolio Creation',
    tagline: 'Your own space on the internet to show what you can build.',
    description:
      'A personal portfolio gives you something a resume alone cannot: proof. We help you plan, structure and present a clean personal website that introduces you professionally, showcases your projects and skills, and gives recruiters one link that says everything about you.',
    benefits: [
      'A personal portfolio website of your own',
      'A professional introduction that lands quickly',
      'A project showcase with real context',
      'Skills and achievements laid out clearly',
      'A contact section recruiters can actually use',
      'Responsive design that works on every screen',
    ],
  },
  {
    id: 'project-guidance',
    number: '04',
    shortName: 'Project Guidance',
    tagline: 'Industry-relevant projects that give freshers something real to talk about.',
    description:
      'Tutorials end where real work begins. We guide you through building projects that mirror genuine industry problem statements, using relevant technologies — then help you document and present them so you can explain every decision in an interview with confidence.',
    benefits: [
      'Project ideas chosen for freshers',
      'Exposure to industry-relevant technologies',
      'Practical, step-by-step project guidance',
      'Real-world problem statements to work from',
      'Project documentation you can present',
      'Presentation guidance for interviews',
    ],
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const SERVICE_OPTIONS = [
  'Resume Creation',
  'LinkedIn Profile Optimisation',
  'Portfolio Creation',
  'Industry-Relevant Project Guidance',
  'Something else',
] as const;
