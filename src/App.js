import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Balance from "./pages/Balance";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/Login";

import { bootstrapLoginState } from "./store/auth/action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
