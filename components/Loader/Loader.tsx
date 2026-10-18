import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.containerLoader} role="status">
      <Oval
        height={40}
        width={40}
        color="#6D7B75"
        secondaryColor="#F7F7F7"
        ariaLabel="Loading"
      />
    </div>
  );
}
