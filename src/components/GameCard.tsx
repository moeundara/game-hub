import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card rounded="10px" overflow="hidden">
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <PlatformIconList
          platforms={games.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
