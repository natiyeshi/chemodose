import supplier from "../(models)/suppliers.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const supplierData = body.formData;
      const newsupplier = await supplier.create(supplierData);
      console.log(newsupplier, "___");
      return NextResponse.json(
        { message: "supplier created successfully!" , newsupplier },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const suppliers = await supplier.find();
      return NextResponse.json(suppliers, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    