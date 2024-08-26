'use client'
import { bodyFont } from "@/config/fonts";
import { useRouter } from "next/navigation";

export const BtnBack = () => {

  const router = useRouter();

  return (
    <>
      <button
        className={`${bodyFont.className} rounded capitalize bg-purple-800 hover:bg-purple-900 px-5 lg:px-10 py-2 text-white text-xl`}
        onClick={()=>router.back()}
      >
        volver
      </button>
    </>
  )
}
