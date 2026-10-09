import Card from "@/components/Card/Card";
import css from './Catalog.module.css';

export default function Catalog(){
    return(
        <main className={css.main}>
            <Card camperId="test-camper"/>
        </main>
    )
}