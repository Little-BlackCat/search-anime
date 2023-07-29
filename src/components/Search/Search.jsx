import { useState } from "react";
import AnimeOption from "../AnimeOption/AnimeOption";
import "./search.css";
import { Link } from "react-router-dom";


const Search = ({ searchData }) => {
  const [ data, setData ] = useState([])
  const handleOnSearchChange = (animeData) => {
    setData(animeData)
    searchData(animeData)
  }

  return (
    <div className="container">
      <form action="">
        <label htmlFor="">Anime Title Name</label>
        {/* <input type="text" name="" id="name" placeholder="Search Anime by Title Name...." /> */}
        <AnimeOption onSearchChange={handleOnSearchChange} className="input" />
        <Link to="/card-detail"><button>Search</button></Link>
      </form>
    </div>
  );
};

export default Search;
