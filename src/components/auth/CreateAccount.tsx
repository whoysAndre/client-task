'use client'

import { SubmitHandler, useForm } from "react-hook-form"
import Swal from "sweetalert2"
import Cookies from "js-cookie"
import { bodyFont, titleFont } from "@/config/fonts"
import { Label } from "../ui/label"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { registerUser } from "@/helpers"
import { useRouter } from "next/navigation"


type Inputs = {
  name: string;
  email: string;
  password: string;
}

export const CreateAccount = () => {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const result = await registerUser(data);
    
    if (result.status === 401) {
      Swal.fire({
        title: "Error",
        text: result.message,
        icon: "error"
      });
      return;
    }

    Cookies.set("authToken", result.token);

    router.push("/dashboard");
    
  }

  return (
    <>

      <h1 className={`${titleFont.className} capitalize text-4xl text-purple-800 text-center`}>
        Cree una cuenta
      </h1>

      <form
        className="flex flex-col items-center gap-5 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >

        <div className="grid w-full max-w-sm items-center gap-1.5">
          {
            errors.name && (
              <span className="text-red-800">{errors.name.message}</span>
            )
          }
          <Label htmlFor="name" className={`${bodyFont.className} font-bold tracking-wide`}>Nombre:</Label>
          <Input
            type="text"
            id="name"
            placeholder="Jane Doe"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido"
              }
            })}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          {
            errors.email && (
              <span className="text-red-800">{errors.email.message}</span>
            )
          }
          <Label htmlFor="email" className={`${bodyFont.className} font-bold tracking-wide`}>Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "El email es requerido"
              }
            })}
          />
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          {
            errors.password && (
              <span className="text-red-800">{errors.password.message}</span>
            )
          }
          <Label htmlFor="password" className={`${bodyFont.className} font-bold tracking-wide`}>Contraseña:</Label>
          <Input
            type="password"
            id="password"
            placeholder="password"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida"
              }
            })}
          />
        </div>

        <Button
          className={`${bodyFont.className} w-[200px] text-white bg-purple-800 hover:bg-purple-900`}
          type="submit"
        >
          Crear cuenta
        </Button>

        {/* divisor line */}
        <div className="flex items-center">
          <div className="flex-1 border-t border-gray-900"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-900"></div>
        </div>

        <Link
          href="/auth/login"
          className={` text-center ${bodyFont.className} font-light hover:text-gray-600`}>
          Volver
        </Link>


      </form>
    </>
  )
}
