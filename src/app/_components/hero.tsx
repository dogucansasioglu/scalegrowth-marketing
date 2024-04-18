import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="mx-16 my-10 flex max-w-lg flex-col gap-5 pt-20">
      <h1 className="mb-4 text-6xl font-bold">
        Attract leads,
        <br />
        convert traffic,
        <br />
        close deals.
      </h1>
      <p className="text-xl">
        Growing a business is hard. We make it a whole lot easier, more
        predictable, less stressful, and more fun.
      </p>
      <Button size={"xl"}>Start Your FREE Growth Journey</Button>
    </div>
  );
}
