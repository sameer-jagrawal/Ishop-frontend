import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("jwt")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, masg: "Token is missing" },
        { status: 401 },
      );
    }

    const body = await request.json();
    const baseURL =
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://ishop-backend-2mld.onrender.com/api/";

    const response = await axios.post(`${baseURL}user/address`, body, {
      headers: {
        Authorization: token,
      },
    });

    return NextResponse.json(response.data, { status: response.status });
  } catch (error) {
    const status = error?.response?.status || 500;
    const data = error?.response?.data || {
      success: false,
      masg: "Address not saved",
    };

    return NextResponse.json(data, { status });
  }
}
