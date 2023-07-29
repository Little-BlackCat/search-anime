import Genre from "../Genres/Genre"
import SvgIcon from '@mui/material/SvgIcon';
import "./card.css"
import { Link } from "react-router-dom";


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Card = ({ animeData }) => {
  const { value, label, genres, image } = animeData;

  return (
    <div className="container">
      <Link to="/"><HomeIcon color="primary" fontSize="large" className="icon" /></Link>
      <div className="card">
        <img src={image} alt="" />
        <div className="details">
          <div className="title">{label}</div>
          {/* <div className="jpName">鬼滅の刃</div> */}
          <Genre animeGenres={genres}  />
        </div>
      </div>
    </div>
  )
}

export default Card