import { useEffect, useState } from "react";

export function Data() {
    const [productName, setProductName] = useState('');
    const [bgStyle, setBgStyle] = useState('');

    useEffect(() => {
        setProductName("SamsungTV");
        setBgStyle("bg-warning");
    }, []);

    // Perform string manipulations
    const upperCaseName = productName.toUpperCase();
    const lowerCaseName = productName.toLowerCase();
    const nameLength = productName.length;

    return (
        <div className="container-fluid">
            <h2 className={`text-center text-danger ${bgStyle}`}>Data Binding</h2>
            <dl>
                <dt>Name</dt>
                <dd>{productName}</dd>
                <dt>Uppercase Name</dt>
                <dd>{upperCaseName}</dd>
                <dt>Lowercase Name</dt>
                <dd>{lowerCaseName}</dd>
                <dt>Length of Name</dt>
                <dd>{nameLength}</dd>
            </dl>
        </div>
    );
}
