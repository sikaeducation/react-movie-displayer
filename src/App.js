import MovieDisplayer from "./MovieDisplayer"
import "./App.css";

const App = () => {
  const movies = [{
    id: 1,
    title: "Star Wars",
    genre: "Fantasy",
    posterUrl: "https://theposterdb.com/api/assets/437/view?",
  },{
    id: 2,
    title: "Clerks",
    genre: "Comedy",
    posterUrl: "https://theposterdb.com/api/assets/61803/view?",
  },{
    id: 3,
    title: "Super Troopers",
    genre: "Comedy",
    posterUrl: "https://theposterdb.com/api/assets/36803/view?",
  },{
    id: 4,
    title: "The Godfather",
    genre: "Drama",
    posterUrl: "https://theposterdb.com/api/assets/8935/view?",
  },{
    id: 5,
    title: "Memento",
    genre: "Thriller",
    posterUrl: "https://theposterdb.com/api/assets/52628/view?",
  }]

  return (
    <div className="App">
      <MovieDisplayer movies={ movies } />
    </div>
  )
}

export default App;
