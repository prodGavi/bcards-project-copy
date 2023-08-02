export default interface User {
    id?: number;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    password: string;
    phone?: string;
    email: string;
    image?: string;
    state?: string;
    country?: string;
    city?: string;
    street?: string;
    houseNumber?: number;
    zip?: number;
    role?: string;
}