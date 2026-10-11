"use client";
import { useId } from "react";
import css from "./Filters.module.css";
import { CiMap } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


export default function Filters() {
  const fieldId = useId();
  const handleSubmit = (formData: FormData) => {
    const location = formData.get("location") as string;

    const forms = formData.getAll("form") as string[];
    const engines = formData.getAll("engine") as string[];
    const transmissions = formData.getAll("transmission") as string[];
    console.log("Location:", location);
    console.log("Camper:", forms);
    console.log("Engine:", engines);
    console.log("Transmission:", transmissions);
  };
  return (
    <div className={css.filtersContainer}>
      <form action={handleSubmit}>
        <div className={css.formGroup}>
          <label className={css.labelLocation} htmlFor={`${fieldId}-location`}>Location</label>
           
           <div className={css.inputWrapper}>
    <CiMap className={css.iconLocation} size={24}/>
          
          <input
            id={`${fieldId}-location`}
            type="text"
            name="location"
            className={css.inputLocation}
            placeholder="Kyiv"
          />
          </div>
        </div>

<div className={css.filtersGroups}>
        <h3 className={css.title}>Filters</h3>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Camper form</legend>
          <label className={css.filterOption}>
            <input type="radio" name="form" value="alcove" />
            Alcove
          </label>
          <label className={css.filterOption}>
            <input type="radio" name="form" value="panel_van" />
            Panel Van
          </label>
          <label className={css.filterOption}>
            <input type="radio" name="form" value="integrated" />
            Integrated
          </label>

          <label className={css.filterOption}>
            <input type="radio" name="form" value="semi_integrated" />
            Semi Integrated
          </label>
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Engine</legend>
          <label className={css.filterOption}>
            <input type="radio" name="engine" value="diesel" />
            Diesel
          </label>

          <label className={css.filterOption}>
            <input type="radio" name="engine" value="petrol" />
            Petrol
          </label>

          <label className={css.filterOption}>
            <input type="radio" name="engine" value="hybrid" />
            Hybrid
          </label>

          <label className={css.filterOption}>
            <input type="radio" name="engine" value="electric" />
            Electric
          </label>
        </fieldset>
        <fieldset className={css.filterGroup}>
          <legend className={css.filterLegend}>Transmission</legend>

          <label className={css.filterOption}>
            <input type="radio" name="transmission" value="automatic" />
            Automatic
          </label>

          <label className={css.filterOption}>
            <input type="radio" name="transmission" value="manual" />
            Manual
          </label>
        </fieldset>
</div>
<div className={css.filterBtn}>
        <button className={`${css.submitBtn} ${css.btn}`} type="submit">Search</button>
        <button className={`${css.clearBtn} ${css.btn}`} type="reset">
             <IoClose className={css.clearIcon} size={24} />
            Clear filters</button>
      </div>
      </form>
    </div>
  );
}
