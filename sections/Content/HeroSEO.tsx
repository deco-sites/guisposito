export interface Props {
  title?: string;
  activeTitle: boolean;
  activeReadMore: boolean;
  /**
   * @format html
   */
  description?: string;
}

export default function HeroFlats({
  title,
  activeTitle,
  activeReadMore,
  description,
}: Props) {
  return (
    <div>
      <div className="mx-auto flex flex-col items-center gap-8 sm:py-10">
        {activeTitle && (
          <h1 className="inline-block text-28px leading-100% font-medium tracking--2.4px">
            {title}
          </h1>
        )}
        {description && (
          <div id="hero-text" class="container">
            {activeReadMore
              ? (
                <div class="container w-[95%] flex gap-[30px] relative mx-1 px-4 md:mx-auto mb-10">
                  <details className="peer absolute bottom-0 translate-y-full group ">
                    <summary className="text-sm text-neutral-1 font-lato py-2 px-6 border border-neutral-1 cursor-pointer list-none">
                      <span className="group-open:hidden">Ler mais</span>
                      <span className="hidden group-open:block">Ler menos</span>
                    </summary>
                  </details>
                  <div className="text-grey-500 h-[128px] peer-open:h-auto overflow-hidden pb-5 description">
                    <div>
                      <div
                        className="ml-2 mt-2 flex flex-col gap-2"
                        dangerouslySetInnerHTML={{ __html: description }}
                      />
                    </div>
                  </div>
                  <div class="h-10 w-[85%] container bg-gradient-to-b from-transparent to-white absolute bottom-0 ">
                  </div>
                </div>
              )
              : (
                <div className="max-w-[1220px] flex gap-[30px] relative mx-8 md:mx-auto">
                  <div
                    className="text-16px md:text-18px leading-150%"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
