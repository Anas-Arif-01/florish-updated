'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { RenovationProject } from '@/data/renovation-projects';

export default function RenovationProjectGallery({
  projects,
}: {
  projects: RenovationProject[];
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedProject, setSelectedProject] =
    useState<RenovationProject | null>(null);

  function openProject(project: RenovationProject) {
    setSelectedProject(project);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <div className="service-project-preview">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFC8DD]">
              Selected work
            </p>
            <p className="mt-1 text-base font-semibold leading-tight text-white sm:text-lg">
              Renovation &amp; remodeling
            </p>
          </div>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 text-[10px] font-medium text-white/90 sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FFC8DD]" />
            {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {projects.map((project) => {
            const cover = project.images[0];
            if (!cover) return null;

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => openProject(project)}
                aria-label={`View all ${project.title} project photos`}
                className="group/project relative block aspect-[3/4] min-w-0 overflow-hidden bg-[#F4ECF8] text-left shadow-[0_8px_24px_-16px_rgba(157,127,181,0.6)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D7FB5]"
                style={{
                  borderRadius:
                    '50% 50% 0.75rem 0.75rem / 37.5% 37.5% 0.75rem 0.75rem',
                }}
              >
                <span className="absolute inset-0">
                  <Image
                    src={cover.src}
                    alt={cover.alt}
                    fill
                    sizes="(max-width: 640px) 28vw, (max-width: 1024px) 14vw, 8vw"
                    className="object-cover transition-transform duration-500 group-hover/project:scale-105"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(31,20,45,0.92)_0%,rgba(31,20,45,0.08)_58%,rgba(31,20,45,0.05)_100%)]"
                />
                <span className="absolute right-2 top-2 rounded-full border border-white/35 bg-[#2E1F42]/55 px-2 py-1 text-[9px] font-semibold text-white backdrop-blur-sm">
                  {project.images.length}{' '}
                  {project.images.length === 1 ? 'photo' : 'photos'}
                </span>
                <span className="absolute inset-x-0 bottom-0 flex flex-col items-center px-2 pb-3 text-center sm:px-3 sm:pb-4">
                  <span className="line-clamp-2 text-[11px] font-semibold leading-snug text-white drop-shadow sm:text-sm">
                    {project.title}
                  </span>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-semibold leading-tight text-[#3B2A4F] transition-colors group-hover/project:bg-[#FFC8DD] sm:text-[10px]">
                    View project
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-3 w-3 transition-transform group-hover/project:-translate-y-0.5 group-hover/project:translate-x-0.5"
                    />
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-center text-[10px] font-medium tracking-wide text-white/75 sm:text-xs">
          Select a project to view its full photo gallery
        </p>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby="renovation-gallery-title"
        onClose={() => setSelectedProject(null)}
        className="renovation-gallery-dialog m-auto w-[min(92vw,1000px)] max-w-none rounded-3xl border border-[#EBD9F1] bg-[#FFF8FB] p-0 text-[#3B2A4F] shadow-2xl backdrop:bg-[#21172B]/75"
      >
        {selectedProject && (
          <div className="p-5 sm:p-8">
            <div className="mb-5 flex items-start justify-between gap-4 sm:mb-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A63D77]">
                  Renovation project
                </p>
                <h2
                  id="renovation-gallery-title"
                  className="mt-1 text-2xl font-semibold sm:text-3xl"
                >
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-sm text-[#5B4A6E]">
                  {selectedProject.images.length}{' '}
                  {selectedProject.images.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close project gallery"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F4ECF8] text-[#3B2A4F] transition hover:bg-[#EBD9F1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9D7FB5]"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="grid max-h-[65vh] grid-cols-1 gap-4 overflow-y-auto sm:grid-cols-2 lg:grid-cols-3">
              {selectedProject.images.map((image, index) => (
                <figure key={`${image.src}-${index}`} className="min-w-0">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EBD9F1]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-[#5B4A6E]">
                    Photo {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
