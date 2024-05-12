import Product from "@/db/models/product";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const search = request.nextUrl.searchParams.get("search") as string;
  console.log(search);
  try {
    const products = await Product.findAll();
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();
    const data = await Product.add(body);

    console.log(data);

    return NextResponse.json(
      {
        data: `New Product Successfully Added`,
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
