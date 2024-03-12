import { filtrarRol } from "./filtrarRol"

type rolId = string

export async function dashboardRedirect(rolId:rolId){

    const responseRol = await filtrarRol()
    let arrayRol = responseRol.rol;
    let nameRol:string = "";
    arrayRol.forEach((element:any) => {
        if(element._id ===rolId){
            nameRol = element.name
        }
    });

    return nameRol;
}