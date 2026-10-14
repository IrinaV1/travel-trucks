
import Filters from "@/components/Filters/Filters";
import CampersGrid from "@/components/CampersGrid/CampersGrid";
import { getAllCampers } from "@/lib/api/serverApi";
import css from './Catalog.module.css';

export default async function CatalogPage() {
    
const campersData = await getAllCampers(1, 4);
    
    return (
        <main className={`${css.main} container`}>
            <Filters />
            <CampersGrid campersData={campersData} />
        </main>
    );
}