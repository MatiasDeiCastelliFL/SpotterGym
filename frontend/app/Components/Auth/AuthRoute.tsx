"use client"
import { useGlobalStore } from "@/app/store/GlobalStore";
import { useRouter, usePathname  } from "next/navigation";
import { useEffect } from "react";

const AuthRoute = ({ children }: {children : any}) => {
    const router = useRouter();
    const pathname = usePathname();
    const isAuthClient = useGlobalStore((state) => state.isAuthClient);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => !isAuthClient ? router.push('/acceso') : router.push(pathname), [pathname, isAuthClient]);

    return isAuthClient ? children : null;
};

export default AuthRoute;
