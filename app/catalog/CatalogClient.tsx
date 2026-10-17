"use client";
import CampersGrid from "@/components/CampersGrid/CampersGrid";
import Filters from "@/components/Filters/Filters";
import { CamperFilters } from "@/types/camper";
import { useState } from "react";

export default function CatalogClient() {
  const [filters, setFilters] = useState<CamperFilters>({});
  const [resetKey, setResetKey] = useState(0);
  const handleClearFilters = () => {
    setFilters({});
    setResetKey((prev) => prev + 1);
  };
  return (
    <>
      <Filters
        onSearch={setFilters}
        resetKey={resetKey}
        onClearFilters={handleClearFilters}
      />
      <CampersGrid filters={filters} onClearFilters={handleClearFilters} />
    </>
  );
}
