interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

export function TooltipComponent({ children, label }: Readonly<TooltipProps>) {
  return (
    <div
      className={`tooltip_container relative flex flex-row justify-center whitespace-nowrap max-w-md cursor-help`}
    >
      {children}
      <span className="text-sm bg-black border-[1px] border-primaryColor2 text-white px-2 py-1">
        {label}
      </span>
    </div>
  );
}
