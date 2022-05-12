import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Balance from "./pages/Balance";
import PostPage from "./pages/PostPage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
