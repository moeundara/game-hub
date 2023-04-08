import { Badge } from "@chakra-ui/react";

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  let color = metacritic > 90 ? "green" : metacritic > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>
      {metacritic}
    </Badge>
  );
};

export default CriticScore;
