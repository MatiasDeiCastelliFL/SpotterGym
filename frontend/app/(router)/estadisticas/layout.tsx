import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Estadisticas",
    description:"estadisticas",
}
export default function EstadisticasLayout({
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