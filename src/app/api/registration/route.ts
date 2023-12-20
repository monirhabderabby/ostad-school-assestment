import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { first_name, last_name, age, grade, courses } = body;

  try {
    const prisma = new PrismaClient();
    if (!first_name) {
      return new NextResponse("first name is required", { status: 500 });
    }
    if (!last_name) {
      return new NextResponse("last name is required", { status: 500 });
    }

    const result = await prisma.user.create({
      data: body,
    });
    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.log("[SINGLE_REGISTRATION_ERROR]", error);
    return new NextResponse("Internal Registration Error", { status: 500 });
  }
}
