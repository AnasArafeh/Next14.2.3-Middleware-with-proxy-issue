import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    return new Response("not found", { status: 404 });
}