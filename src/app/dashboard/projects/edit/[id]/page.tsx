import {cookies} from "next/headers";
import { Title } from "@/components";
import { FormEditProject } from "@/components/projects/FormEditProject";
import { getProject } from "@/helpers";

interface IParams{
  params : {
    id: string
  };
}

export default async function EditProductPage({params}:IParams) {
  

  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;

  const project = await getProject(+params.id,token!);

  
  return (
    <>
      <Title
        title="Editar Proyecto"
        subtitle="Edita tu proyecto"
        link="Volver"
        navigation="/dashboard"
      />

      <FormEditProject
        project={project}
      />

      
    </>
  );
}