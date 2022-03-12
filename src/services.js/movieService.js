const baseUri = "https://api.rawg.io/api";

export const getGames = async (pageNumber = 1) => {
  try {
    const req = await fetch(`${baseUri}/games?key=${import.meta.env.VITE_API_KEY}&page=${pageNumber}&page_size=10`, {
      method: "GET",
    });

    const data = await req.json();

    for (const game of data.results) {
      const response = await fetch(`${baseUri}/games/${game.id}/movies?key=${import.meta.env.VITE_API_KEY}`);
      const gameClip = await response.json();

      if (gameClip && gameClip.results.length) {
        game.clip = gameClip.results[0].data;
      }
    }

    return data.results;
  } catch (error) {
    console.log("data", error);
  }
};
