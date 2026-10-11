import { NextRequest, NextResponse } from "next/server";
import { logErrorResponse } from "../_utils/utils";

import { api } from "../api";
import { isAxiosError } from "axios";

export async function GET(request: NextRequest) {
      try {
      const searchParams = request.nextUrl.searchParams;

    const search = searchParams.get('search') ?? '';
    const page = Number(searchParams.get('page') ?? 1);
   const perPage = Number(searchParams.get('perPage') ?? 4);

   const form = searchParams.get('form');
    const transmission = searchParams.get('transmission');
    const engine = searchParams.get('engine');
    const location = searchParams.get('location');

    const res = await api('/campers', {
      params: {
        search:   search || undefined,
        page,
        perPage: 4,
         form: form || undefined,
        transmission: transmission || undefined,
        engine: engine || undefined,
        location: location || undefined,
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    if (isAxiosError(error)) {
      logErrorResponse(error.response?.data);
      return NextResponse.json(
        { error: error.message, response: error.response?.data },
        { status: error.status }
      );
    }
    logErrorResponse({ message: (error as Error).message });
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }

}