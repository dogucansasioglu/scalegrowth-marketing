import { type Feature } from "@/app/_components/features";
import { GlowingIcon } from "@/components/common/glowing-icon";

export function Feature({ title, description, Icon }: Feature) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <GlowingIcon>
        <Icon size={32} className="text-black" />
      </GlowingIcon>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
