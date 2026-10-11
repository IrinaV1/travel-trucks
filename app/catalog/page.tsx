import Card from "@/components/Card/Card";
import css from './Catalog.module.css';
import Filters from "@/components/Filters/Filters";
import NotFoundCampers from "@/components/NotFound/NotFoundCampers";

export default function Catalog(){
    return(
        <main className={css.main}>
            <Card camperId="test-camper"/>
            <Filters/>
            <NotFoundCampers/>
        </main>
    )
}