import React, { useEffect, useState } from 'react';

const Home = () => {
    const [searchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data.Search);
        };

        if (searchTerm) {
            fetchMovies();
        }
    }, [searchTerm]);


  return (
   <div> Movie Placeholder </div> 
  )
}

export default Home;