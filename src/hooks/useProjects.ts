"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/src/services/project.service";
import type { Project } from "@/src/types/project.type";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    getProjects()
      .then((data) => {
        if (isMounted) {
          setProjects(data);
        }
      })
      .catch((requestError: Error) => {
        if (isMounted) {
          setError(requestError);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { error, isLoading, projects };
}
