import { NextRequest, NextResponse } from "next/server";
import { getData } from "./app/services/dataService";

export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        }],
}

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    let data: any = undefined;

    data = await getData(pathname);

    console.log("middleware")

    return NextResponse.rewrite(new URL("/404", request.url))
}

