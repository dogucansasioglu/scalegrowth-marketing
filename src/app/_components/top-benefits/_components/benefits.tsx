import { Benefit } from "@/app/_components/top-benefits/_components/benefit";
import { DollarSign, HeartHandshake, Magnet } from "lucide-react";
import React from "react";

export interface BenefitData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitData[] = [
  {
    icon: <Magnet size={32} />,
    title: "Client-Getting-Funnels",
    description:
      "Ditch guesswork. Our expertly crafted funnels are made to attract and convert, bringing clients right to your doorstep.",
  },
  {
    icon: <DollarSign size={32} />,
    title: "Effortless Conversions",
    description:
      "No more crossing fingers hoping for sales. Our ads and landing pages are designed to convert — effortlessly.",
  },
  {
    icon: <HeartHandshake size={32} />,
    title: "Your Growth Partner",
    description:
      "We're the team member you've always wanted — invested in your success, cheering you on, delivering winning moves.",
  },
];

export function Benefits() {
  return (
    <div className="grid grid-cols-3 gap-10">
      {benefits.map((benefit, index) => (
        <Benefit
          key={benefit.title + "-" + index}
          icon={benefit.icon}
          description={benefit.description}
          title={benefit.title}
        />
      ))}
    </div>
  );
}
