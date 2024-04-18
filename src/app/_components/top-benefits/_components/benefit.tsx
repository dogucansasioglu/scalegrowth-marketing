import { type BenefitData } from "@/app/_components/top-benefits/_components/benefits";

export function Benefit({ icon, description, title }: BenefitData) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-muted flex w-fit items-center rounded-full p-3">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
}
