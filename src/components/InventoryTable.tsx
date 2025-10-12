"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { useState } from "react";

const plants = [
  {
    id: "124567",
    name: "Aloe Vera",
    category: "Succulent",
    price: 199,
    stock: 25,
  },
];

export default function InventoryTable() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="w-full space-y-4">
      <div className="flex items-center gap-2 py-4">
        <div className="relative max-w-sm w-full">
          <Input
            placeholder="Filter plants..."
            className="pl-10"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <Combobox
          value={selectedCategory}
          onChange={(val) => setSelectedCategory(val)}
        ></Combobox>

        {/* <CreateDialog /> */}
      </div>

      <Table>
        <TableCaption>A list of your recent plants.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Plant ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {plants.map((plant) => (
            <TableRow key={plant.id}>
              <TableCell>{plant.id}</TableCell>

              <TableCell>{plant.name}</TableCell>
              <TableCell>{plant.category}</TableCell>
              <TableCell>{plant.price}</TableCell>
              <TableCell className="font-bol">{plant.stock}</TableCell>

              <TableCell className="text-right">
                <div
                  className="flex justify-end space-x-4"

                  // onClick={(e) => e.stopPropagation()}
                >
                  <h1>Edit Button</h1>
                  <h1>Delete Button</h1>

                  {/* <EditDialog plant={plant}/>
                    <DeleteDialog plant={plant}/> */}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
