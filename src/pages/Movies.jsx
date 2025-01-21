import React, {useEffect, useState} from 'react'




const Movies = ({ movies }) => {
    return (
<>
<section id="movies">    
    <section id="search">
    <div className="content__wrapper">
      <div className="movies__header">
          <h2 className="search__results black">Search results:</h2>
          <select id="filter" onchange="filterMovies(event)">
            <option value="" disabled selected>Sort</option>
            <option value="A_TO_Z">A to Z</option>
            <option value="Z_TO_A">Z to A</option>
            <option value="YEAR_DESC">Year Descending</option>
            <option value="YEAR_ASC">Year Ascending</option>
          </select>
        </div>
      <div className="movies__container">

      </div>
  
    </div>

    <div className="overlay">
    </div>

  </section>
  </section>
  </>
    )  
}

export default Movies;