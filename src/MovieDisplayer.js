import "./MovieDisplayer.css"

const MovieDisplayer = ({ movies }) => {
  const headline = movies
    .slice(0, 3)
    .map(movie => movie.title)
    .join(", ")
  const alphabetizedMovies = movies.sort((movieA, movieB) => {
    if (movieA.title > movieB.title) {
      return 1
    } else if (movieA.title < movieB.title) {
      return -1
    } else {
      return 0
    }
  })
  const allGenres = alphabetizedMovies.map(movie => (
    <li key={movie.id}>
      <img src={movie.posterUrl} alt={movie.title} />
    </li>
  ))
  const comedies = alphabetizedMovies.filter(movie => movie.genre === "Comedy")
    .map(movie => (
      <li key={movie.id}>
        <img src={movie.posterUrl} alt={movie.title} />
      </li>
    ))

  return (
    <div className="MovieDisplayer">
      <h2>{headline}, and more!</h2>
      <h3>Comedies</h3>
      <ul>{comedies}</ul>
      <h3>All Movies</h3>
      <ul>{allGenres}</ul>
    </div>
  )
}

export default MovieDisplayer
