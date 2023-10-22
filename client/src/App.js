import Layout from "./pages/Layout/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
