import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";
import SectionTitle from "@/src/components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-white/10 bg-[#0f0d0b]">
        <div className="accent-rail h-1 w-full" />
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="inline-flex rounded-md bg-[var(--surface-cream)] px-3 py-2 text-sm font-semibold uppercase text-zinc-950">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-white">
            Tell me what this portfolio should make possible
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            Share the role, goal, and project type. The first draft can start
            from the visual direction already in this app.
          </p>
        </div>
      </section>

      <section className="bright-section">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionTitle
              description="Use this starter contact area for client messages, recruiter outreach, or project collaboration."
              eyebrow="Get in touch"
              title="Elevate your brand with me"
              tone="light"
            />
            <div className="mt-10 grid gap-4 text-sm text-zinc-700">
              <p className="bright-card rounded-lg p-5">example@email.com</p>
              <p className="bright-card rounded-lg p-5">
                3891 Ranchview Dr. Richardson
              </p>
              <p className="bright-card rounded-lg p-5">01245789321</p>
            </div>
          </div>
          <form className="grid gap-4 rounded-lg border border-white/10 bg-[#11100d] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Your name" />
              <Input name="phone" placeholder="Phone number" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="email" placeholder="Your email" type="email" />
              <Input name="subject" placeholder="Subject" />
            </div>
            <textarea
              className="min-h-40 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[var(--accent)]"
              name="message"
              placeholder="Your message"
            />
            <Button type="button">Appointment Now</Button>
          </form>
        </div>
      </section>
    </main>
  );
}
