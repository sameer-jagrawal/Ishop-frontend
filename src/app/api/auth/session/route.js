import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAME = "jwt";

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
};

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, masg: "Token is required" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, cookieOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, masg: "Failed to set session" },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return NextResponse.json({ success: true });
}
