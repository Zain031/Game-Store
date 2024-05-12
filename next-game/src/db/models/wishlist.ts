import { ObjectId } from "mongodb";
import { db } from "../config";
import { z } from "zod";

const NewWishlistSchema = z.object({
  productId: z.string(),
});

class WishlistModel {
  static col() {
    return db.collection("Wishlist");
  }
  static async create(productId: string) {
    const parseResult = NewWishlistSchema.safeParse({ productId });

    if (!parseResult.success) {
      throw parseResult.error;
    }

    return await this.col().insertOne({
      productId: new ObjectId(String(productId)),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  static async findAll() {
    return await this.col()
      .aggregate([
        {
          $lookup: {
            from: "Products",
            localField: "productId",
            foreignField: "_id",
            as: "productDetail",
          },
        },
        {
          $unwind: {
            path: "$productDetail",
          },
        },
      ])
      .toArray();
  }



  static async delete(id: string) {
    return await this.col().deleteOne({
      _id: new ObjectId(String(id)),
    });
  }
  
  
}

export default WishlistModel;
