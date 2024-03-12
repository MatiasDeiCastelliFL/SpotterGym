import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {
    title:"Ejercicios  | rutinas",
    description:"Seccion de un ejercicio del usuario",
}
export default function EjercicioLayout({
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