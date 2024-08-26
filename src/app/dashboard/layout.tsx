import { Navbar } from "@/components";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      
      <Navbar/>

      <main className="container mx-auto mt-10 px-5 lg:px-32">
        {children}
      </main>

      
      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
      />
      
    </>
  );
}