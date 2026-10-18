import { api } from "@/app/api/api";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function POST(request: Request, { params }: Props) {
  try {
    const { camperId } = await params;
    const body = await request.json();

    const response = await api.post(
      `/campers/${camperId}/booking-requests`,
      body,
    );

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (error) {
    console.error("Booking request failed:", error);

    return NextResponse.json(
      { message: "Не удалось отправить заявку на бронирование." },
      { status: 500 },
    );
  }
}
