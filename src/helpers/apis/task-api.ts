import api from "@/lib/axios"

interface Data{
  projectId?:number;
  name:string;
  description:string;
}

interface IStatus{
  status:string;
}

export const createTask = async(formData:Data)=>{
  try {
    
    const {data} = await api.post("/tasks",formData);

    return data;

  } catch (error) {
    
  }
}

export const getAllTasks = async()=>{

  try {
    
    const {data} = await api.get("/tasks");

    return data;

  } catch (error) {
    
  }

}

export const getTask = async(id:number)=>{
  try {
    const {data} = await api.get(`/tasks/${id}`);
    return data;

  } catch (error) {
    
  }
}

export const updateTask = async(id:number,formData:Data)=>{

  try {
    const {data} = await api.patch(`/tasks/${id}`,formData);
    return data;

  } catch (error) {
    
  }

}

export const deleteTask = async(id:number)=>{
  try {

    const {data} = await api.delete(`/tasks/${id}`);

    return data;


  } catch (error) {
    
  }
}

export const updateStatusTask = async(id:number,status:IStatus)=>{
  try {

    const {data} = await api.patch(`/tasks/${id}`,status);

    return data;


  } catch (error) {
    
  }
}