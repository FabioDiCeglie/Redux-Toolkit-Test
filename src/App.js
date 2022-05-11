import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Balance from "./pages/Balance";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
