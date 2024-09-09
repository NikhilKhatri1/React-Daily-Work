// App.js
import React from 'react';
import ThemedComponent from './components/ThemedComponent.js';
import { ThemeProvider } from './Context/ThemeContext.js'; // Import ThemeProvider correctly

export default function App() {
    return (
        <ThemeProvider>
            <ThemedComponent />
        </ThemeProvider>
    );
}
