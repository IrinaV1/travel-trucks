"use client";
import { useId } from "react";
import css from "./Filters.module.css";
import { CiMap } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import {
  CamperFilters,
  CamperForm,
  EngineType,
  TransmissionType,
} from "@/types/camper";
import { getCamperFilterOptions } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";
import { formatValue } from "@/lib/utils/utils";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

type Props = {
  onSearch: (filters: CamperFilters) => void;
  resetKey: number;
  onClearFilters: () => void;
};

export default function Filters({ onSearch, resetKey, onClearFilters }: Props) {
  const fieldId = useId();
  const {
    data: filterOptions,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["camperFilterOptions"],
    queryFn: getCamperFilterOptions,
  });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const location = (formData.get("location") as string).trim();
    const form = formData.get("form") as CamperForm | null;
    const engine = formData.get("engine") as EngineType | null;
    const transmission = formData.get(
      "transmission",
    ) as TransmissionType | null;

    const filters: CamperFilters = {
      location,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    };
    onSearch(filters);
  };
if (isLoading) {
  return <div className={css.filtersContainer}><Loader /></div>;
  }
  if (isError || !filterOptions) {
  return <div className={css.filtersContainer}> <ErrorMessage onRetry={() => refetch()} /></div>;
}
  return (
    <div className={css.filtersContainer}>
      <form key={resetKey} onSubmit={handleSubmit} className={css.form}>
        <div className={css.formGroup}>
          <label className={css.labelLocation} htmlFor={`${fieldId}-location`}>
            Location
          </label>

          <div className={css.inputWrapper}>
            <CiMap className={css.iconLocation} size={24} />

            <input
              id={`${fieldId}-location`}
              type="text"
              name="location"
              className={css.inputLocation}
              placeholder="City"
            />
          </div>
        </div>

        <div className={css.filtersGroups}>
          <h3 className={css.title}>Filters</h3>
          <fieldset className={css.filterGroup}>
            <legend className={css.filterLegend}>Camper form</legend>
            {filterOptions?.forms?.map((form) => (
              <label key={form} className={css.filterOption}>
                <input type="radio" name="form" value={form} />
                {formatValue(form)}
              </label>
            ))}
          </fieldset>
          <fieldset className={css.filterGroup}>
            <legend className={css.filterLegend}>Engine</legend>
            {filterOptions?.engines?.map((engine) => (
              <label key={engine} className={css.filterOption}>
                <input type="radio" name="engine" value={engine} />
                {formatValue(engine)}
              </label>
            ))}
          </fieldset>

          <fieldset className={css.filterGroup}>
            <legend className={css.filterLegend}>Transmission</legend>
            {filterOptions?.transmissions?.map((transmission) => (
              <label key={transmission} className={css.filterOption}>
                <input type="radio" name="transmission" value={transmission} />
                {formatValue(transmission)}
              </label>
            ))}
          </fieldset>
        </div>
        <div className={css.filterBtn}>
          <Button className={`${css.submitBtn} ${css.btn}`} type="submit">
            Search
          </Button>
          <Button
            className={`${css.clearBtn} ${css.btn}`}
            type="button"
            onClick={onClearFilters}
          >
            <IoClose className={css.clearIcon} size={24} />
            Clear filters
          </Button>
        </div>
      </form>
    </div>
  );
}
