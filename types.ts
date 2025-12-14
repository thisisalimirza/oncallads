export interface AdHook {
  headline: string;
  angle: string;
  visualIdea: string;
  icon: string;
}

export interface GeneratedHooks {
  productName: string;
  hooks: AdHook[];
}

export interface AppIdea {
  title: string;
  description: string;
  icon: string;
}