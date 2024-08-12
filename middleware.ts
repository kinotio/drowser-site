import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico).*)'],
}
