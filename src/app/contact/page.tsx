import ContactClient from "@/src/components/contact/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactClient />
    </main>
  );
}
