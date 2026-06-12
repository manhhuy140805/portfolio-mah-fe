export type Skill = {
  id: string;
  name: string;
  category: string;
  iconUrl?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  value?: number;
};
