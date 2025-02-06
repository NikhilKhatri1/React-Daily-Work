// App.js
import { useEffect, useState } from 'react';
import './App.css';
import SpotLightSection from './SpotLightSection';

function App() {
    const [topAiring, setTopAiring] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch top airing anime
                const airingResponse = await fetch('https://graphql.anilist.co', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
              {
                Page(page: 1, perPage: 10) {
                  media(type: ANIME, sort: TRENDING_DESC) {
                    id
                    title {
                      romaji
                    }
                    coverImage {
                      large
                    }
                    episodes
                    duration
                    format
                  }
                }
              }
            `
                    })
                });

                // Fetch categories
                const categoriesResponse = await fetch('https://graphql.anilist.co', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query: `
              {
                GenreCollection
              }
            `
                    })
                });

                const airingData = await airingResponse.json();
                const categoryData = await categoriesResponse.json();

                setTopAiring(airingData.data.Page.media);
                setCategories(categoryData.data.GenreCollection);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="app">
            {/* Navigation Sidebar */}
            <nav className="sidebar">
                <div className="logo">Huanime</div>
                <ul className="nav-menu">
                    <li>Home</li>
                    <li>Subbed Anime</li>
                    <li>Dubbed Anime</li>
                    <li>Most Popular</li>
                    <li>Movies</li>
                    <li>TV Series</li>
                    <li>OVAs</li>
                    <li>ONAs</li>
                </ul>

                {/* Categories Section */}
                <div className="categories">
                    <h3>Categories</h3>
                    <div className="category-grid">
                        {categories.map((genre, index) => (
                            <div key={index} className="category-item">{genre}</div>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                <header className="search-bar">
                    <input type="text" placeholder="Search anime..." />
                </header>

                {/* Spotlight Section */}
                <section className="spotlight">
                    <h2>#8 Spotlight</h2>
                    <div className="spotlight-card">
                        <img src="demon-slayer-cover.jpg" alt="Demon Slayer" />
                        <div className="spotlight-info">
                            <h3>Demon Slayer: Kimetsu no Yaiba Hashira Training Arc</h3>
                            <div className="meta">
                                <span>TV</span>
                                <span>24m</span>
                                <span>May 12, 2024</span>
                            </div>
                            <p>Adaptation of the Hashira Training Arc...</p>
                            <div className="actions">
                                <button>Watch Now</button>
                                <button>Details</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Top Airing Section */}
                <section className="top-airing">
                    <h2>Top Airing</h2>
                    <div className="anime-grid">
                        {topAiring.map(anime => (
                            <div key={anime.id} className="anime-card">
                                <img src={anime.coverImage.large} alt={anime.title.romaji} />
                                <h4>{anime.title.romaji}</h4>
                                <div className="meta">
                                    <span>{anime.format}</span>
                                    <span>{anime.episodes} eps</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <SpotLightSection />
        </div>
    );
}

export default App;