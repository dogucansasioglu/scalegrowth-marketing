import { type Benefit } from "@/app/_components/benefits";

export function Benefit({ Icon, title, description }: Benefit) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="bg-mutedwhite flex w-fit items-center justify-center rounded-full p-3">
          <Icon size={32} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
