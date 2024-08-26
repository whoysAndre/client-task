import { bodyFont, profileFont, titleFont } from "@/config/fonts";
import { headers } from "next/headers";



export const metadata = {
 title: 'Tu perfil',
 description: 'Administra tu perfil',
};
export default function ProfilePage() {

  const headerList = headers();
  const info = headerList.get("x-user-info");

  if (!info) {
    return null;
  }
  const { user } = JSON.parse(info);

  return (
    <>
      <h1 className={`${profileFont.className} capitalize text-center text-6xl text-purple-800 font-extrabold`}>
        Bienvenido a tu perfil
      </h1>

      <div className="mt-10 flex flex-col gap-8">
        <div>
          <h4 className={`${titleFont.className} text-3xl text-purple-800`}>Nombre: {""}
            <span className={`${bodyFont.className} ml-3 text-black`}>{user.name}</span>
          </h4>
        </div>
        <div>
          <h4 className={`${titleFont.className} text-3xl text-purple-800`}>Email: {""}
            <span className={`${bodyFont.className} ml-3 text-black`}>{user.email}</span>
          </h4>
        </div>
      </div>

    </>
  );
}