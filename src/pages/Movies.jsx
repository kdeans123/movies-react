import React, {useEffect, useState} from 'react'
import { movies } from "../data";



const Movies = ({ movies }) => {
    return (
<>
<div id="movies__body">
    <main id="movies__main">    
        <section>
            <div className="movies__container">
              <div className='row'>
                    <div className="movies__header">
                        <h2 className='section__title movies__header--title'>Movies</h2>
                          <h2 className="search__results black">Search results:</h2>
                          <select id="filter" defaultValue="DEFAULT">
                            <option value="DEFAULT" disabled>Sort</option>
                            <option value="A_TO_Z">A to Z</option>
                            <option value="Z_TO_A">Z to A</option>
                            <option value="YEAR_DESC">Year Descending</option>
                            <option value="YEAR_ASC">Year Ascending</option>
                          </select>
                    </div>
                    <div className='movies'>
                        {
                          movies.map((movie) => (
                            <Movies movie={movie} key={movie.id}/>
                          ))
                        }
                    </div>
              </div>
                
            </div>
            <div className="overlay">
            </div>
        </section>
      </main>
  </div>
  </>
    )  
}

export default Movies;