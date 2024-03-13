import AuthRoute from "@/app/Components/Auth/AuthRoute";
import { Metadata } from "next";

const metadata:Metadata = {

    title:"Profesores",
    description:"profesores",
}
export default function profesoresLayout({
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