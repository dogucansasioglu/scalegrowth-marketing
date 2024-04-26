import { Feature } from "@/app/_components/features/_components/feature";
import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";
import {
  Database,
  FileText,
  HelpingHand,
  Layers,
  Layout,
  Mail,
  Shuffle,
  Star,
  Target,
  Unlock,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const featuresData: Feature[] = [
  {
    Icon: Star,
    title: "Offer Creation",
    description:
      "We develop offers tailored to your audience, enhancing engagement and effectiveness.",
  },
  {
    Icon: Layout,
    title: "Landing Pages",
    description:
      "Our landing pages are optimized to convert visitors into leads, showcasing your offers effectively.",
  },
  {
    Icon: Mail,
    title: "Automated Email Flows",
    description:
      "We set up email sequences to nurture leads consistently, pushing them closer to a purchase.",
  },
  {
    Icon: Target,
    title: "Targeted Meta Ads",
    description:
      "We use targeted ads to increase your online visibility and attract quality traffic to your site.",
  },
  {
    Icon: Database,
    title: "CRM & Analytics",
    description:
      "Our CRM systems track and utilize every interaction, providing insights to refine marketing strategies.",
  },
  {
    Icon: Layers,
    title: "Automations",
    description:
      "Automations streamline repetitive tasks, freeing up time for you to focus on growth.",
  },
  {
    Icon: Shuffle,
    title: "A/B Testing",
    description:
      "We test and optimize continuously, ensuring your campaigns achieve the highest ROI.",
  },
  {
    Icon: HelpingHand,
    title: "Daily Live Support",
    description:
      "Get 9-5 support to ensure you have the help you need, whenever you need it.",
  },
  {
    Icon: FileText,
    title: "Transparent Reports",
    description:
      "Receive clear, concise reports that show your progress and guide future decisions.",
  },
  {
    Icon: Unlock,
    title: "No Long-Term Contracts",
    description:
      "Flexible contracts allow you to adjust your marketing efforts as your business needs change.",
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
