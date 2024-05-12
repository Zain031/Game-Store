import WishlistModel from "@/db/models/wishlist";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest,  { params }: { params: {id: string } }) {
    try {
    //   const id = await request.json();
      const data = await WishlistModel.delete(params.id);
  
      return NextResponse.json(
        {
          data: "Delete Successfully",
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        {
          error: "Internal Server Error",
        },
        { status: 500 }
      );
    }
  }
  