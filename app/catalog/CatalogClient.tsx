'use client'
import CampersGrid from "@/components/CampersGrid/CampersGrid";
import Filters from "@/components/Filters/Filters";
import { CampersResponse } from "@/lib/api/api";
import { CamperFilters } from "@/types/camper";
import { useState } from "react";


type Props = {
  campersData: CampersResponse;
};
export default function CatalogClient({campersData}: Props) {
    const [filters, setFilters] = useState<CamperFilters>({});
   const [resetKey, setResetKey] = useState(0);
const handleClearFilters = () => {
    setFilters({});
    setResetKey((prev) => prev + 1);
  };
    return (
        <>
             <Filters onSearch={setFilters}  resetKey={resetKey}
        onClearFilters={handleClearFilters}/>
            <CampersGrid campersData={campersData} filters={filters} onClearFilters={handleClearFilters}/>
        </>
)

}