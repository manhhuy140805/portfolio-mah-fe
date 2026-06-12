import { apiFetch } from "@/src/lib/api";
import type { Skill } from "@/src/types/skill.type";

const SKILLS_ENDPOINT = "/skills";

export function getSkills() {
  return apiFetch<Skill[]>(SKILLS_ENDPOINT);
}
