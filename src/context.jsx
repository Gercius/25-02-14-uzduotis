import { createContext } from "react";
import { useContext, useState } from "react";
import { getRecipe } from "./services/get-recipe";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [query, setQuery] = useState("");
    const { isLoading, error, recipesData } = getRecipe(`${query ? "search.php?s=" + query : ""}`);

    return (
        <AppContext.Provider value={{ isLoading, error, recipesData, query, setQuery }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
