'use client'
import { TaskResponse } from "@/interfaces";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { bodyFont, titleFont } from "@/config/fonts";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { useEffect, useState } from "react";
import { updateStatusTask } from "@/helpers";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  task: TaskResponse;
}


const translateStatus: { [key: string]: string } = {
  pending: "Pendiente",
  onHold: "En espera",
  inProgress: "En Progreso",
  underReview: "En Revesión",
  completed: "Completado"
}

export const TaskModalDetail = ({ task }: Props) => {

  const router = useRouter();

  const handleStatusChange = async(value:any)=>{
    
    const newStatus = {status:value};

    await updateStatusTask(task.id,newStatus);

    toast.success("Estado de la tarea actualizada");
    router.refresh();
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>Ver</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className={`${titleFont.className} text-purple-800 text-3xl`}>{task.name}</DialogTitle>
            <DialogDescription>
              <span className={`${bodyFont.className} font-bold`}>Descripción: <span className="font-light">{task.description}</span></span>
            </DialogDescription>
          </DialogHeader>

          <div>
            <Label className={`${bodyFont.className}`}>Estado</Label>
            <Select
              defaultValue={task.status}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className={`${bodyFont.className}`}>Estados</SelectLabel>
                  {
                    Object.entries(translateStatus).map(([key, value]) => (
                      <SelectItem key={key} value={key}>
                        {value}
                      </SelectItem>
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </DialogContent>
      </Dialog>
    </>

  )
}
