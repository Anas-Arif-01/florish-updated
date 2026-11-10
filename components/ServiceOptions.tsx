import { ArrowUpRight, House, Sparkles } from 'lucide-react';
import RenovationProjectGallery from '@/components/RenovationProjectGallery';
import {
  RENOVATION_PROJECTS,
  type RenovationProject,
} from '@/data/renovation-projects';

const services: {
  title: string;
  description: string;
  message: string;
  icon: typeof House;
  projects?: RenovationProject[];
}[] = [
  {
    title: 'Design and finishing',
    description:
      'Plan the look and feel of your space with coordinated materials, colors, and finishing details.',
    message:
      'Hi! I am interested in design and finishing services for my space.',
    icon: Sparkles,
  },
  {
    title: 'Renovation and remodeling',
    description:
      'Refresh or rework your interiors with material selection, supply, and professional installation.',
    message:
      'Hi! I am interested in renovation and remodeling services for my space.',
    icon: House,
    projects: RENOVATION_PROJECTS,
  },
];

export default function ServiceOptions() {
  return (
    <section className="bg-[#FFF8FB] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 text-center">
          <p className="text-sm font-semibold tracking-wide text-[#A63D77]">
            Our Services
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#3B2A4F] sm:text-3xl">
            How can we help with your space?
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map(
            ({
              title,
              description,
              message,
              icon: Icon,
              projects,
            }) => (
              <article
                key={title}
                className={`service-option relative min-w-0 ${projects ? 'service-option--projects' : ''}`}
              >
                <div className={`service-option-card flex h-full w-full min-w-0 flex-wrap items-start gap-4 rounded-3xl border border-[#EBD9F1] bg-white p-6 shadow-[0_14px_34px_-22px_rgba(83,52,91,0.5)] transition hover:-translate-y-1 hover:border-[#D3B6D1] hover:shadow-[0_20px_38px_-22px_rgba(83,52,91,0.6)] sm:p-8 ${projects ? 'service-option-card--projects' : ''}`}>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F4ECF8] text-[#8B5FB0]">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 text-lg font-semibold text-[#3B2A4F]">
                      {title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[#5B4A6E]">
                      {description}
                    </span>
                    <a
                      href={`https://wa.me/923299906666?text=${encodeURIComponent(message)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#A63D77] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D7FB5]"
                    >
                      Discuss your project
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </span>
                </div>
                {projects && <RenovationProjectGallery projects={projects} />}
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
