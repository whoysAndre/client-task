import { FormCreateTask, TaskList, Title } from "@/components";
import { bodyFont, titleFont } from "@/config/fonts";
import { getProject } from "@/helpers";
import { cookies } from "next/headers";




interface IParams {
  params: {
    id: string
  };
}


export const metadata = {
 title: 'Detalles del proyecto',
 description: 'Ve los detalles de tu proyecto',
};

export default async function DetailProjectPage({ params }: IParams) {

  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const project = await getProject(+params.id,token!);

  return (
    <>

      <h1 className={`${titleFont.className} text-2xl lg:text-4xl font-black`}>{project.name}</h1>
      <h3 className={`${bodyFont.className} text-sm lg:text-xl font-light text-gray-500 mt-2`}>{project.description}</h3>

      <nav className="my-8">
        <FormCreateTask 
          id={project.id}
        />
      </nav>

      <TaskList
        tasks={project.task}
        idProject={project.id}
      />

    </>
  );
}