import axios from "axios";
import Card from "../interfaces/Card";
import Favorite from "../interfaces/Favorite";
let api: string = `${process.env.REACT_APP_API}/favorites`;

export function getFavsById(userId: number) {
    return axios.get(`${api}?userId=${userId}`);
}
export function createUserFavs(userId: number) {
    return axios.post(api, { userId: userId, products: [], active: true });
}

export function addToFavorites(userId: number, newFavCard: Card) {
    let favorites: Favorite[] = []
    getFavsById(userId)
        .then((res) => favorites = res.data[0].favorites)
        .catch((err) => console.log(err))

    favorites.push(newFavCard)

    return axios.patch(`${api}?userId=${userId}`, { favorites })
}
