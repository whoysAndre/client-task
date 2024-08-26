'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {toast} from  "react-toastify"
import { bodyFont } from "@/config/fonts";
import { updateProject } from "@/helpers";
import { ProjectResponse } from "@/interfaces";


type Inputs = {
  name: string;
  description: string;
  clientName: string;
}

interface Props{
  project:ProjectResponse
}

export const FormEditProject = ({project}:Props) => {

  const token = Cookies.get("authToken");
  const {id,task,...rest} = project;
  console.log(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues:{
      ...rest
    }
  });

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    
    await updateProject(project.id,data,token!);

    toast.success("Proyecto editado correctamente");


    setTimeout(()=>{
      window.location.href = "/dashboard";
    },1600)

  }

  return (

    <div className="max-w-3xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 bg-gray-50 shadow-2xl p-10 rounded-lg flex flex-col gap-5 mb-10"
      >
        <div className="grid w-full items-center gap-3">

          {
            errors.name && (
              <span className={`${bodyFont.className} text-red-600`}>{errors.name.message}</span>
            )
          }

          <Label htmlFor="name" className={`${bodyFont.className} font-bold`}>Nombre del proyecto:</Label>
          <Input
            type="text"
            id="name"
            placeholder="Eccomerce"
            className={`${bodyFont.className} w-full outline-none border-none`}
            {...register("name", {
              required: {
                value: true,
                message: "El nombre del proyecto es requerido"
              }
            })}
          />
        </div>
        <div className="grid w-full items-center gap-3">
          {
            errors.description && (
              <span className={`${bodyFont.className} text-red-600`}>{errors.description.message}</span>
            )
          }
          <Label htmlFor="description" className={`${bodyFont.className} font-bold`}>Descripción del proyecto:</Label>
          <textarea
            id="description"
            placeholder="Este proyecto consiste..."
            className={`py-2 px-3 ${bodyFont.className} outline-none border-none`}
            {...register("description", {
              required: {
                value: true,
                message: "La descripción del proyecto es requerido"
              }
            })}
          />
        </div>
        <div className="grid w-full items-center gap-3">
          {
            errors.clientName && (
              <span className={`${bodyFont.className} text-red-600`}>{errors.clientName.message}</span>
            )
          }
          <Label htmlFor="client-name" className={`${bodyFont.className} font-bold`}>Nombre del cliente:</Label>
          <Input
            type="text"
            id="client-name"
            placeholder="Jane Doe"
            className={`${bodyFont.className} w-full outline-none border-none`}
            {...register("clientName", {
              required: {
                value: true,
                message: "El nombre del cliente es requerido"
              }
            })}
          />
        </div>

        <input
          value="Guardar"
          className="bg-purple-800 cursor-pointer hover:bg-purple-900 text-white text-center py-3 rounded mt-5"
          type="submit"
        />

      </form>
    </div>

  )
}
