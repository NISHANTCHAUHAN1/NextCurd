// import { getPlants } from "@/actions/plant.aciton";
import { stackServerApp } from "@/stack/server";
import { SignUp } from "@stackframe/stack";
import React from "react";

async function page() {
  const user = await stackServerApp.getUser();
//   const plants = await getPlants();

  return (
    <>
      {user ? (
        <div className="mt-7 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-10 gap-6">
          <div className="lg:col-span-full">
            {/* <InventoryTable plants={plants} /> */}
            <h1>InventoryTable</h1>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-20 items-center">
          <SignUp />
        </div>
      )}
    </>
  );
}

export default page;