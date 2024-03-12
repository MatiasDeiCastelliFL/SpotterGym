import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Mi cuenta",
    description:"pagina principal",
}
export default function MiCuentaLayout({
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