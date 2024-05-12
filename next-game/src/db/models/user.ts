import { z } from "zod";
import { db } from "../config";
import { ObjectId, WithId } from "mongodb";
import bcrypt from "bcryptjs";

const UserScema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type UserType = z.infer<typeof UserScema>;
export type UserWithId = WithId<UserType>;

export default class User {
  static col() {
    return db.collection<UserType>("Users");
  }
  static async findAll() {
    return await this.col().find({}).toArray();
  }
  static async create(newUser: UserType) {
    UserScema.parse(newUser);

    newUser.password = await bcrypt.hash(newUser.password, 10);
    const result = await this.col().insertOne(newUser);
    return result;
  }
  static async findByPk(id: string) {
    return await this.col().findOne({
      _id: new ObjectId(id),
    });
  }
}

// export const UserLogin = z.object({
//   email: z.string().email().nonempty({
//     message: "Email required",
//   }),
//   password: z.string().min(5).nonempty({
//     message: "Password required",
//   }),
// });
