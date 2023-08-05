import Card from "./Card";

export default interface Favorite {
    userId?: number;
    id?: number;
    favorites?: Card[];
    active?: boolean;
}