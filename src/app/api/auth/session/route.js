import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const COOKIE_NAMES = {
  user: "jwt",
  admin: "admin_jwt",
};

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: 30 * 24 * 60 * 60,
  path: "/",
};

export async function POST(request) {
  try {
    const { token, type = "user" } = await request.json();
    const cookieName = COOKIE_NAMES[type] || COOKIE_NAMES.user;

    if (!token) {
      return NextResponse.json(
        { success: false, masg: "Token is required" },
        { status: 400 }
      );
    }

    const cookieStore = await cookies();
    cookieStore.set(cookieName, token, cookieOptions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, masg: "Failed to set session" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const cookie = searchParams.get("cookie");
  const cookieName = cookie || COOKIE_NAMES[type] || COOKIE_NAMES.user;
  const cookieStore = await cookies();

  return NextResponse.json({
    success: true,
    authenticated: Boolean(cookieStore.get(cookieName)?.value),
  });
}

export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const cookie = searchParams.get("cookie");
  const cookieStore = await cookies();

  if (type === "all") {
    Object.values(COOKIE_NAMES).forEach((cookieName) => cookieStore.delete(cookieName));
  } else {
    cookieStore.delete(cookie || COOKIE_NAMES.user);
  }

  return NextResponse.json({ success: true });
}
