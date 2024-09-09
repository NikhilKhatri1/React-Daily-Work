import { useRef, useState } from "react";


export function VideoPlayer() {
    const [isplaying, setIsplaying] = useState(false);
    const PlayRef = useRef(null);

    function HandleClick() {
        const NextIsPlaying = !isplaying;
        setIsplaying(NextIsPlaying);
        if (NextIsPlaying) {
            PlayRef.current.play();
        }
        else {
            PlayRef.current.pause();
        }
    }

    return (
        <div className="m-4 p-4">
            <button className="btn btn-primary d-block mb-3" onClick={HandleClick}>{isplaying ? "pause" : "play"}</button>

            <video
                width={250}
                ref={PlayRef}
            >
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4" />
            </video>
        </div >
    )
}
