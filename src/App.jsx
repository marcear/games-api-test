import "./App.css";
import GamesList from "./components/GameList";
import Filters from "./components/Filters";
import { Container } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Container maxW="container.xl" centerContent>
        <GamesList />
      </Container>
    </div>
  );
}

export default App;
