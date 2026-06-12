import { apiFetch } from "@/src/lib/api";
import type { Project } from "@/src/types/project.type";

const PROJECTS_ENDPOINT = "/projects";

export function getProjects() {
  return apiFetch<Project[]>(PROJECTS_ENDPOINT);
}

export function getProjectBySlug(slug: string) {
  return apiFetch<Project>(`${PROJECTS_ENDPOINT}/${slug}`);
}
