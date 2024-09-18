import { useState } from "react";

export function OptionDesign() {
    const [movies, setMovies] = useState(["Avengers", "Devdas"]);
    const [newMovie, setNewMovie] = useState("");
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);
    const [editName, setEditName] = useState("");

    function addClick() {
        if (newMovie.trim()) {
            setMovies([...movies, newMovie]);
            setNewMovie("");
        }
    }

    function handleMovieName(e) {
        setNewMovie(e.target.value);
    }

    function sortAsc() {
        const sortedMovies = [...movies].sort((a, b) => a.localeCompare(b));
        setMovies(sortedMovies);
    }

    function sortDes() {
        const sortedMovies = [...movies].sort((a, b) => b.localeCompare(a));
        setMovies(sortedMovies);
    }

    function handleMovieSelect(e) {
        const index = e.target.selectedIndex;
        setSelectedMovieIndex(index);
        setEditName(movies[index]);
    }

    function handleEditNameChange(e) {
        setEditName(e.target.value);
    }

    function saveClick() {
        if (selectedMovieIndex !== null) {
            const updatedMovies = [...movies];
            updatedMovies[selectedMovieIndex] = editName;
            setMovies(updatedMovies);
            setEditName("");
        }
    }

    function removeMovie() {
        if (selectedMovieIndex !== null) {
            const updatedMovies = movies.filter((_, index) => index !== selectedMovieIndex);
            setMovies(updatedMovies);
            setSelectedMovieIndex(null);
            setEditName("");
        }
    }

    function clearAll() {
        setMovies([]);
        setSelectedMovieIndex(null);
        setEditName("");
    }

    return (
        <div className="border border-2 w-25 m-4 p-2">
            <div className="container-fluid">
                <h3 className="text-center">Movie Details</h3>
                <hr />
                <div className="addContainer my-2">
                    <h4>Movie Name:</h4>
                    <div className="d-flex input-group">
                        <input
                            type="text"
                            className="form-control w-75"
                            id="movieName"
                            value={newMovie}
                            onChange={handleMovieName}
                            placeholder="Enter Movie Name"
                        />
                        <button className="btn btn-primary" onClick={addClick}>
                            Add
                        </button>
                    </div>
                </div>
                <div className="movieList my-2">
                    <h4>Movie List</h4>
                    <button className="btn btn-warning bi bi-sort-alpha-down" onClick={sortAsc}></button>
                    <button className="btn btn-dark bi bi-sort-alpha-up mx-2" onClick={sortDes}></button>
                    <button
                        className="btn btn-success bi bi-pen"
                        data-bs-target="#edit"
                        data-bs-toggle="modal"
                        disabled={selectedMovieIndex === null}
                    >
                        Edit
                    </button>
                    <div className="modal fade" id="edit">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Edit Movie Name</h3>
                                </div>
                                <div className="modal-body">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="txtMovie"
                                        onChange={handleEditNameChange}
                                        value={editName}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success" onClick={saveClick} data-bs-dismiss="modal">
                                        Save
                                    </button>
                                    <button className="btn btn-danger" data-bs-dismiss="modal">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <select
                            id="lstMovies"
                            size={3}
                            className="form-control w-100"
                            onChange={handleMovieSelect}
                        >
                            {movies.map((movie, index) => (
                                <option value={movie} key={index}>
                                    {movie}
                                </option>
                            ))}
                        </select>
                    </div>
                    <p className="text-warning my-2 fw-bold" id="count">
                        Total Number of Movies: {movies.length}
                    </p>
                </div>
                <div className="controlLst">
                    <button className="btn btn-danger bi bi-trash me-1" onClick={removeMovie} disabled={selectedMovieIndex === null}>
                        Remove Movie
                    </button>
                    <button className="btn btn-outline-danger bi bi-trash ms-1" onClick={clearAll}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
}
