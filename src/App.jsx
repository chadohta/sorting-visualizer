import React from "react";
import { useEffect, useState } from "react";
import ScreenTooSmallErrorPage from "./components/ScreenTooSmallErrorPage";
import SortingVisualizer from "./components/SortingVisualizer";
import "./App.css";

const App = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <>
            {windowSize < 1000 && <ScreenTooSmallErrorPage />}
            {windowSize >= 1000 && (
                <>
                    <div className="App">
                        <SortingVisualizer />
                    </div>
                </>
            )}
        </>
    );
};

export default App;
