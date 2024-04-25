import { type ProcessData } from "@/app/_components/process";

export function Step({ description, title }: ProcessData) {
  return (
    <li className="text-2xl">
      <span className="font-bold">{title}:</span> <span>{description}</span>
    </li>
  );
}
