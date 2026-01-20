import React, { useState } from "react";
import Pill from "@/components/Pill";
import { FILTER_LABELS } from "@/constants/filters";

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <section className="w-full py-6">
      <div className="container mx-auto px-4 flex gap-3 flex-wrap">
        {FILTER_LABELS.map((label, index) => (
          <Pill
            key={index}
            label={label}
            isActive={activeFilter === label}
            onClick={() => setActiveFilter(label)}
          />
        ))}
      </div>
    </section>
  );
};

export default FilterSection;
