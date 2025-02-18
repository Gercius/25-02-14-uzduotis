import { useEffect, useState } from "react";

const API_ENDPOINT = "https://www.themealdb.com/api/json/v1/1/";

export const getRecipe = (urlParams) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({ show: false, msg: "" });
    const [recipesData, setRecipesData] = useState(null);

    const fetchRecipe = async (url) => {
        if (!urlParams) return;
        setIsLoading(true);
        setError({ show: false, msg: "" });

        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            if (data.meals === null) {
                throw new Error("No recipes found");
            }

            setRecipesData(data.meals || data);
        } catch (err) {
            setRecipesData(null);
            setError({ show: true, msg: err.message });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRecipe(`${API_ENDPOINT}${urlParams}`);
    }, [urlParams]);

    return { isLoading, error, recipesData };
};
