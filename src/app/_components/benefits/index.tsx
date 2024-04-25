import { Benefit } from "@/app/_components/benefits/_components/benefit";
import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { CheckCircle, Layers, TrendingUp, type LucideIcon } from "lucide-react";

export interface Benefit {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const benefitsData: Benefit[] = [
  {
    Icon: TrendingUp,
    title: "Increased Traffic",
    description:
      "Drive high-quality traffic to your site with targeted Meta ads that enhance your online presence and reach.",
  },
  {
    Icon: CheckCircle,
    title: "Higher Conversion Rates",
    description:
      "Convert more visitors into customers through optimized landing pages and email flows that effectively nurtures leads.",
  },
  {
    Icon: Layers,
    title: "Easy Scaling",
    description:
      "Simplify scaling your operations with automations, free up resources and focus on growth without the complexity.",
  },
];

export function Benefits() {
  return (
    <div className="bg-secondary py-20 text-center text-secondary-foreground">
      <Container className="flex flex-col gap-20">
        <Header>
          <span className="text-primary">WARNING!</span> <br />
          You Will Experience
        </Header>
        <div className="grid grid-cols-1 items-start justify-center gap-20 lg:grid-cols-3">
          {benefitsData.map((benefit, index) => (
            <Benefit
              key={benefit.title + "-" + index}
              Icon={benefit.Icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
