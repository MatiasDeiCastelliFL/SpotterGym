import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Inicio",
    description:"pagina principal",
}
export default function InicioLayout({
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