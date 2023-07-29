import "./genres.css"

const Genre = ({ animeGenres }) => {
  console.log(animeGenres)
  if (animeGenres === "") {
    return <div className="genres">Genres: -</div>
  }

  const newLists = animeGenres.split(",")
 
  return (
    <div className="genres"> Genres: 
      {
        newLists.map((anime, key) => {
          return (
          <div key={`${anime}-${key}`}>
            {anime}
          </div>
          )
        })
      }
    </div>
  )
}


export default Genre