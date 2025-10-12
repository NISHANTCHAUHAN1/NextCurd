import { prisma } from "@/lib/prisma";
import { getUserId } from "./user.actions";
import { revalidatePath } from "next/cache";

export async function getPlants(serachTerm?: String) {
  try {
    const currentUserID = await getUserId();
    const whereClause: any = {
      userId: currentUserID,
    };

    if (serachTerm) {
      whereClause.name = {
        contains: serachTerm,
        mode: "insensitive",
      };
    }

    const userPlants = await prisma.plants.findMany({
      where: whereClause,
    });

    revalidatePath("/");
    return { success: true, userPlants };
  } catch (error) {
    console.log("Error in getPlants", error);
  }
}

export async function getPlantById(id: string) {
  // Example using Prisma; adjust based on your data layer
  return await prisma.plants.findUnique({
    where: { id },
  });
}
