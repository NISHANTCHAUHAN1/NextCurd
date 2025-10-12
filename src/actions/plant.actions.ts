"use server";

import { prisma } from "@/lib/prisma";
import { getUserId } from "./user.actions";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

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

export async function createPlant(data: Prisma.PlantsCreateInput) {
    console.log("creating plant");
    console.log(data);

    try {
        const currentUserID = await getUserId();
        if(!currentUserID) return
        
        const newPlant = await prisma.plants.create({
            data: {
                ...data,
                userId: currentUserID,
            }
        })
        revalidatePath("/plants")
        return newPlant
    } catch (error) {
        console.error("Error in Created plant", error);
        throw error;
    }
}
