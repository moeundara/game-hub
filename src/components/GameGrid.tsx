import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardGameSkeleton from "./CardGameSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="10px"
      >
        {isLoading && skeletons.map((s) => <CardGameSkeleton key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} games={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
