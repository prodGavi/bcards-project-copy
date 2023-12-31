import axios from "axios"; import User from "../interfaces/User";
let api: string = `${process.env.REACT_APP_API}/users`;



export function addUser(newUser: User) {
    return axios.post(api, newUser);
}

export function checkUser(userToCheck: User) {
    return axios.get(
        `${api}?email=${userToCheck.email}&password=${userToCheck.password}`
    );
}

export function getUserByEmail(email: string) {
    return axios.get(`${api}?email=${email}`);
}