import { apiFetch } from "@/src/lib/api";
import type { ContactMessage } from "@/src/types/contact.type";

export function sendContactMessage(message: ContactMessage) {
  return apiFetch<{ success: boolean }>("/contact", {
    body: JSON.stringify(message),
    method: "POST",
  });
}
