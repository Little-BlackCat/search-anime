import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { animeApiOption, ANIME_URL } from "../../api";
import "./animeoption.css";

const AnimeOption = ({ onSearchChange }) => {

  const [animeLists, setAnimeLists] = useState([]);

  async function loadOptions(inputValue) {
    try {
      const response = await fetch(`${ANIME_URL}&search=${inputValue}`,animeApiOption);
      const result = await response.json();
      // console.log(result)
      return {
        options : result.data.map((anime) => {
          return {
            value: `${anime._id}`,
            label: `${anime.title}`,
            genres: `${anime.genres}`,
            image: `${anime.image}`
          }
        })
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleOnChange = (searchData) => {
    setAnimeLists(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for anime title"
      debounceTimeout={600}
      value={animeLists}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="input"
    />
  );
};

export default AnimeOption;
