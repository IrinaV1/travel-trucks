'use client'

import { useInfiniteQuery } from "@tanstack/react-query";

import NotFoundCampers from "../NotFound/NotFoundCampers";
import css from "./CampersGrid.module.css"
import { getAllCampers } from "@/lib/api/clientApi";
import { CampersResponse } from "@/lib/api/api";
import LoadingModal from "../LoadingModal/LoadingModal";
import { CamperFilters } from "@/types/camper";
import CamperCard from "../CamperCard/CamperCard";



type Props = {
  campersData: CampersResponse;
  filters: CamperFilters;
    onClearFilters: () => void;
};
export default function CampersGrid({ campersData, filters, onClearFilters, }: Props) {
          const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
            isError,
         isLoading,
  isFetching,
      } = useInfiniteQuery({
         queryKey: ['campers', filters ],
           queryFn: ({ pageParam }) => getAllCampers(pageParam, 4, filters),
          initialPageParam: 1,
               
  initialData:
    Object.keys(filters).length === 0
      ? {
          pages: [campersData],
          pageParams: [1],
        }
      : undefined,
              
        getNextPageParam: (lastPage) =>
          lastPage.page < lastPage.totalPages
            ? lastPage.page + 1
            : undefined,
    
      }
      );
        
        if (isError) {
            return <p>Не удалось загрузить кемперы.</p>;
        }
        if (isLoading || (isFetching && !isFetchingNextPage && !data)) {
  return <LoadingModal />;
}
        const campers = data?.pages.flatMap((page) => page.campers) ?? [];
      
    
    return (
        <>
         {isFetchingNextPage && <LoadingModal />}
        <div className={css.campersGridContainer}>

                <div className={css.cardsList}>
           {campers.length > 0 ? (
                campers.map((camper) => (
                  <CamperCard key={camper.id} camper={camper} />
                ))
              ) : (
                <NotFoundCampers onClearFilters={ onClearFilters }/>
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