import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./containers/App";
import NoPage from "./containers/NoPage";
import Profile from "./containers/Profile";
import Game from "./containers/Game";
import Alphabet from "./containers/Alphabet";
import Learn from "./containers/Learn";
import AlphabetGame from "./containers/AlphabetGame";
import GrammarGame from "./containers/GrammarGame";

const ArmuoRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Profile />} />
          <Route path="learn" element={<Learn />} />
          <Route path="abc" element={<Alphabet />} />

          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/game" element={<Game />}>
          <Route index element={<GrammarGame />} />
          <Route path="abc" element={<AlphabetGame />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ArmuoRoutes;
