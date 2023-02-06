import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/Navbar";
import Genre from "./page/Genre";
import ListMovie from "./page/ListMovie";
import DetailMovie from "./page/DetailMovie";
import ListGenre from "./page/ListGenre";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/list-genre/:idGenre" element={<ListGenre />} />
          <Route path="/list-movie" element={<ListMovie />} />
          <Route path="/detail-movie/:id" element={<DetailMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
