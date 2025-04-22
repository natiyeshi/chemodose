
import Supplier from "../../(models)/suppliers.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const supplier = await Supplier.findByIdAndDelete(params.id);
  
      if (!supplier) {
        return NextResponse.json({ message: "Supplier not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Supplier deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}