import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between py-6"
        >
          <a
            href="#top"
            className="font-display text-lg font-semibold text-text"
          >
            Tarun<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-6 md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-text-secondary transition-colors ease-house duration-300 hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

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
          </div>
        </nav>
      </Container>
    </header>
  );
}
