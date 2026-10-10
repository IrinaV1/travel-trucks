import Link from 'next/link';

import css from './not-found.module.css';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className={css.wrapper}>
              <Image
        src="/not-found.png"
        alt="Page not found"
        width={488}
        height={463}
      />
      <h1 className={css.title}>No campers found</h1>
      <p className={css.text}>
       We couldn`t find any campers that match your filters. Try adjusting your search or clearing some filters.
      </p>
      <Link href="/" className={css.btn}>
        На головну
      </Link>
    </div>
  );
}