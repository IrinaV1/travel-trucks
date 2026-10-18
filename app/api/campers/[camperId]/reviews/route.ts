import { logErrorResponse } from "@/app/api/_utils/utils";
import { api } from "@/app/api/api";
import { isAxiosError } from "axios";
import { NextResponse } from "next/server";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function GET(request: Request, { params }: Props) {
  try {
    const { camperId } = await params;

    const res = await api(`/campers/${camperId}/reviews`);

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);

      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status ?? 500 },
      );
    }

    logErrorResponse({ message: (error as Error).message });

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
