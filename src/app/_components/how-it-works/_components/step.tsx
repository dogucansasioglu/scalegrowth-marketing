import { type Step } from "@/app/_components/how-it-works";

export function Step({
  Icon: Icon,
  title,
  description,
  number,
}: Step & { number: number }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex w-fit items-center justify-center rounded-full bg-muted p-3">
          <Icon size={32} />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">
            {number}: {title}
          </h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}
