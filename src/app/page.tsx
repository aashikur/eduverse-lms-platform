import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Link from "next/link";


export interface NavLink  {
  href: string,
  label: string
}

// nav with links, home, about, contact, dashboard, login with link
export const navItems : NavLink[] = [
  {href: '/', label: 'Home'},
  {href: '/dashboard', label: 'Dashboard'},
  {href: '/course', label: 'Course'},
  {href: '/login', label: 'Login'},
]

export default function HomePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="flex items-start justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Eduverse — Learn, Build, Grow
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            A modern LMS starter built with Next.js and a component-driven UI. Use the
            controls below to preview components and toggle themes.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button>Get started</Button>
            <Button variant="outline">Documentation</Button>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <div className="text-sm text-muted-foreground">Theme</div>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>
              Primary, destructive, outline and more — ready-to-use UI buttons.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button>Primary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme</CardTitle>
            <CardDescription>Switch between light and dark modes instantly.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">
                Use this toggle to preview themes across the app.
              </span>
            </div>
          </CardContent>
        </Card>


        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
            <CardDescription>Switch between light and dark modes instantly.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground space-x-2">

                {navItems.map((item) => (
                  <Button variant={'outline'} key={item.href} asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}



              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        Built with ❤️ — connect Prisma to persist data and extend the platform.
      </footer>
    </main>
  );
}
