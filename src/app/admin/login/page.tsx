import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function AdminLoginPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-6 py-16">
      <section className="rounded-lg border border-white/10 bg-[var(--surface)] p-8">
        <p className="text-sm font-semibold uppercase text-[var(--accent)]">
          Admin
        </p>
        <h1 className="mt-3 text-3xl font-bold text-white">Sign in</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Access the dashboard shell for portfolio content management.
        </p>
        <form className="mt-8 grid gap-4">
          <Input name="email" placeholder="Email address" type="email" />
          <Input name="password" placeholder="Password" type="password" />
          <Button type="button">Login</Button>
        </form>
      </section>
    </main>
  );
}
