import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const prisma = new PrismaClient();
    if (body.length === 0) {
      return new NextResponse("At least one student is required", {
        status: 400,
      });
    }

    const result = await prisma.user.createMany({
      data: body,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error: any) {
    console.log("[MULTIPLE_REGISTRATION_ERROR]");
    return new NextResponse("Internal Registration Error", { status: 500 });
  }
}
