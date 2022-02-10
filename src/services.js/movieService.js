const key = "f5e829f8675642de9187a93ec807ea51";
const baseUri = "https://api.rawg.io/api";

export const getGames = async (pageNumber = 1) => {
  try {
    const req = await fetch(`${baseUri}/games?key=${key}&page=${pageNumber}&page_size=50`, {
      method: "GET",
    });

    const data = await req.json();
    return data.results;
  } catch (error) {
    console.log("data", error);
  }
};
