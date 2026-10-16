
import css from './NotFoundCampers.module.css'
import Image from "next/image";
import { IoClose } from "react-icons/io5";

type Props = {
onClearFilters: () => void;
};



export default function NotFoundCampers({onClearFilters}: Props) {
  return (
    <div className={css.wrapper}>
      <Image
        src={"/not-found.png"}
        alt="Page not found"
        width={488}
        height={463}
        className={css.image}
      />
      <h1 className={css.title}>No campers found</h1>
      <div className={css.wrapperText}>
      <p className={css.text}>
        We couldn`t find any campers that match your filters.</p>
        <p className={css.text}>Try adjusting your
        search or clearing some filters.
      </p>
      </div>
<div className={css.filterBtn}>
        <button className={`${css.clearBtn} ${css.btn}`} type="button" onClick={onClearFilters}>
             <IoClose className={css.clearIcon} size={24} />
            Clear filters</button>
        <button type="button" className={`${css.submitBtn} ${css.btn} a`} onClick={() => window.location.reload()}>View all campers</button>
      </div>
    </div>
  );
}
