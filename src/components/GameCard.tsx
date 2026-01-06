import type { Game } from "@/hooks/useGames";
import { Card, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Card.Header>
        <Image src={game.background_image} />
      </Card.Header>
      <Card.Body>
        <Heading>{game.name}</Heading>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCard;
