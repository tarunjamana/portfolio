import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ReducedMotionToggle } from "@/components/ReducedMotionToggle";

const links = [
  { href: "https://www.linkedin.com/in/jamana-tarun-a5176a168", label: "LinkedIn" },
  { href: "https://github.com/tarunjamana", label: "GitHub" },
  { href: "mailto:tarunjamana8469@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-text-secondary transition-colors ease-house duration-150 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <LinkButton href="/resume.pdf" download>
              Résumé
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 2v8m0 0-3-3m3 3 3-3M2.5 13.5h11" />
              </svg>
            </LinkButton>

            <ReducedMotionToggle />
          </div>
        </div>
      </Container>
    </footer>
  );
}
