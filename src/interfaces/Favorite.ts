import Card from "./Card";

export default interface User {
    userId?: number;
    favorites?: Card[];
    active?: boolean;
}