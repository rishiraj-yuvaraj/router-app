import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './component/Home';

const MovieList = [
  {
    id : 1,
    name : "Vikram",
    rating : "⭐ 8.4",
    description : "some description",
    poster : "https://th.bing.com/th/id/OIP.8XfOHUBg-hzg3-fyNbI1AgAAAA?pid=ImgDet&rs=1"
  },
  {
    id : 2,
    name : "Naruto",
    rating : "⭐ 9.8",
    description : "some description",
    poster : "https://th.bing.com/th/id/OIP.JqjUpQZnjt6vMbWt5F95WgAAAA?pid=ImgDet&w=400&h=600&rs=1"
  },
  {
    id : 3,
    name : "Tokyo Revengers",
    rating : "⭐ 9.7",
    description : "some description",
    poster : "https://th.bing.com/th/id/OIP.ei8yzGP6-0AtDCx38w7PigHaLH?pid=ImgDet&rs=1"
  },
]

function App() {
  const[movies, setMovies] = useState(MovieList);
  return (
    <div className="App">
      {/* <Header />
      <Footer /> */}
      <Home movies= {movies} />
    </div>
  );
}

export default App;
