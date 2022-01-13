import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import EpisodePage from "./EpisodePage";
import CharacterPage from "./CharacterPage";
import NotFound from "./NotFound";

//Making all the routes here with react-router-dom
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:id" element={<EpisodePage />} />
      <Route path="/character/:name" element={<CharacterPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
