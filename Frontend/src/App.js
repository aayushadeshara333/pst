import LandingPage from "./containers/landingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "./containers/notFound";
import Game from "./containers/game";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/game" element={<Game />} />
        <Route exact path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
