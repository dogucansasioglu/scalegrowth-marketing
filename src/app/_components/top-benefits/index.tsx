import { Benefits } from "@/app/_components/top-benefits/_components/benefits";
import { Video } from "@/app/_components/top-benefits/_components/video";
import Container from "@/components/common/container";

export function TopBenefits() {
  return (
    <div className="relative mb-28 pb-20">
      <div className="absolute top-24 -z-10 h-full w-full -skew-y-12 bg-gradient-to-tr from-black from-15% to-muted"></div>
      <Container className="flex flex-col gap-20">
        <Video />
        <Benefits />
      </Container>
    </div>
  );
}
