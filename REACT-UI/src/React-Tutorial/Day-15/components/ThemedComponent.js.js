import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';



function ThemedComponent() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (

    <div className={`bg-${theme === 'light' ? 'light' : 'dark'} text-${theme === 'light' ? 'dark' : 'white'} p-3`} style={{ height: "100vh" }}>

      <h2>Theme Component :{theme} </h2>
      <button onClick={toggleTheme} className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`}>Toggle Theme</button>
    </div>
  )
}

export default ThemedComponent