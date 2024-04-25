import { type Problem } from "@/app/_components/problems";
import { GlowingIcon } from "@/components/common/glowing-icon";

// add index to the Problem interface

export function PCard({
  title,
  description,
  // img,
  number,
}: Problem & { number: number }) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <GlowingIcon
          className="text-3xl font-bold"
          containerClassName="mx-auto"
        >
          {number}
        </GlowingIcon>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-xl">{description}</div>
      </div>
    </div>
  );
}
