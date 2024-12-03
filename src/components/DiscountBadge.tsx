import { products } from "@wix/stores";
import Badge from "./ui/badge";

interface discountBadgeProps {
  data: products.Discount;
}

export default function DiscountBadge({ data }: discountBadgeProps) {
  if (data.type !== "PERCENT") {
    return null;
  }

  return <Badge>-{data.value}</Badge>;
}
