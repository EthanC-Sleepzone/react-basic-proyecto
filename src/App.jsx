import { Route, Routes } from "react-router-dom";
import StarsBackground from "./components/StarsBackground/StarsBackground";
import Characters from "./pages/Characters/Characters";
import Character from "./pages/Character/Character";

const App = () => {
  return (
    <>
      <StarsBackground />
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </>
  );
};

export default App;