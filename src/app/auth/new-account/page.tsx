import { CreateAccount } from "@/components";



export const metadata = {
 title: 'Crea tu cuenta',
 description: 'Crea tu nueva cuenta para acceder a la app',
};
export default function NewAccountPage() {
  return (
    <div className="w-[350px] md:w-[450px] lg:w-[500px] p-5 shadow-lg">

      <CreateAccount/>

    </div>
  );
}