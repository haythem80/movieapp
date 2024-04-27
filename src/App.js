import { useState } from 'react';
import './App.css';
import Movielist from './components/Movielist';
import { moviesData } from './data';
import Search from './components/Search';
import Addnewmovie from './components/Addnewmovie';
import Navebar from './components/Navebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './components/Info';


function App() {

  const [movie, setMovie] = useState(moviesData)
  const [searchText, setsearchText] = useState("");
  const [rating, setRating] = useState(1);
  const handleDelete = (ID) => setMovie(movie.filter((el) => el.id !== ID));
  const handleSearchText = (x) => setsearchText(x);
  const handleRating = (x) => setRating(x);
  const handleEdit = (editedone) => setMovie(movie.map((el)=>(el.id === editedone.id ? editedone : el)))
  const handleadd = (newone) => setMovie([...movie,newone]);
  
  return (
    <Router>
    <div className="App">
    <Navebar/>
    <Search  searchText={searchText} handleSearchText={handleSearchText} rating={rating} handleRating={handleRating}/>
      <Addnewmovie handleadd={handleadd} />
    <div className='content'>
    <Routes>
      <Route path="/" element={<Movielist 
      film={movie.filter((el)=>el.name.toUpperCase().includes(searchText.toUpperCase()) && el.rating >= rating)} 
      deletefunction={handleDelete} handleEdit={handleEdit}/>} />
      <Route path="/info/:id" element={<Info film={movie}/>}/>
      </Routes>
      </div>
      
      </div>
      </Router>
  );
}

export default App;
