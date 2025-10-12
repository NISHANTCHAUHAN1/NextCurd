import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "../../../components/ui/badge";

export default function PlantCard() {

    

  return (
    <Card className="max-w">
      <div className="flex flex-row">
        <div className="basis-2/4">
          <CardHeader>
          </CardHeader>
        </div>
        <div className="basis-2/4 flex flex-col justify-between">
          <CardContent className="mt-8 space-y-3">
            <CardTitle className="text-5xl font-bold">aleo wera</CardTitle>
            <CardTitle className="text-3xl font-bold">${20}</CardTitle>
            <Badge>aise hi</Badge>
            <CardDescription>Stock: 20</CardDescription>
            <CardDescription className="text-white">
              description
            </CardDescription>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}