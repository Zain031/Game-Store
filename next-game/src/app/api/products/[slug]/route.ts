import Product from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const data = await Product.findBySlug(params.slug);

    return NextResponse.json(
      {
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
