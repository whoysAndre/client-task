import { FormCreateProject, Title } from "@/components";

export default function CreateProjectPage() {
  return (
    <>

      <Title
        title="Crear proyecto"
        subtitle="Llena el siguiente formulario y cree su proyecto"
        link="Volver"
        navigation="/dashboard"
      />

      <FormCreateProject />


    </>
  );
}