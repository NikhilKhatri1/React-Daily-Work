import { useContext, createContext } from "react";

const nameContext = createContext();

export const NameProvider = ({ child }) => {
    const name = 'john doe';
    return (
        <nameContext.Provider value={name}>
            {child}
        </nameContext.Provider>
    )
}
export const useName = () => {
    useContext(nameContext);
}