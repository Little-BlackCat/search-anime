import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [ searchAnimeData, setSearchAnimeData ] = useState({})


  function getData (data) {
    // console.log(data)
    const updateData = { 
      ...searchAnimeData,
      value: data.value,
      label: data.label,
      genres: data.genres,
      image: data.image 
    }
    setSearchAnimeData(updateData)
    // console.log(searchAnimeData)
  }

  useEffect (() => {
    console.log(searchAnimeData); // ค่าใหม่ของ searchData
  }, [searchAnimeData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Search searchData={getData} />}
        />
        <Route path="/card-detail" element={<Card animeData={searchAnimeData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
