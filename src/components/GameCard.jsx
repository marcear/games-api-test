import React, { useState } from "react";
import { Box, Image, Badge, useDisclosure, ScaleFade, color } from "@chakra-ui/react";

const GameCard = ({ backgroundImage, name, rating, parentPlatforms, playTime, clip }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const defaultImageContent = (
    <Image objectFit="cover" src={backgroundImage} alt={backgroundImage} height="100%" width="100%" />
  );
  const [cardContent, setCardContent] = useState(defaultImageContent);

  const getVideoContent = () => {
    if (clip)
      setCardContent(
        <video
          src=""
          playsInline
          muted
          loop
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          onMouseOver={({ target }) => {
            target.src = clip["480"];
            target.load();
            target.play();
          }}
          onMouseLeave={({ target }) => target.pause()}
        />
      );
    else {
      setCardContent(defaultImageContent);
    }
  };

  return (
    <ScaleFade initialScale={1} in="true" whileHover={{ scale: 1.025 }}>
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        marginTop={4}
        cursor="pointer"
        onMouseOver={onOpen}
        onMouseLeave={onClose}
        boxSizing="border-box"
        position={isOpen ? "relative" : ""}
        height={isOpen ? 369 : "auto"}
      >
        <Box
          position={isOpen ? "absolute" : ""}
          w={isOpen ? "100%" : "auto"}
          left={0}
          top={0}
          zIndex={isOpen ? 6 : 1}
          backgroundColor="cardBg"
        >
          <Box objectFit="cover" onMouseOver={getVideoContent} onMouseLeave={() => setCardContent(defaultImageContent)}>
            <Box height={0} position="relative" paddingBottom={"56%"} overflow="hidden">
              {cardContent}
            </Box>
          </Box>

          <Box p="6" zIndex={10}>
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
              {parentPlatforms.map((x) => (
                <Badge ml="1" colorScheme="green">
                  {x.platform.name}
                </Badge>
              ))}
            </Box>

            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
          </Box>
        </Box>
        {isOpen && (
          <Box width={"100%"} marginTop={20} mt="2" alignItems="center">
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
            <Box display="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {playTime} played time
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </ScaleFade>
  );
};

export default GameCard;
