import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

const GameCard = ({ backgroundImage, name, rating, added, playTime }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" marginTop={4} cursor="pointer">
      <Image src={backgroundImage} alt={backgroundImage} minH={250} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {name}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {rating}
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {name}
        </Box>

        <Box>
          {added}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box display="flex" mt="2" alignItems="center">
          {/* {Array(5)
        .fill("")
        .map((_, i) => (
          <StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
        ))} */}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {playTime} played time
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GameCard;
