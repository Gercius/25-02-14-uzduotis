import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Recipe } from "../../pages/Recipe";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
    );
};

export default App;
