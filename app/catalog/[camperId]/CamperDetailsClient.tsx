'use client'
import SwiperCamper from "@/components/SwiperCamper/SwiperCamper";
import { getCamperById } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";
type Props = {
    camperId: string;

};

export default  function CamperDetailsClient(
  { camperId }: Props
) {
  const {
    data: camper,
    isError,
  } = useQuery({
    queryKey: ["camper", camperId],
    queryFn: () => getCamperById(camperId),
     staleTime: 1000 * 60 * 5, 
  });

  if (isError) {
    return (
      <main style={{ padding: '20px' }}>
        <p>Не удалось загрузить информацию о кемпере. Пожалуйста, обновите страницу.</p>
      </main>
    );
  }

 if (!camper) {
    return <p>Данные отсутствуют...</p>;
  }

  return (
    <main>
      <h1>{camper.name}</h1>
      <p>{camper.location}</p>
      <p>€{camper.price}</p>

      <SwiperCamper images={camper.gallery ?? []} />
    </main>
  );
}
