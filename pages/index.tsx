import { useEffect, useState } from "react";
import api from "@/lib/api";
import PropertyCard from "@/components/property/PropertyCard";
import Layout from "@/components/layout/Layout";
import { PropertyProps } from "@/interfaces/index";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await api.get("/properties");
        setProperties(response.data);
      } catch (err) {
        setError("Failed to load properties.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <Layout><p className="p-4 text-center">Loading properties...</p></Layout>;
  if (error) return <Layout><p className="p-4 text-red-500 text-center">{error}</p></Layout>;

  return (
    <Layout>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </Layout>
  );
}
