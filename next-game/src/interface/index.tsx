import { ObjectId } from "mongodb";

export interface Products {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tag: string;
    thumbnail: string;
    image: string[]
    createdAt: string;
    updatedAt: string
}

export interface Users {
    _id: ObjectId
    name: string,
    username: string,
    email: string,
    password: string
    findByEmail: string

}

export interface Wishlist {
    _id: ObjectId,
    productId: ObjectId,
    createdAt: string,
    updatedAt: string,
    productDetail: Products
}


