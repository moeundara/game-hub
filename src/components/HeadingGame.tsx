import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const HeadingGame = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading paddingY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default HeadingGame;
