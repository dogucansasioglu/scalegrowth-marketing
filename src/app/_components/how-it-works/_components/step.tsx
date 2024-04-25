import { type Step } from "@/app/_components/how-it-works";
import { GlowingIcon } from "@/components/common/glowing-icon";

export function Step({
  Icon: Icon,
  title,
  description,
  number,
}: Step & { number: number }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <GlowingIcon>
          <Icon size={32} />
        </GlowingIcon>
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
