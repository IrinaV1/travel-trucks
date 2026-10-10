import NotFound from "@/app/not-found";

type Props = {
  params: Promise<{
    camperId: string;
  }>;
};

export default async function CamperDetailsPage({ params }: Props) {
  const { camperId } = await params;

  return (
    <main>
      <h1>Camper details</h1>
      <p>Camper ID: {camperId}</p>
      <NotFound/>
    </main>
  );
}
