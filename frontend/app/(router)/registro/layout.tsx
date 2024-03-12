import { Metadata } from "next";

const metadata:Metadata = {
    title:"Registro de usuario",
    description:"Registro de usuario",
}

export default function RegistroLayout({
    children,
    }: {
    children: React.ReactNode
    }) {
    return (
      <div>
        {children}
      </div>
    )
}