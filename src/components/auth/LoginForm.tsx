'use client'
import { SubmitHandler, useForm } from "react-hook-form";
import Cookie from "js-cookie";
import Swal from "sweetalert2";
import { bodyFont, titleFont } from "@/config/fonts";
import { login } from "@/helpers";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
}

export const LoginForm = () => {

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {

    const result = await login(data);

    if (result.status === 401) {
      Swal.fire({
        title: "Credenciales Invalidas",
        text: result.message,
        icon: "error"
      });
      return;
    }

    Cookie.set("authToken", result.token);

    router.push("/dashboard");

  }

  return (
    <>
      <h1 className={`${titleFont.className} text-4xl text-purple-800 text-center`}>
        Inicia Sesión
      </h1>

      <form
        className="flex flex-col items-center gap-5 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >

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
          Ingresar
        </Button>

        {/* divisor line */}
        <div className="flex items-center">
          <div className="flex-1 border-t border-gray-900"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-900"></div>
        </div>

        <Link
          href="/auth/new-account"
          className={` text-center ${bodyFont.className} font-light hover:text-gray-600`}>
          Crear una nueva cuenta
        </Link>


      </form>

    </>
  )
}
