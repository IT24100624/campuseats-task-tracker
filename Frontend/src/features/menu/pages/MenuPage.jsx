import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useDebounce } from "../hooks/useDebounce";
import MenuList from "../components/MenuList";

function MenuPage() {
    const { data: dishes, isLoading, error } = useFetch("/menu.json");
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 400);

    if (isLoading) return <p>Loading menu…</p>; // 1. loading
    if (error) return <p>Could not load menu: {error}</p>; // 2. error

    const filteredDishes = dishes
        ? dishes.filter((d) => d.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
        : [];

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
            />
            <MenuList dishes={filteredDishes} />
        </div>
    );
}
export default MenuPage;