import { Feature } from "@/app/_components/features/_components/feature";
import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import { Calendar, type LucideIcon } from "lucide-react";

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    Icon: Calendar,
    title: "Offer Creation",
    description:
      "Craft offers that are compelling and effective. We'll work with you to create offers that are tailored to your business and your customers.",
  },
  {
    Icon: Calendar,
    title: "High-Converting Landing Pages",
    description:
      "Highlight your offers, optimized to convert visitors into leads. We'll create landing pages that are designed to capture and convert visitors into leads.",
  },
  {
    Icon: Calendar,
    title: "Automated Email Flows",
    description:
      "Nurture your leads with the right message at the right time. We'll create automated email flows that are designed to nurture leads and convert them into customers.",
  },
  {
    Icon: Calendar,
    title: "Targeted Meta Ads",
    description:
      "Boost your online presence, draw the right traffic to your page. We'll create targeted meta ads that are designed to attract and convert visitors into leads.",
  },
  {
    Icon: Calendar,
    title: "CRM & Analytics",
    description:
      "Ensure every customer interaction is tracked and effectively utilized. We'll create a CRM and analytics system that is designed to track and analyze customer interactions and provide insights for better decision-making.",
  },
  {
    Icon: Calendar,
    title: "Automations",
    description:
      "Free up your time using automations that take care of repetitive tasks. We'll create automations to ensure that your business runs smoothly and efficiently.",
  },
  {
    Icon: Calendar,
    title: "A/B Testing",
    description:
      "Lots of testing and strategies based on your data to ensure the best ROI. We'll create A/B testing to ensure that your offers are effective and that your landing pages are optimized for conversion.",
  },
  {
    Icon: Calendar,
    title: "Daily Live Support",
    description:
      "Always have the help you need when you need it. We'll provide 24/7 support to ensure that you have the resources you need to succeed.",
  },
  {
    Icon: Calendar,
    title: "Easy To Understand, Transparent Reports",
    description:
      "Reports that shows what you actually want. We'll provide transparent reports that are easy to understand and use to make informed decisions.",
  },
  {
    Icon: Calendar,
    title: "No Long-Term Contracts",
    description:
      "Scale flexibly without long-term commitments. We'll provide flexible pricing options that allow you to scale your business as needed.",
  },
];

export function Features() {
  return (
    <Container className="flex flex-col gap-20">
      <Header>What&apos;s Included?</Header>
      <Container
        size="lg"
        className="grid grid-cols-1 items-start gap-20 sm:grid-cols-2"
      >
        {featuresData.map((feature, index) => (
          <Feature
            key={feature.title + "-" + index}
            title={feature.title}
            description={feature.description}
            Icon={feature.Icon}
          />
        ))}
      </Container>
    </Container>
  );
}
