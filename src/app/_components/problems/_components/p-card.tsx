import { type Problem } from "@/app/_components/problems";

// add index to the Problem interface

export function PCard({
  title,
  description,
  img,
  number,
}: Problem & { number: number }) {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex size-14 items-center justify-center rounded-md bg-muted text-3xl font-bold">
          {number}
        </div>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-xl">{description}</div>
      </div>
    </div>
  );
}
