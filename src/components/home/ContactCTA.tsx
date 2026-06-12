import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function ContactCTA() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="grid gap-10 overflow-hidden rounded-lg border border-white/10 bg-[var(--surface-cream)] p-6 text-zinc-950 shadow-[0_24px_80px_rgba(0,0,0,0.25)] md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase text-[var(--accent)]">
            Get in touch
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight">
            Elevate your brand with a focused portfolio system
          </h2>
          <p className="mt-5 text-sm leading-6 text-zinc-600">
            Send a short brief and I will shape it into a clear homepage,
            project story, and contact path.
          </p>
        </div>
        <form className="grid gap-4 rounded-lg bg-[#11100d] p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="name" placeholder="Your name" />
            <Input name="phone" placeholder="Phone number" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="email" placeholder="Your email" type="email" />
            <Input name="subject" placeholder="Subject" />
          </div>
          <textarea
            className="min-h-32 rounded-md border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-[var(--accent)]"
            name="message"
            placeholder="Your message"
          />
          <Button type="button">Appointment Now</Button>
        </form>
      </div>
    </section>
  );
}
