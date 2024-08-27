
import React from "react";
export function ButtonDemo() {

    function HandleDoubleClick() {
        window.open('iphone1.PNG', 'Iphone', 'width=400 height=400')
    }
    function handleRightClick(e) {
        e.preventDefault();
        alert("Right Click is not Allowed");

        // document.oncontextmenu = function () {
        //     return false;
        // }
    }


    return (
        <div className="container-fluid" onContextMenu={handleRightClick}>
            <h2>Iphone image</h2>

            <img src="iphone1.PNG" alt="iphone" onDoubleClick={HandleDoubleClick} width={100} height={100} />


        </div >
    )

}