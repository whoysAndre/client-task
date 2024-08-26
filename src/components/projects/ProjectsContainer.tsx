import { ProjectResponse } from "@/interfaces"
import { ProjectItem } from "./ProjectItem";

interface Props{
  projects: ProjectResponse[];
}

export const ProjectsContainer = ({projects}:Props) => {

  return (
    <>
      <ul className="divide-y divide-gray-100 border border-gray-100 mt-10 bg-white shadow-lg mb-5">
        {
          projects.map(project=>(
            <ProjectItem key={project.id} project={project}/>
          ))
        }
      </ul>
    </>
  )
}
