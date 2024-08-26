'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { toast } from "react-toastify"
import { bodyFont, titleFont } from "@/config/fonts"
import { useRouter, useSearchParams } from "next/navigation"
import { TaskResponse } from "@/interfaces"
import { updateTask } from "@/helpers"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Button } from "../ui/button"


interface Props {
  idTask: number;
  task: TaskResponse;
}

type Inputs = {
  name: string;
  description: string;
}

export const FormEditTask = ({ idTask, task }: Props) => {

  const { id, project, ...rest } = task;
  const router = useRouter();
  const params = useSearchParams();
  const myProjectParamId = params.get("projectId");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      ...rest
    }
  })
  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    await updateTask(idTask, data);

    toast.success("Tarea actualizada correctamente");

    router.refresh();

  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <p>Editar</p>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className={`${titleFont.className} text-xl text-purple-800`}>Edita una tarea</DialogTitle>
            <DialogDescription className={`${bodyFont.className}`}>
              Edita tu tarea si cometiste algun error
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
                <Button type="submit" className={`${bodyFont.className} bg-purple-800 hover:bg-purple-900`}>Guardar tarea</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
