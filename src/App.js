import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Albums from "./pages/Albums";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Posts from "./pages/Posts";

const BASE_URL = "https://jsonplaceholder.typicode.com";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Homepage url={BASE_URL} />} />
        <Route path="posts/:userId" element={<Posts url={BASE_URL} />} />
        <Route path="albums/:userId" element={<Albums url={BASE_URL} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
