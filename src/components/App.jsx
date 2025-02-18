import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RecipePage } from "../pages/RecipePage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes/:id" element={<RecipePage />} />
        </Routes>
    );
};

export default App;
