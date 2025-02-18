import { useGlobalContext } from "../context";

export const Search = () => {
    const { query, setQuery, error } = useGlobalContext();

    return (
        <form className="text-center">
            <h2>Search recipes</h2>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            {error.show && <div>{error.msg}</div>}
        </form>
    );
};
