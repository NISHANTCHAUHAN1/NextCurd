import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Sprout } from "lucide-react";
import { Combobox } from "./ui/combo-box";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export default function CreateDialog() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 1,
    price: 1,
    category: "",
    userId: "",
    imageUrl: "",
  });


  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="default"
          className="ml-auto font-bold flex items-center gap-2"
          asChild

        >
          <span>
            <Sprout className="w-4 h-4" />
            Add Plant
          </span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add a Plant</AlertDialogTitle>
          <AlertDialogDescription>
            Fill out the form below to add a new plant to your inventory.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <form >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter name"
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
            </div>
          </div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Type your message here."
            rows={5}
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                type="number"
                placeholder="Enter stock quantity"
              />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter price"
              />
            </div>
          </div>
          

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">Submit</AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}