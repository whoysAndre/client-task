'use client'

import { ProjectResponse } from "@/interfaces"
import Link from "next/link"
import Cookies from "js-cookie"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Swal from "sweetalert2"
import { deleteProject } from "@/helpers"
import { useRouter } from "next/navigation"

interface Props {
  project: ProjectResponse
}

export const ProjectItem = ({ project }: Props) => {
  
  const {id} = project;
  const token = Cookies.get("authToken");
  const router = useRouter();

  const onDelete = ()=>{

    Swal.fire({
      title: "¿Estás seguro de esta acción?",
      text: "Esta acción no se podrá revertir",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, estoy seguro"
    }).then((result) => {
      if (result.isConfirmed) {
        
        deleteProject(id,token!);

        Swal.fire({
          title: "Borrado",
          text: "Tu proyecto a sido borrado correctamente",
          icon: "success"
        });

        router.refresh();
      }
    });

    

  }

  return (
    <>
      <li className="flex justify-between gap-x-6 px-5 py-10">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto space-y-2">
            <Link href={`/dashboard/projects/details/${project.id}`} className="text-gray-600 cursor-pointer hover:underline text-3xl font-bold">
              {project.name}
            </Link>
            <p className="text-sm text-gray-400">
              {project.clientName}
            </p>
            <p className="text-sm text-gray-400">
              {project.description}
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href={`/dashboard/projects/edit/${project.id}`}
              >
                Editar
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button
                onClick={onDelete}
                className="text-red-500"
              >
                Eliminar
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>



      </li>
    </>
  )
}
