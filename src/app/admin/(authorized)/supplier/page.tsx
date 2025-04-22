import React from "react";
import AdminNav from "../_components/AdminNav";
import Addsupplier from "./_components/AddSupplier";
import Supplier from "./_components/Supplier";
import Suppliers from "./_components/Suppliers";
import { ISupplier } from "@/interfaces/supplier.interface";

const Page = async () => {
  let suppliers: ISupplier[] = [];
  suppliers = await getSuppliers();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Suppliers initialSuppliers={suppliers} />
    </div>
  );
};

async function getSuppliers(): Promise<ISupplier[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/supplier`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const suppliers: ISupplier[] = await res.json();
    return suppliers;
  } catch (error) {
    return [];
  }
}

export default Page;
