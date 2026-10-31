"use client";
import CampersGrid from "@/components/CampersGrid/CampersGrid";
import Filters from "@/components/Filters/Filters";
import { CamperFilters } from "@/types/camper";
import { useState } from "react";
import css from "./Catalog.module.css";
import Button from "@/components/Button/Button";

export default function CatalogClient() {
  const [filters, setFilters] = useState<CamperFilters>({});
  const [resetKey, setResetKey] = useState(0);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const handleClearFilters = () => {
    setFilters({});
    setResetKey((prev) => prev + 1);
  };
  return (
    <>
      <Button
        type="button"
        className={css.filtersToggle}
        onClick={() => setIsFiltersOpen((prev) => !prev)}
        aria-expanded={isFiltersOpen}
      >
        {isFiltersOpen ? "Hide filters" : "Show filters"}
      </Button>

      <div className={`${css.filtersWrapper} ${isFiltersOpen ? css.open : ""}`}>
        <Filters
          onSearch={setFilters}
          resetKey={resetKey}
          onClearFilters={handleClearFilters}
        />
      </div>
      <CampersGrid filters={filters} onClearFilters={handleClearFilters} />
    </>
  );
}
