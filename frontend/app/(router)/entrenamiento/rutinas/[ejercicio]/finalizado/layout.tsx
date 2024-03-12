import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {
    title:"Ejercicio finalizado",
    description:"Seccion de rutinas del usuario",
}
export default function EjercicioFinalizadoLayout({
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