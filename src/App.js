import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Balance from "./pages/Balance";

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
