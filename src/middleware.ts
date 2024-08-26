import { NextResponse, type NextRequest } from "next/server";


const publicRoutes = [
  "/auth/login",
  "/auth/new-account"
];

export async function middleware({cookies,redirect,nextUrl,url,headers}:NextRequest){

  const token = cookies.get("authToken")?.value;
  
  if(!token && nextUrl.pathname.startsWith("/dashboard")){
    return NextResponse.redirect(new URL('/auth/login',url));
  }

  if(token && nextUrl.pathname.startsWith("/auth/login")){
    return NextResponse.redirect(new URL("/dashboard",url));
  }

  const resp = await fetch("https://task-backend-x2tq.onrender.com/api/auth/verify-token",{
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  const result = await resp.json();

  const requestHeader = new Headers(headers);
  requestHeader.set("x-user-info",JSON.stringify(result));

  return NextResponse.next({
    request:{
      headers: requestHeader
    }
  });

}

export const config = {
  matcher: ['/dashboard/:path*']
}