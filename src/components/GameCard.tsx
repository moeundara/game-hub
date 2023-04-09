import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  games: Game;
}

const GameCard = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(games.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{games.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={games.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore metacritic={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
