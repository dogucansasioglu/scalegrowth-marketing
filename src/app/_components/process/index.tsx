import { Step } from "@/app/_components/process/_components/step";
import { Container } from "@/components/common/container";

export interface ProcessData {
  title: string;
  description: string;
}

const processData: ProcessData[] = [
  {
    title: "Real Talk, Real Goals",
    description:
      "We’ll have a candid chat about where you’re at and where you want your business to soar.",
  },
  {
    title: "Blueprint for Success",
    description:
      "After we share a laugh (or two), we’ll craft a strategy that’s as unique as your business—no cookie-cutter plans here.",
  },
  {
    title: "Action Time",
    description:
      "With a plan in hand and spirits high, we roll up our sleeves (figuratively, of course—we keep things professional) and get to work.",
  },
  {
    title: "Celebrate and Iterate",
    description:
      "We'll toast to your wins, learn from the data, and continuously improve your path to profit.",
  },
  {
    title: "High Fives and Higher Returns",
    description:
      "As your business scales, we're right there with you—ready with a high five for every milestone reached and every record broken. Together, we'll keep the momentum going for continuous growth and success.",
  },
];

export function Process() {
  return (
    <Container size="md" className="flex flex-col gap-20">
      <h2 className="text-center text-5xl font-bold">
        What happens when you start your growth journey?
      </h2>
      <div className="flex flex-col gap-10 text-2xl">
        <b>You start making money. </b>
        <div>No, seriously.</div>
        <div>
          But let’s break down what really kicks off when you hit
          &apos;Start&apos;:
        </div>
      </div>
      <ol className="flex list-decimal flex-col gap-10">
        {processData.map((step, index) => (
          <Step
            key={step.title + "-" + index}
            title={step.title}
            description={step.description}
          />
        ))}
      </ol>
    </Container>
  );
}
