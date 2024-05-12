import WishlistModel from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";
import { string, ZodError } from "zod";

export async function POST(request: NextRequest) {
  try {
    const productId = await request.json();

    const data = await WishlistModel.create(productId);

    return NextResponse.json(
      {
        message: "Wishlist Added Successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const data = await WishlistModel.findAll();
    return NextResponse.json(
      {
        data: data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
