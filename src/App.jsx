
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Moviedetails } from "../pages/moviedetails";
import { MoviesGrid } from "./components/moviesGrid";


export function App() {

  return (
    <>
      <Router>
        <header>
          <NavBar />

          <Routes>
            <Route path="/" element={<MoviesGrid />} />
            <Route path="/movie" element={<h1>Movies</h1>} />
            <Route path="/Serie" element={<h1>Series</h1>} />
            <Route path="/movies" element={<Moviedetails />} />


          </Routes>


        </header>

      </Router >

    </>
  )
}


