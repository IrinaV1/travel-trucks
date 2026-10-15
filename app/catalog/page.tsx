
import { getAllCampers } from "@/lib/api/serverApi";
import css from './Catalog.module.css';
import CatalogClient from "./CatalogClient";

export default async function CatalogPage() {
    
const campersData = await getAllCampers(1, 4);
    
    return (
        <main className={`${css.main} container`}>
           <CatalogClient campersData={campersData} />
        </main>
    );
}