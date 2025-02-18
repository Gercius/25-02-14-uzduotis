export function formatIngredientData(recipeData) {
    const formattedData = {
        ingredients: [],
        measures: [],
    };
    for (const [key, value] of Object.entries(recipeData)) {
        if (key.includes("strIngredient") && value && value.trim() !== "") {
            formattedData.ingredients.push(value);
        }
        if (key.includes("strMeasure") && value && value.trim() !== "") {
            formattedData.measures.push(value);
        }
    }

    return formattedData;
}
