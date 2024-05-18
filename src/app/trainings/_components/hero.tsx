"use client";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

type Inputs = {
  email: string;
};

const schema = z.object({
  email: z.string().email(),
});

export function Hero() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Container className="mt-0 flex min-h-[90vh] items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="rounded-full border bg-[#ebecff] p-4 text-center font-bold uppercase shadow-lg sm:text-lg">
          For AGENCY OWNERS, COACHES & CONSULTANTS
        </div>
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Download All Of Our Trainings
        </h1>
        <div className="mt-3 max-w-4xl text-balance text-xl">
          Get instant access to our trainings covering paid ads, content, cold
          email, lead magnets and much more.{" "}
          <b>Delivered to your inbox in seconds.</b>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            placeholder="dogucan@groweasy.io"
            {...register("email")}
            className={cn(
              "h-14 w-full rounded-md border border-primary px-4 py-2 text-lg text-black outline-primary",
              errors.email && "border-0 outline-none outline-destructive",
            )}
          />
          <div className="flex flex-col gap-2">
            <Button type="submit" size={"xl"} className="mx-auto w-fit">
              Yes! Give Me My Trainings!
            </Button>
            <div className="text-center italic">
              We hate spam just as much as you do.
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}
