import AreYouSureDelete from "../../_components/AreYouSureDelete";
import img from "@/../public/assets/admin/template.png";
import { ISupplier } from "@/interfaces/supplier.interface";
import Image from "next/image";

const Supplier = ({
  supplier,
  onDelete,
}: {
  supplier: ISupplier;
  onDelete: Function;
}) => {
  return (
    <div className="bg-white rounded-xl text-adminText flex flex-col gap-2 w-[300px] px-2 py-2 shadow">
      <Image
        src={supplier.image}
        className="w-[300px] h-[200px] object-cover "
        width={100}
        height={100}
        unoptimized
        alt="Image"
      />
      <div className="flex justify-center">
        <AreYouSureDelete onDelete={onDelete} />
      </div>
    </div>
  );
};

export default Supplier;
