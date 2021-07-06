import React from 'react'

function Popup({ selected, closePopup }) {
    /*useEffect(() => {
        window.location.href = "https://www.themoviedb.org/movie/";  
    }, []);*/
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">IMDB Rating: {selected.imdbRating}</p>
				<div className="plot">
					<img src={selected.Poster} alt="N/A" />
                    <p>
                        <p>{selected.Rated} &bull; {selected.Genre} &bull; {selected.Runtime}</p>
                        <p><b>Overview:</b> {selected.Plot}</p>
                        <p><b>Director:</b> {selected.Director}</p>
                        <p><b>Actors:</b> {selected.Actors}</p>
                        <p><b>Box Office:</b> {selected.BoxOffice}</p>
                        <p><b>Awards:</b> {selected.Awards}</p>
                    </p>
                    
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup