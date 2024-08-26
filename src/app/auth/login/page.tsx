import { LoginForm } from "@/components";


export const metadata = {
 title: 'Logeo | task',
 description: 'Inicio de sesión de Tareas',
};

export default function LoginPage() {
  return (
    <div className="w-[350px] md:w-[450px] lg:w-[500px] p-5 shadow-lg">
      
      <LoginForm/>

    </div>
  );
}