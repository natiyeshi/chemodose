"use client";

import { useState } from "react";
import { ISupplier } from "@/interfaces/supplier.interface";
import AddSupplier from "./AddSupplier";
import Supplier from "./Supplier";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialSuppliers: ISupplier[];
}

const Suppliers = ({ initialSuppliers }: Props) => {
  const [suppliers, setSuppliers] = useState<ISupplier[]>(initialSuppliers);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/supplier/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setSuppliers((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting supplier ",
      });
    } catch (error) {
      toast({
        description: "Error deleting supplier ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Suppliers</div>
        <AddSupplier setSuppliers={setSuppliers} />
      </div>
      <div className=" text-adminText capitalize">Available Suppliers</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {suppliers.map((supplier,ind) => (
          <Supplier
            key={ind}
            supplier={supplier}
            onDelete={() => handleDelete(supplier._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Suppliers;
