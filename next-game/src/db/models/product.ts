import { Products } from "@/interface";
import { db } from "../config";
import { z } from "zod";

type NewProduct = Omit<Products, "createdAt" | "updatedAt">;
const ProductSchema = z.object({
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number(),
  tag: z.string().array(),
  thumbnail: z.string(),
  images: z.string().array(),
});

export default class Product {
  static col() {
    return db.collection<Products>("Products");
  }

  static async findAll() {
    return await this.col().find({}).toArray();
  }

  static async findBySlug(slug: string) {
    const products = (await this.col().findOne({ slug })) as Products | null;
    return products;
  }

  static async add(newProduct: NewProduct) {
    const parseResult = ProductSchema.safeParse(newProduct);

    if (!parseResult.success) {
      throw parseResult.error;
    }

    const products = await this.col().insertOne({
      ...newProduct,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    });

    return products;
  }

  static async search(searchParams: string) {
    const products = (await this.col()
      .find({ name: { $regex: searchParams, $options: "i" } })
      .toArray()) as Products[];
    console.log(products);

    return products;
  }
}
