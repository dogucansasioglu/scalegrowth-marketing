import { Step } from "@/app/_components/how-it-works/_components/step";
import { Container } from "@/components/common/container";
import { GradientBG } from "@/components/common/gradient-bg";
import { Header } from "@/components/common/header";
import { Calendar, Hand, Settings, type LucideIcon } from "lucide-react";

export interface Step {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const stepsData: Step[] = [
  {
    Icon: Calendar,
    title: "Schedule Your FREE Growth Call",
    description:
      "Schedule your free growth call with us. We’ll discuss your business needs, goals, and how we can help simplify your growth.",
  },
  {
    Icon: Settings,
    title: "We Handle the Details",
    description:
      "We take care of all the complex parts of your marketing. Relax and focus on your business with the peace of mind that comes from knowing everything is expertly managed.",
  },
  {
    Icon: Hand,
    title: "High Fives and Higher Returns",
    description:
      "Celebrate as your business grows. Enjoy the peace of mind that comes with consistent results and a sustainable growth strategy.",
  },
];

export function HowItWorks() {
  return (
    <div className="relative mb-10 pb-10">
      <GradientBG />
      <Container
        size="md"
        className="flex flex-col items-center justify-between gap-20 sm:mt-20 sm:flex-row"
      >
        <Header className="text-left">How It Works</Header>
        <div className="flex flex-col gap-20">
          {stepsData.map((step, index) => (
            <Step
              key={step.title + "-" + index}
              Icon={step.Icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
