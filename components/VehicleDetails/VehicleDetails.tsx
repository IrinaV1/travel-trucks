'use client'

import { Camper } from '@/types/camper';
import css from './VehicleDetails.module.css';

type Props = {
camper: Camper;
};

const formatValue = (value: string) => {
  return value
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default function VehicleDetails({camper}: Props){
    const features = camper.amenities;
  
 
  const details = [
    { label: "Form", value: formatValue(camper.form) },
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
                     {features.map((feature) => (
            <li className={css.item} key={feature}>
              {formatValue(feature)}
            </li>
          ))}
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