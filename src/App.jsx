import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TweetsPage from "./pages/TweetsPage";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tweets" element={<TweetsPage />} />
      <Route path="*" element={<NotFound />} redirectTo="/" />
    </Routes>
  );
}

export default App;
