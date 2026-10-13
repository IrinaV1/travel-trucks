import { Camper } from '@/types/camper';
import css from './VehicleDetails.module.css'
type Props = {
camper: Camper;
};
export default function VehicleDetails({camper}: Props){
    const details = [
{ label: "Form", value: camper.form },
{ label: "Length", value: camper.length },
{ label: "Width", value: camper.width },
{ label: "Height", value: camper.height },
{ label: "Tank", value: camper.tank },
{ label: "Consumption", value: camper.consumption },
];

    return (
        <div className={css.containerVehicleDetails}>
        <div className={css.vehicleDetails}>
            <h2 className={css.title}>Vehicle details</h2>
            <ul className={css.list}>
                <li className={css.item}>Automatic</li>
                <li className={css.item}>AC</li>
                <li className={css.item}>Petrol</li>
                <li className={css.item}>Kitchen</li>
                <li className={css.item}>Radio</li>
                <li className={css.item}>Alcove</li>
            </ul>
        </div>
         <ul className={css.detailsList}>
    {details.map(({ label, value }) => (
      <li className={css.detailsItem} key={label}>
        <span className={css.detailsItemText}>{label}</span>
        <span className={css.detailsItemText}>{value ?? "—"}</span>
      </li>
    ))}
  </ul>
        </div>
    );
}