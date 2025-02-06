import React, { useState, useEffect } from 'react';
import { ANIME } from '@consumet/extensions';

const FetchData = () => {
    const [animeList, setAnimeList] = useState([]);
    const gogoAnime = new ANIME.Gogoanime();
    const list = 10;

    useEffect(() => {
        // Fetch anime data when the component mounts
        const fetchAnimeData = async () => {
            try {
                const data = await gogoAnime.getPopularAnime(list);  // Example method to fetch popular anime
                setAnimeList(data);
            } catch (error) {
                console.error('Error fetching anime data:', error);
            }
        };

        fetchAnimeData();
    }, []);

    return (
        <div>
            <h1>Popular Anime</h1>
            <ul>
                {animeList.map((anime, index) => (
                    <li key={index}>
                        <h3>{anime.title}</h3>
                        <img src={anime.image} alt={anime.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FetchData;
