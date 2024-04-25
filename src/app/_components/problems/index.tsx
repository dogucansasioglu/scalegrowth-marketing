import { PCard } from "@/app/_components/problems/_components/p-card";
import { Container } from "@/components/common/container";
import { GradientBG } from "@/components/common/gradient-bg";
import { Header } from "@/components/common/header";

export interface Problem {
  title: string;
  description: string;
  img: string;
}

const problems: Problem[] = [
  {
    title: "Lost on What to Do",
    description:
      "Trying without succeeding is one thing, but not knowing what to try is another. A clear, structured plan eliminates guesswork and sets your business on a path to success.",
    img: "/images/problems/lost-on-what-to-do.png",
  },
  {
    title: "No Traffic",
    description:
      "If people don’t know your business exists, they can’t become customers. That is always the first step and this problem affects other problems as well.",
    img: "/images/problems/no-traffic.png",
  },
  {
    title: "No Leads",
    description:
      "Knowing you isn't the same as wanting your services. Without systems to capture, nurture, and qualify leads at scale, you will not grow.",
    img: "/images/problems/no-leads.png",
  },
  {
    title: "No Conversions",
    description:
      "Interest is only the beginning. You only make money when interest is transformed into sales.",
    img: "/images/problems/no-conversions.png",
  },
  {
    title: "Only One Offer",
    description:
      "It's rare for customers to buy on their first visit, especially the unqualified ones. If you don’t have something to offer them, you miss out on capturing potential leads.",
    img: "/images/problems/only-one-offer.png",
  },
];

export function Problems() {
  return (
    <div className="relative mb-10 pb-10">
      <GradientBG />

      <Container size="md" className="my-0 flex flex-col gap-20">
        <Header>The Five Problems That Kill Service-Based Businesses</Header>
        <Container size="sm" className="my-0 flex flex-col gap-20">
          {problems.map((problem, index) => (
            <PCard
              key={problem.title + "-" + index}
              title={problem.title}
              description={problem.description}
              img={problem.img}
              number={index + 1}
            />
          ))}
        </Container>
      </Container>
    </div>
  );
}
