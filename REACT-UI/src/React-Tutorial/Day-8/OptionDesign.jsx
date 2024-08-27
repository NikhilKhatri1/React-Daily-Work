import { useState, useRef } from "react";

export function OptionDesign() {
    const [movies, setmovies] = useState(["Lallu Bhai", "Devdas"]);
    const [newmovie, setnewmovie] = useState("");
    const [selectedMovie, setselectedMovie] = useState("");
    const [MovieIndex, setMovieIndex] = useState("");
    const [EditName, setEditName] = useState("");
    function addClick() {
        if (newmovie.trim()) {
            setmovies([...movies, newmovie]);
            setnewmovie("");
        }
    }
    function handleMovieName(e) {
        setnewmovie(e.target.value);
    }
    function SortAsc() {
        const sortMovies = [...movies].sort((a, b) => a.localeCompare(b));
        setmovies(sortMovies);
        console.log(sortMovies);
    }
    function SortDes() {
        const sortMovies = [...movies].sort((a, b) => b.localeCompare(a));
        setmovies(sortMovies)
        console.log(sortMovies);
    }
    function handleMovieSelect(e) {
        const MName = e.target.selectedIndex;
        setMovieIndex(MName);
        setEditName(movies[MName]);
    }
    function movieEditName(e) {
        e.target.value = EditName;
    }
    function saveClick() {
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
                        <input type="text" className="form-control w-75" id="movieName" value={newmovie} onChange={handleMovieName} placeholder="Enter Movie Name" />
                        <button className="btn btn-primary" onClick={addClick}>Add</button>
                    </div>
                </div>
                <div className="movieList my-2">
                    <h4>Movie List</h4>
                    <button className="btn btn-warning bi bi-sort-alpha-down" onClick={SortAsc}></button>
                    <button className="btn btn-dark bi bi-sort-alpha-up mx-2" onClick={SortDes}></button>
                    <button className="btn btn-success bi bi-pen" data-bs-target="#edit" data-bs-toggle="modal"> Edit</button>
                    <div className="modal fade" id="edit">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h3>Edit Movie Name</h3>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control" id="txtMovie" onChange={movieEditName} value={EditName} />
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success" onClick={saveClick} data-bs-dismiss="modal">Save</button>
                                    <button className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-2">
                        <select id="lstMovies" size={3} className="form-control w-100" onChange={handleMovieSelect}>
                            {
                                movies.map((movie, index) => (
                                    <option value={movie} key={index}>{movie}</option>
                                )
                                )
                            }
                        </select>
                    </div>
                    <p className="text-warning my-2 fw-bold" id="count">Total Number of Movies: {movies.length}</p>
                </div>
                <div className="controlLst">
                    <button className="btn btn-danger bi bi-trash me-1"> Remove Movie</button>
                    <button className="btn btn-outline-danger bi bi-trash ms-1">Clear All</button>
                </div>

            </div>
        </div>
    )
}