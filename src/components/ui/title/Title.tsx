import { bodyFont, titleFont } from "@/config/fonts";
import Link from "next/link";

interface Props{
  title:string;
  subtitle?: string;
  link?:string;
  navigation?:string;
}
export const Title = ({title,subtitle,link,navigation}:Props) => {
  return (
    <>
      <h1 className={`${titleFont.className} text-2xl lg:text-4xl font-black`}>{title}</h1>
      <h3 className={`${bodyFont.className} text-sm lg:text-xl font-light text-gray-500 mt-2`}>{subtitle}</h3>

      <nav className="my-8">
        <Link 
          className={`${bodyFont.className} rounded capitalize bg-purple-800 hover:bg-purple-900 px-5 lg:px-10 py-2 text-white text-xl`}
          href={`${navigation}`}
        >
          {link}
        </Link>

      </nav>

    </>
  )
}
