export default {
  navbar: {
    faq: 'FAQ',
    changelog: 'Changelog',
    register: 'Register',
  },
  footer: {
    legalNotice: 'Legal Notice',
  },
  index: {
    hero: {
      tagline: 'Free & Open-Source Platform',
      headline: 'The best place to manage your strats and nades.',
      subline:
        "Stratbook won't make you win every game.\n But at least it will keep your strats and nades organized.",
      btnOpenApp: 'Open App',
      btnRegister: 'Register',
    },
  },
  faq: {
    headline: 'Frequently asked Questions.',
    questions: [
      {
        questionText: 'Where can I report bugs or request new features?',
        answerText:
          'First of all, I\'m very thankful for everyone who is taking their time to report bugs and provides valuable feedback. The best way is to use the "Feedback" button in the navigation drawer of the app. If you have a Github account, you can open an issue on the projects repository. You can also always send me a DM on twitter.',
      },
      {
        questionText: 'Who can see my strats?',
        answerText:
          'Your strats are only visible to your own team. Stratbook has good security measures in place to keep your strats safe and sound.',
      },
      {
        questionText: 'Are there any costs or prices?',
        answerText:
          'Stratbook is so called "Free and Open Source Software". Using the code and hosting the service yourself will always be free. The prehosted service at "app.stratbook.live" is also currently free. I\'m not planning to make a profit from this, so there only might be a light monetization at a later stage to cover hosting and domain costs.',
      },
      {
        questionText: 'What if Stratbook servers are down?',
        answerText:
          "Stratbook is hosted on Amazon Web Services, so downtimes are extremely unlikely. I'm working on implementing PWA (Progressive Web App) Support, which allows you to install Stratbook locally and even use it offline without internet. Strats and nades are then updated once you have a connection again.",
      },
      {
        questionText: 'Can I host Stratbook myself?',
        answerText:
          'You can absolutely host Stratbook yourself. There is currently no guide on setting it up and installing prerequesites but I will write one in the future.',
      },
      {
        questionText: 'Who is behind this project?',
        answerText:
          "Hi there! I'm Justin, a 24 year old esports & programming enthusiast based in Stuttgart, Germany. I have a bachelors degree in Computer Science & Media and I'm working as a full-time Web Engineer for a Customer Experience Agency in Stuttgart. I started developing Stratbook in my freetime during Covid-19, mostly to improve my programming skills, but also to build an application for my csgo team to replace the cluttered Google Docs that we've been using.",
      },
    ],
  },
  legal: {
    headline: 'Legal Notice',
  },
  changelog: {
    headline: 'Changelog',
    changes: [
      {
        version: '0.12.0',
        date: '2021-01-23',
        changes: [
          'Added draw tool, an interactive minimap, to all strats.',
          'Added image loading indicator',
          'Minor bugfixes',
        ],
      },
      {
        version: '0.11.0',
        date: '2021-01-20',
        changes: [
          'Added embedded youtube player to utility lightbox',
          'Adjust mobile button styling',
          'Various refactorings',
        ],
      },
      {
        version: '0.10.0',
        date: '2021-01-14',
        changes: [
          'Authorization system rework with httpOnly refreshToken cookies',
          'Sanitization on server side',
        ],
      },
    ],
  },
  register: {
    headline: 'Register',
  },
  cookieBanner: {
    headline: 'We respect your privacy',
    baseText:
      'We use necessary cookies to make our site work. With your approval we might also set up optional analytics cookies to help us improve the site.',
    labelRequired: 'Required cookies',
    labelAnalytics: 'Analytics cookies',
    btnSave: 'Save',
    btnAcceptAll: 'Accept all',
  },
};