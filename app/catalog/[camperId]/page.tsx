import { Suspense } from "react";

import CamperDetailsClient from "./CamperDetailsClient";
import { getCamperById } from "@/lib/api/serverApi";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { connection } from "next/server"; 


type Props = {
  params: Promise<{
    camperId: string;
  }>;
};


export default async function CamperDetailsPage({ params }: Props) {

  return (
  <Suspense fallback={<p>Загрузка страницы кемпера...</p>}>
<CamperDetailsContent params={params} />
</Suspense>
  );
}

  const noop = () => {};
async function CamperDetailsContent({ params }: Props) {
await connection(); 
const { camperId } = await params;
  const queryClient = new QueryClient();

    await queryClient.query({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
  }).catch(noop);
  return (
    // Передаем кэшированные данные клиенту через HydrationBoundary
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient camperId={camperId} />
    </HydrationBoundary>
  );
}