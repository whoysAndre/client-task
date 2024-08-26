import axios from "@/lib/axios";
import axiosOriginal, { AxiosError } from "axios"

interface Data {
  email: string;
  password: string;
}

interface DataRegister {
  name: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

export const login = async (formData: Data) => {

  try {

    const resp = await axios.post("/auth/login", formData);

    return resp.data;

  } catch (error) {
    if (axiosOriginal.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        return {
          success: false,
          status: axiosError.response.status,
          message: axiosError.response.data.message || "Error en la autenticación",
          errors: axiosError.response.data.errors
        };
      }

    }

  }
}

export const registerUser = async (formData: DataRegister) => {

  try {
    const resp = await axios.post("/auth/register", formData);
    return resp.data;
  } catch (error) {
    if (axiosOriginal.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        return {
          success: false,
          status: axiosError.response.status,
          message: axiosError.response.data.message || "Error en la autenticación",
          errors: axiosError.response.data.errors
        };
      }

    }
  }

}