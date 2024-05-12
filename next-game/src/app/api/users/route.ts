import User from "@/db/models/user";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    //1.menagkap data dari req body
    //2.create user di mongo db
    //3/res.json
    const body = await request.json();
    await User.create(body);
    return Response.json({
      message: "User registered successfully",
    });
  } catch (error: any) {
    if (error instanceof ZodError) {
      const errPath = error.issues[0].path[0];
      const errMessage = error.issues[0].message;

      return Response.json(
        {
          errors: `${errPath} ${errMessage}`,
        },
        { status: 400 }
      );
    }
    if (error.code === 11000) {
      return Response.json(
        {
          message: "Email already exist",
        },
        { status: 400 }
      );
    }
    return Response.json(
      { message: "internal server Errors" },
      { status: 500 }
    );
  }
}
