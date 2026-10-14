'use client'

import { useInfiniteQuery } from "@tanstack/react-query";
import Card from "../Card/Card";
import NotFoundCampers from "../NotFound/NotFoundCampers";
import css from "./CampersGrid.module.css"
import { getAllCampers } from "@/lib/api/clientApi";
import { CampersResponse } from "@/lib/api/api";
import LoadingModal from "../LoadingModal/LoadingModal";



type Props = {
 campersData: CampersResponse;
};
export default function CampersGrid({ campersData}: Props) {
          const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isError,
      } = useInfiniteQuery({
         queryKey: ['campers'],
           queryFn: ({ pageParam }) => getAllCampers(pageParam, 4),
          initialPageParam: 1,
               
        initialData: {
      pages: [campersData],
      pageParams: [1],
          },
              
        getNextPageParam: (lastPage) =>
          lastPage.page < lastPage.totalPages
            ? lastPage.page + 1
            : undefined,
    
      }
      );
        
        if (isError) {
            return <p>Не удалось загрузить кемперы.</p>;
        }
        
        const campers = data?.pages.flatMap((page) => page.campers) ?? [];
      
    
    return (
        <>
         {isFetchingNextPage && <LoadingModal />}
        <div className={css.campersGridContainer}>

                <div className={css.cardsList}>
           {campers.length > 0 ? (
                campers.map((camper) => (
                  <Card key={camper.id} camper={camper} />
                ))
              ) : (
                <NotFoundCampers />
              )}
        </div>
              {hasNextPage && (
                <button
                  type="button"
                  onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                        className={css.btnLoad}
                >
                  Load More
                </button>
              )}
        </div>
        </>
    )
}