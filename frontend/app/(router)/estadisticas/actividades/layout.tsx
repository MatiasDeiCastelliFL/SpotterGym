import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Actividades",
    description:"Actividades",
}
export default function ActividadesLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
      <div>
        <AuthRoute>
          {children}
        </AuthRoute>
        
      </div>
    )
}