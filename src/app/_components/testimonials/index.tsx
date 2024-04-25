import { Testimonial } from "@/app/_components/testimonials/_components/testimonial";
import { Container } from "@/components/common/container";
import { Header } from "@/components/common/header";

export interface Testimonial {
  title: string;
  description: string;
}

const testimonialsData: Testimonial[] = [
  {
    title: "We Doubled Our Leads In Just Three Months",
    description:
      "Seeing our leads double in just three months was incredible. The new ad strategies and landing pages made a real difference, and we didn't even have to up our budget.",
  },
  {
    title: "Hesitant at First, Fully Convinced Now",
    description:
      "I was skeptical about narrowing our marketing focus, fearing we'd miss out. But after seeing the better lead quality and increased sales I changed my mind.",
  },
  {
    title: "From No Leads to Can't Keep Up In 90 Days",
    description:
      "We weren’t getting any business and we didn't know why. Partnering with ScaleGrowth Marketing changed everything. Now, we're overwhelmed with leads—it's a great problem to have!",
  },
];

export function Testimonials() {
  return (
    <Container className="flex flex-col gap-20">
      <Header>Testimonials</Header>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={testimonial.title + "-" + index}
            title={testimonial.title}
            description={testimonial.description}
          />
        ))}
      </div>
    </Container>
  );
}
