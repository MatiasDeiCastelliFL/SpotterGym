import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Notas",
    description:"Notas",
}
export default function NotasLayout({
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