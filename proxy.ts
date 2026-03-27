import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["tr", "es"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already starts with a non-default locale prefix
  const currentLocale = locales.find(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (currentLocale) {
    // Already has a locale prefix (tr or es) — pass through
    const response = NextResponse.next();
    response.headers.set("x-locale", currentLocale);
    return response;
  }

  // No locale prefix → EN request; rewrite internally to /en/...
  // Browser URL stays unchanged (e.g. /about stays /about)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("x-locale", defaultLocale);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
