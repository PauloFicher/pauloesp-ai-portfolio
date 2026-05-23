export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  icon: string;
  links: {
    github: string;
    demo?: string;
  };
  category: 'retail' | 'finanzas' | 'telecom' | 'inmobiliario';
  azetaCompany: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
