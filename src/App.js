import { Routes, Route } from "react-router-dom";
import { Homepage, Balance } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/balance" element={<Balance />} />
      </Routes>
    </div>
  );
}

export default App;
