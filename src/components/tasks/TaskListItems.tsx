'use client'
import { TaskResponse } from "@/interfaces"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation";
import { deleteTask } from "@/helpers";
import { FormEditTask } from "./FormEditTask";
import { TaskModalDetail } from "./TaskModalDetail";

interface Props {
  task: TaskResponse;
}


export const TaskListItems = ({ task }: Props) => {

  const router = useRouter();

  const onDeleteTask = () => {
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

        deleteTask(task.id);

        Swal.fire({
          title: "Borrado",
          text: "La tarea a sido borrado correctamente",
          icon: "success"
        });

        router.refresh();
      }
    });
  }

  return (
    <li className="p-5 bg-white border border-slate-300 flex justify-between">
      <div className="min-w-0 flex-col gap-y-4">
        <div className="text-xl font-bold text-slate-600 text-left">
          {task.name}
        </div>
        <p className="text-slate-500">{task.description}</p>
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

          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
          >

            {/* View detail Task */}
            <TaskModalDetail
              task={task}
            />


          </DropdownMenuItem>
          
          {/* Edit Task */}
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
          >

            <FormEditTask
              task={task}
              idTask={task.id}
            />


          </DropdownMenuItem>

          {/* Delete Task */}
          <DropdownMenuItem
            onClick={onDeleteTask}
            className="text-red-500"
          >
            Eliminar
          </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>

    </li>
  )
}
