import { Box } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: Record<
    number,
    { label: string; symbol: string; fontSize: string }
  > = {
    3: { label: "meh", symbol: "😑", fontSize: "20px" },
    4: { label: "recommended", symbol: "👍", fontSize: "20px" },
    5: { label: "exceptional", symbol: "🎯", fontSize: "25px" },
  };

  const emoji = emojiMap[rating];
  if (!emoji) return null;

  return (
    <Box
      as="span"
      role="img"
      aria-label={emoji.label}
      fontSize={emoji.fontSize}
      marginTop={1}
    >
      {emoji.symbol}
    </Box>
  );
};

export default Emoji;
