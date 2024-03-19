export enum ContactType {
    github = 'github',
    linkedin = 'linkedin',
    twitter = 'twitter',
    youtube = 'youtube',
    email = 'email',
    buymeacoffee = 'buymeacoffee',
  }
  
  export interface Contact {
    twitter: string;
    site: string;
    calendly?: string;
    links: Record<ContactType, string>;
  }
  
  export const contact: Contact = {
    twitter: '@',
    site: 'jeremiemeyer.fr',
    calendly: 'https://calendly.com/...',
    links: {
      github: 'https://github.com/...',
      linkedin: 'https://linkedin.com/in/jeremiemeyer',
      twitter: 'https://twitter.com/...',
      youtube: 'https://www.youtube.com/c/...',
      email: 'mailto:contact@jeremiemeyer.fr',
      buymeacoffee: 'https://www.buymeacoffee.com/...',
    },
  };
  