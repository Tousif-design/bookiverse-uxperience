import { useState } from "react";
import { PeopleSection } from "@/components/PeopleSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const People = () => {
  const [selectedField, setSelectedField] = useState<string>("all");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary">People</h1>
          <Select
            value={selectedField}
            onValueChange={(value) => setSelectedField(value)}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select field" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Fields</SelectItem>
              <SelectItem value="bcom">B.Com</SelectItem>
              <SelectItem value="bba">BBA</SelectItem>
              <SelectItem value="bca">BCA</SelectItem>
              <SelectItem value="ba">BA</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <PeopleSection selectedField={selectedField} />
      </div>
    </div>
  );
};

export default People;