import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const Recipes = () => {
    const { recipesData, isLoading } = useGlobalContext();

    if (!recipesData) return;
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className="row">
                {recipesData?.map((recipeData) => (
                    <Link
                        key={recipeData.idMeal}
                        to={`/recipes/${recipeData.idMeal}`}
                        className="col-12 col-md-6 col-lg-4 g-5"
                    >
                        <article>
                            <img
                                src={
                                    recipeData.strMealThumb === "N/A"
                                        ? "https://placehold.co/600x400"
                                        : recipeData.strMealThumb
                                }
                                alt={recipeData.strMeal}
                            />
                            <div>
                                <h4>{recipeData.strMeal}</h4>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    );
};
