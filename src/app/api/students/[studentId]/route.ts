import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

interface IParams {
  studentId: string;
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  try {
    const prisma = new PrismaClient();
    const studentId = params.studentId;

    if (!studentId) {
      return new NextResponse("student id is required", { status: 400 });
    }

    const deletedResult = await prisma.user.delete({
      where: {
        id: Number(studentId),
      },
    });

    return NextResponse.json(deletedResult, { status: 200 });
  } catch (error: any) {
    console.log("[SINGLE_STUDENT_DELETE_ERROR]", error);
    return new NextResponse("student information delete failed", {
      status: 500,
    });
  }
}
export async function PATCH(req: Request, { params }: { params: IParams }) {
  const body = await req.json();
  try {
    const prisma = new PrismaClient();
    const studentId = params.studentId;

    if (!studentId) {
      return new NextResponse("student id is required", { status: 400 });
    }

    if (!body) {
      return new NextResponse("Please provide information to be update", {
        status: 400,
      });
    }

    const updatedResult = await prisma.user.update({
      where: {
        id: Number(studentId),
      },
      data: body,
    });

    return NextResponse.json(updatedResult, { status: 200 });
  } catch (error: any) {
    console.log("[SINGLE_STUDENT_DELETE_ERROR]", error);
    return new NextResponse("student information update failed", {
      status: 500,
    });
  }
}

export async function GET(req: Request, { params }: { params: IParams }) {
  try {
    const prisma = new PrismaClient();
    const studentId = params.studentId;

    const student = await prisma.user.findUnique({
      where: {
        id: Number(studentId),
      },
    });

    return NextResponse.json(student, { status: 200 });
  } catch (error: any) {
    console.log("[SINGLE_STUDENT_GET_ERROR]", error);
    return new NextResponse("student information retriev failed", {
      status: 500,
    });
  }
}
