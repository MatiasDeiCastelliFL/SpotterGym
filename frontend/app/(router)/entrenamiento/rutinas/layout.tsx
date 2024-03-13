import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {
    title:"Entrenamiento | rutinas",
    description:"Seccion de rutinas del usuario",
}
export default function EntrenamientoRutinasLayout({
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