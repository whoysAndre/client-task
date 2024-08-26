import { FormCreateProject, Title } from "@/components";


export const metadata = {
 title: 'Crea un nuevo proyecto',
 description: 'Crea un nuevo proyecto y administra',
};

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