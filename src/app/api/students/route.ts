import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const students = await prisma.user.findMany();

    return NextResponse.json(students, { status: 200 });
  } catch (error: any) {
    console.log("[All_STUDENT_GET_ERROR]", error);
    return new NextResponse("student information retriev failed", {
      status: 500,
    });
  }
}
