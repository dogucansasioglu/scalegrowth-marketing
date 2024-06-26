import { type Benefit } from "@/app/_components/benefits";
import { GlowingIcon } from "@/components/common/glowing-icon";

export function Benefit({ Icon, title, description }: Benefit) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-4">
      <GlowingIcon>
        <Icon size={32} />
      </GlowingIcon>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
