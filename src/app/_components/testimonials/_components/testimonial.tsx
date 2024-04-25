import { type Testimonial } from "@/app/_components/testimonials";
import { StarIcon } from "lucide-react";

export function Testimonial({ title, description }: Testimonial) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
          <div>
            {/* 5 stars */}
            <div className="flex gap-2 text-accent">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <StarIcon key={index} size={16} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
