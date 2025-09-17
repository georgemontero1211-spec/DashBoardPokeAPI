import { Button } from "@mantine/core";
import { typeColors } from "../../../theme/pokemonColors";

type Props = {
  typeName: string;
};

export default function TypeButton({ typeName }: Props) {
  const color = typeColors[typeName] || "#999"; // fallback gris si no existe

  return (
    <Button
      style={{ backgroundColor: color, color: "white" }}
      size="sm"
    >
      {typeName}
    </Button>
  );
}
