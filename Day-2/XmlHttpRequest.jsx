import { useState, useEffect } from React;

function XmlHttpRequest() {
    const [product, setproduct] = useState([{
        title: "", price: 0,
        rating: { rate: 0, reviews: 0, ratings: 0 }, offers: [], image: ""
    }]);
    function LoadData() {
        var http = new XMLHttpRequest();
        http.open("get", "product.json", true);
        http.send();
        http.onreadystatechange() = function () {
            if (http.readyState == 4) {
                setproduct(JSON.parse(http.responseText));
            }
        }
    }

}