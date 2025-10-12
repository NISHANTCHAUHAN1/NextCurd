import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserId } from "@/actions/user.actions";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // basic validation
    if (!body || !body.name) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const userId = await getUserId();
    if (!userId) {
      return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
    }

    const created = await prisma.plants.create({
      data: {
        name: body.name,
        description: body.description ?? "",
        stock: body.stock ?? 1,
        price: body.price ?? 1,
        category: body.category ?? "",
        imageUrl: body.imageUrl ?? "",
        userId,
      },
    });

    // revalidate plants page
    try {
      revalidatePath("/plants");
    } catch (e) {
      // ignore revalidate failures
      console.warn("revalidatePath failed", e);
    }

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    console.error("API create plant error", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
