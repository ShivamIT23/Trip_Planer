import { useContext } from "react";
import { ItemContext } from "../contexts/ItemsContextProvider";

export const useItemContext = () => {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error(
            "useItemsContext must be used within an ItemsContextProvider"
        );
    }
    return context;
}