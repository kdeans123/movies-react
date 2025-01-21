import React, {useEffect, useState} from 'react'







const Home = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`https://www.omdbapi.com/?apikey=aecc1b78&s=${searchTerm}`);
            const data = await response.json();
            setSearchResults(data);
        };

        if (searchTerm) {
            fetchData();
        }
    }, [searchTerm]);

  return (
    
  )
}

export default Home;