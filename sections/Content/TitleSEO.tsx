export interface Props{
    title?: string;
    activeTitle: boolean;
    placement?: "Left" | "Center";
    fontSize?: number;
}

export default function TitleComp({
  title,
  activeTitle,
  placement = 'Center',
  fontSize,
}: Props) {
  let align;

  switch (placement) {
    case "Left":
      align = "start";
      break;
    case "Center":
      align = "center";
      break;
    default:
      break;
  }
  return (
    <div>
      <div className={`mx-auto flex flex-col items-${align} gap-8 sm:py-10 px-6`}>
        {activeTitle && (
          <h1 className={`inline-block text-[${fontSize}px] leading-100% font-medium tracking--2.4px`}>
            {title}
          </h1>
        )}
      </div>
    </div>
  );
}