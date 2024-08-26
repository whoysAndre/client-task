"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import Cookies from "js-cookie"
import { bodyFont, titleFont } from "@/config/fonts"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../button"


export const Navbar = () => {
  
  const router = useRouter();

  const onLogout = ()=>{
    Cookies.remove("authToken");
    router.push("/");
  };
      
  return (
    <nav className="bg-violet-900 py-5">
      <div className="container mx-auto flex justify-between items-center px-5 lg:px-32">

        <Link href="/dashboard" className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chess-rook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 16l-1.447 .724a1 1 0 0 0 -.553 .894v2.382h12v-2.382a1 1 0 0 0 -.553 -.894l-1.447 -.724h-8z" />
            <path d="M8 16l1 -9h6l1 9" />
            <path d="M6 4l.5 3h11l.5 -3" />
            <path d="M10 4v3" />
            <path d="M14 4v3" />
          </svg>

          <p className={`${titleFont.className} flex flex-col text-white`}>
            Big
            <span>Task</span>
          </p>

        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">

            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

          </DropdownMenuTrigger>
          <DropdownMenuContent className={`${bodyFont.className}`}>
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard/profile">
                Perfil
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link href="/dashboard/my-projects">
                Mis proyectos
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                onClick={onLogout} 
                className="py-1"
              >
                Cerrar sesión
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


      </div>
    </nav>
  )
}
