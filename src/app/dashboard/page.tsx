import {cookies} from "next/headers";
import { Title } from "@/components";
import { ProjectsContainer } from "@/components/projects/ProjectsContainer";
import { getAllProject } from "@/helpers";



export const metadata = {
 title: 'Home | task',
 description: 'Es la página principal big task',
};

export default async function HomePage() {
  
  const cookieStore = cookies();
  const token = cookieStore.get("authToken")?.value;
  const projects = await getAllProject(token!) ?? [];
  
  return (
    <>
      <Title
        title="Mis proyectos"
        subtitle="Maneja y administra tus proyectos"
        link="Nuevo proyecto"
        navigation="/dashboard/projects/new"
      />

      <ProjectsContainer
        projects={projects}
      />

      
    </>
  );
}