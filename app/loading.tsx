import { Oval } from "react-loader-spinner";
import css from "./loading.module.css";

export default function PageLoader() {
  return (
    <div className={css.containerLoading} role="status">
      <Oval
        visible
        height={64}
        width={64}
        color="#6D7B75"
        secondaryColor="#F7F7F7"
        strokeWidth={4}
        ariaLabel="Loading"
      />
      <p className={css.text}>Loading...</p>
    </div>
  );
}


