import { Badge } from "@mantine/core";
import { typeColors } from "../theme/pokemonColors";

type Props = {
  typeName: string;
};

export default function TypeBadge({ typeName }: Props) {
  const color = typeColors[typeName] || "#999";

  return (
    <Badge
      style={{ backgroundColor: color, color: "white" }}
      radius="sm"
      size="lg"
    >
      {typeName}
    </Badge>
  );
}
