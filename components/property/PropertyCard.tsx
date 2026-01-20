import Link from "next/link";
import { PropertyProps } from "@/interfaces/index";

export default function PropertyCard({ property }: { property: PropertyProps }) {
  return (
    <Link href={`/property/${property.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-40 object-cover rounded"
        />

        <div className="mt-3">
          <h2 className="text-lg font-semibold">{property.name}</h2>
          <p className="text-sm text-gray-500">{property.address.city}, {property.address.state}</p>
          <p className="text-blue-600 font-bold mt-2">
            ₦{property.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
