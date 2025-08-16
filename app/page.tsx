'use client';

export default function Home() {
  const ref = useRef<HTMLElement>(null);

  const tweenRef = useHorizontalScroll(ref, '.panel', 1280);

  const [open, setOpen] = useState(false);
  const { sections } = usePageSection({ pages: locales.pages, templates });

  return (
    <>
      <Sidenav open={open} setOpen={setOpen} tweenRef={tweenRef} />
      <Title setOpen={setOpen} />

      <main
        ref={ref}
        id="home"
        className={cn('relative flex size-full max-h-full min-h-screen max-w-full flex-col', 'md:flex-row')}
      >
        <div
          className={cn('no-visible-scrollbar absolute flex h-full w-max flex-1 flex-col items-center', 'xl:flex-row')}
        >
          {sections.map(({ id, content: SectionComponent }) => (
            <SectionComponent key={id} />
          ))}
        </div>
      </main>
    </>
  );
}
