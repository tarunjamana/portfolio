"use client";

import { Container } from "@/components/ui/Container";
import { useReveal } from "@/lib/useReveal";

const supportingProjects = [
  {
    title: "Micro-frontend multi-form platform",
    description:
      "Composed a multi-step form flow from independently deployed micro-frontends sharing a single validation and state contract.",
    tags: ["React", "TypeScript", "Micro-frontend"],
  },
  {
    title: "CMS-migration React rebuild",
    description:
      "Migrated a legacy CMS-driven page suite to a componentized React front end without a content or SEO regression.",
    tags: ["React", "TypeScript", "AEM"],
  },
  {
    title: "Partner Portal",
    description:
      "Built the partner-facing dashboard for onboarding and account management, from data layer to production UI.",
    tags: ["React", "TypeScript", "REST"],
  },
];

function ProjectCard({
  project,
  order,
}: {
  project: (typeof supportingProjects)[number];
  order: number;
}) {
  const ref = useReveal<HTMLDivElement>(order);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3 rounded-house border border-border bg-surface p-6"
    >
      <h3 className="font-display text-lg font-semibold text-text">
        {project.title}
      </h3>
      <p className="font-sans text-sm text-text-secondary">
        {project.description}
      </p>
      <p className="font-mono text-xs text-text-muted">
        {project.tags.join(" · ")}
      </p>
    </div>
  );
}

export function SelectedWork() {
  const featuredRef = useReveal<HTMLAnchorElement>(0);

  return (
    <section id="work" className="py-24">
      <Container>
        <h2 className="font-display text-2xl font-semibold text-text">
          Selected work
        </h2>

        <div className="mt-10 flex flex-col gap-6">
          <a
            ref={featuredRef}
            href="/work/clp"
            className="group grid overflow-hidden rounded-house border border-border bg-surface transition-colors ease-house duration-300 hover:border-border-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:grid-cols-2"
          >
            <div className="relative order-2 flex aspect-video items-center justify-center bg-accent-tint md:order-1 md:aspect-auto">
              <span className="font-mono text-xs text-text-muted">
                motion preview
              </span>
              <span className="absolute inset-0 flex items-center justify-center bg-text/0 font-sans text-sm font-medium text-bg opacity-0 transition-opacity ease-house duration-300 group-hover:bg-text/70 group-hover:opacity-100">
                View the live experience
              </span>
            </div>

            <div className="order-1 flex flex-col justify-center gap-4 p-8 md:order-2 md:p-12">
              <span className="w-fit rounded-house bg-accent-tint px-2 py-1 font-mono text-xs text-accent">
                Featured · concept
              </span>
              <h3 className="font-display text-2xl font-semibold text-text">
                TIMBRE — Studio One campaign landing page
              </h3>
              <p className="font-sans text-base text-text-secondary">
                A scroll-driven, brand-skinned landing page built as a
                clean-room concept, rooted in real custom-component AEM
                authoring experience.
              </p>
            </div>
          </a>

          <div className="grid gap-6 md:grid-cols-3">
            {supportingProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} order={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
