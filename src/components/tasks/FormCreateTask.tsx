'use client'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { SubmitHandler, useForm } from "react-hook-form"
import {toast} from  "react-toastify"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { bodyFont, titleFont } from "@/config/fonts"
import { useRouter } from "next/navigation"
import { createTask } from "@/helpers"

interface Props{
  id:number;
}

type Inputs ={
  name:string;
  description:string;
}

export const FormCreateTask = ({id}:Props) => {
  
  const router = useRouter(); 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    
    const newData = {
      projectId:id,
      ...data
    };
    
    await createTask(newData);

    toast.success("Tarea creada correctamente");
    reset();
    router.refresh();
    

  }
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className={`${bodyFont.className} bg-purple-800 hover:bg-purple-900 px-5 lg:px-10 py-2 text-white text-xl`}>Crear tarea</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={`${titleFont.className} text-xl text-purple-800`}>Crea un tarea</DialogTitle>
            <DialogDescription className={`${bodyFont.className}`}>
              Crea un tarea y empieze a agregar colaboradores para trabajar en ello
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit(onSubmit)} 
            className="grid gap-4 py-4"
          >
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task-name" className={`${bodyFont.className} text-right`}>
                Nombre de la tarea:
              </Label>
              <Input
                id="task-name"
                placeholder="Crear un navbar"
                className="col-span-3"
                {...register("name", {
                  required: {
                    value: true,
                    message: "El nombre de la tarea es requerido"
                  }
                })}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task-description" className={`${bodyFont.className} text-right`}>
                Descripción de la tarea:
              </Label>
              <Input
                id="task-description"
                placeholder="Crear usando tailwind..."
                className="col-span-3"
                {...register("description", {
                  required: {
                    value: true,
                    message: "La descripción de la tarea es requerido"
                  }
                })}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit" className={`${bodyFont.className} bg-purple-800 hover:bg-purple-900`}>Crear tarea</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

    </>
  )
}
