import { NextResponse } from "next/server";

import { isAxiosError } from "axios";
import { logErrorResponse } from "../../_utils/utils";
import { api } from "../../api";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function GET(request: Request, { params }: Props) {
  try {
    const { camperId } = await params;

    const res = await api(`/campers/${camperId}`);

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);

      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.response?.status ?? 502 },
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
