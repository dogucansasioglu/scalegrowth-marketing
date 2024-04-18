import { Benefits } from "@/app/_components/top-benefits/_components/benefits";
import { Video } from "@/app/_components/top-benefits/_components/video";
import Container from "@/components/common/container";

export function TopBenefits() {
  return (
    <Container className="flex flex-col gap-20">
      <Video />
      <Benefits />
    </Container>
  );
}
