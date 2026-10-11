'use client';

import Card from '@/components/Card/Card';
import Filters from '@/components/Filters/Filters';
import NotFoundCampers from '@/components/NotFound/NotFoundCampers';
import { getAllCampers } from '@/lib/api/clientApi';
import { useInfiniteQuery } from '@tanstack/react-query';
import css from './CatalogClient.module.css';

export default function CatalogClient() {
      const {
    data,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
  } = useInfiniteQuery({
     queryKey: ['campers'],
       queryFn: ({ pageParam }) => getAllCampers(pageParam, 4),
           initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages
        ? lastPage.page + 1
        : undefined,

  }
  );
    if (isPending) return <p>Загрузка кемперов...</p>;
    
    if (isError) {
        return <p>Не удалось загрузить кемперы.</p>;
    }
    
    const campers = data?.pages.flatMap((page) => page.campers) ?? [];
  
    return (
    <main className={css.main}>
      <Filters />

      {campers.length > 0 ? (
        campers.map((camper) => (
          <Card key={camper.id} camper={camper} />
        ))
      ) : (
        <NotFoundCampers />
      )}

      {hasNextPage && (
        <button
          type="button"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </main>
  );
};