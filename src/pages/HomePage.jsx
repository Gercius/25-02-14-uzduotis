import { Recipes } from "../components/Recipes";
import { Search } from "../components/Search";

export const HomePage = () => {
    return (
        <main className="container">
            <Search />
            <Recipes />
        </main>
    );
};
