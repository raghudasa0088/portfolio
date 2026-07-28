export interface EngineeringDecision {
  title: string;
  description: string;
}

export interface WorkflowStep {
  step: number;
  label: string;
  detail: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  featured: boolean;
  role: string;
  institution: string;
  productionUrl?: string;
  overview: string;
  background: string[];
  problemStatement: {
    lead: string;
    bulletPoints?: string[];
    summary: string;
  };
  operationalContext: {
    description: string;
    constraints: string[];
  };
  contribution: {
    lead: string;
    items: string[];
    summary: string;
  };
  solution: {
    description: string;
    keyPoints: string[];
  };
  workflow: {
    description: string;
    steps: WorkflowStep[];
  };
  userExperience?: {
    lead: string;
    capabilities: string[];
  };
  constraintValidation?: {
    lead: string;
    evaluations: string[];
    details: string;
  };
  additionalModules?: {
    title: string;
    description: string;
    bulletPoints?: string[];
  }[];
  engineeringDecisions: EngineeringDecision[];
  technologies: {
    category: string;
    items: string[];
  }[];
  outcome: string[];
  lessonsLearned: {
    lead: string;
    insights: string[];
    corePrinciple?: string;
  };
  summary: string;
}
