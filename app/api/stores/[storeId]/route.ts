import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }
  } catch (error) {
    console.log("[STORES_PATCH]", error);
    return new NextResponse("Inter error", { status: 500 });
  }
}
