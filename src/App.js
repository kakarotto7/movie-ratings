import React, { useState } from 'react'
import axios from 'axios'
import { SocialIcon } from 'react-social-icons'
import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=82331ad7";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
  
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      //console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }

  return (
    <div className="App">
      <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src="movie.jpg"/>
              </td>
              <td width="10"/>
              <td>
                <h1><a href="https://kakarotto-movie-ratings.netlify.app/">Movie Ratings</a></h1>
              </td>
            </tr>
          </tbody>
        </table>
      <main>
        <Search handleInput={handleInput} search={search} />

        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>

      <footer className="footer">
        <div>Made by Rajat Goyal | Copyright &copy; 2021</div>
        <div>Follow on <SocialIcon url="https://linkedin.com/in/rajatgoyal7" style={{ height: 35, width: 35, margin: 10 }} /><SocialIcon url="https://github.com/kakarotto7" style={{ height: 35, width: 35, margin: 10 }} /></div>
      </footer>
      
    </div>
  );
}

export default App