import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export const middleware = async (request: NextRequest) => {
  return NextResponse.next();
};
