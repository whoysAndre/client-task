import api from "@/lib/axios"


interface Data {
  name: string;
  description: string;
  clientName: string;
}

export const createProject = async (formData: Data, token: string) => {

  try {
    const { data } = await api.post("/projects", formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return data;

  } catch (error) {
    console.log(error);
  }

}

export const getAllProject = async (token: string) => {

  try {

    const { data } = await api.get("/projects", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return data;

  } catch (error) {

  }
}

export const getProject = async (id: number, token: string) => {

  try {

    const { data } = await api.get(`/projects/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return data;


  } catch (error) {

  }

}

export const updateProject = async (id: number, formData: Data, token: string) => {

  try {
    const { data } = await api.patch(`/projects/${id}`, formData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }

}

export const deleteProject = async (id: number, token: string) => {

  try {

    const { data } = await api.delete(`/projects/${id}`,{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    });

    return data;

  } catch (error) {

  }

}