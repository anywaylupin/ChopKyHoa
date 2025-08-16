import { cloneElement, type JSX } from 'react';

type UsePageSectionOptions = {
  pages: Record<string, { id: string; label: string }>;
  templates: Record<string, { icon: JSX.Element; content: () => JSX.Element }>;
};

export function usePageSection({ pages, templates }: UsePageSectionOptions) {
  const sections = useMemo(
    () =>
      Object.entries(pages).map(([key, { id, label }]) => {
        const { icon, content } = templates[key];
        const clonedIcon = cloneElement(icon, { className: cn('size-8 shrink-0', 'md:size-12') });

        return { id, label, content, icon: clonedIcon };
      }),
    []
  );

  const isMobile = () => window.innerWidth < 768;
  const isDesktop = () => window.innerWidth >= 1280;

  return { sections, isMobile, isDesktop };
}
