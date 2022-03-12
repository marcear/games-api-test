import React, { useState, useEffect, useRef, useCallback } from "react";
import { getGames } from "../services.js/movieService";
import { SimpleGrid, Stack, Spinner, Grid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import Filters from "./Filters";

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [filteredGamesData, setFilteredGamesData] = useState([]);
  const [element, setElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const loadMore = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        !loading && setPageNumber((pageNumber) => pageNumber + 1);
      }
    },
    [element]
  );

  const observer = useRef(new IntersectionObserver(loadMore, { root: null, rootMargin: "100px", threshold: 1 }));

  const getGamesData = async () => {
    setLoading(true);
    const data = await getGames(pageNumber);
    setLoading(false);
    const updatedGames = [...games, ...data];
    setGames(updatedGames);
    setFilteredGamesData(updatedGames);
  };

  useEffect(() => {
    if (filteredGamesData.length === games.length) getGamesData();
  }, [pageNumber]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) currentObserver.observe(currentElement);

    return () => {
      if (currentElement) currentObserver.unobserve(currentElement);
    };
  }, [element]);

  const getGameCards = () => {
    if (!filteredGamesData.length) return;

    return filteredGamesData.map((game) => (
      <GameCard
        key={game.id}
        backgroundImage={game.background_image}
        name={game.name}
        rating={game.rating}
        parentPlatforms={game.parent_platforms}
        playTime={game.playtime}
        clip={game.clip}
      />
    ));
  };

  const handleApplyFilters = (filters) => {
    let filtered = games.filter((x) => x.name.toLowerCase().includes(filters.searchText.toLowerCase()));

    switch (filters.selectedOrder) {
      case "name":
        filtered = filtered.sort((a, b) => (a.name < b.name ? -1 : 1));
        break;
      case "rating":
        filtered = filtered.sort((a, b) => (a.rating < b.rating ? -1 : 1));
        break;
    }
    setFilteredGamesData(filtered);
  };

  return (
    <>
      <Filters handleApplyFilters={handleApplyFilters} />
      <Grid templateColumns="repeat(auto-fill, minmax(380px, 1fr))" width={"100%"} justifyContent="center" gap={6}>
        {getGameCards()}
      </Grid>
      {loading ? <Spinner size="xl" /> : <Stack direction="row" height={100} width="100%" ref={setElement}></Stack>}
    </>
  );
};

export default GamesList;
