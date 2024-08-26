import { BtnBack } from "@/components";
import { FormEditTask } from "@/components/tasks/FormEditTask";
import { bodyFont, titleFont } from "@/config/fonts";
import { getTask } from "@/helpers";

interface IParams{
  params : {
    id: string
  };
}


export const metadata = {
 title: 'Edita tu tarea',
 description: 'Edita tu tarea y administrala',
};

export default async function TaskEditPage({params}:IParams) {

  const task = await getTask(+params.id);

  return (
    <>
      <h1 className={`${titleFont.className} text-2xl lg:text-4xl font-black`}>Edita tu tarea</h1>
      <h3 className={`${bodyFont.className} text-sm lg:text-xl font-light text-gray-500 mt-2`}>Edita tu proyecto de la mejor manera</h3>

      <nav className="my-5">
        <BtnBack />
      </nav>

      <FormEditTask
        idTask={task.id}
        task={task}
      />


    </>
  );
}