import { Link, useParams } from "react-router-dom";
import { formatIngredientData } from "../utils";
import { getRecipe } from "../services/get-recipe";

export const RecipePage = () => {
    const { id } = useParams();
    const { isLoading, error, recipesData } = getRecipe(`lookup.php?i=${id}`);

    if (isLoading) return <h1 className="text-center">Loading...</h1>;

    if (error.show) {
        return (
            <div className="text-center">
                <h1>{error.msg}</h1>
                <Link to="/" className="btn btn-secondary">
                    Back
                </Link>
            </div>
        );
    }

    if (!recipesData || !recipesData.length) {
        return <div>No recipe found</div>;
    }

    const recipe = recipesData[0];
    const { strMeal: title, strMealThumb: image, strInstructions: instructions } = recipe;
    const ingredientData = formatIngredientData(recipe);

    return (
        <>
            {error.show ? (
                <div className="text-center">
                    <h1>{error.msg}</h1>
                    <Link to="/" className="btn btn-secondary">
                        Back
                    </Link>
                </div>
            ) : (
                <section className="mx-auto p-3 p-md-5 recipePage">
                    <img className="d-block mx-auto" src={image} alt={title} />
                    <div className="px-lg-5 px-md-3">
                        <h1 className="text-center py-2">{title}</h1>
                        <h3>Instructions</h3>
                        <p>{instructions}</p>
                        <ul className="p-0 mt-3">
                            <h3>Ingredients:</h3>
                            {ingredientData.ingredients.map((ingredient, index) => (
                                <li className="px-1" key={index}>
                                    - {ingredient}: {ingredientData.measures[index]}
                                </li>
                            ))}
                        </ul>
                        <Link to="/" className="btn btn-secondary">
                            Back
                        </Link>
                    </div>
                </section>
            )}
        </>
    );
};
