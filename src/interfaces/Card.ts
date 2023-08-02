export default interface Card {
    id?: number;
    title?: string;
    subtitle?: string;
    description?: string;
    phone?: string;
    email: string;
    web?: string;
    image?: string;
    imageAlt?: string;
    state?: string;
    city?: string;
    street?: string;
    country?: string;
    houseNumber?: number;
    zip?: number;
    userId?: number;
}