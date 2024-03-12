Feature: Nav | TS 01 | Verificacion de propiedades y status en los links/enlaces de redireccion interna
    Verificar que todos los enlaces en la pagina funcionen correctamente para asegurar de una navegacion adecuada
    * Protocolo de navegacion
    * Status de conexion
    * Redireccion de los enlaces

Background: inicio de sesion
    Given ingreso en la url 'https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso'
    When ingreso usuario 'isaacurdaneta@gmail.com' y contraseña '04161652340' 

@Nav @TS-01 
Scenario: Verificar status y propiedades de todos los enlaces por pagina
    Given que se realiza clic en '<button>'
    When accedo en la pagina "<seccion>"
    When se realiza clic en todos los enlaces buscados
    Then se muestra el total de enlaces encontrados 
    Then deben redirigir corretamente a la url de destino
    Then deben devolver un codigo de estado HTTP 200 OK
    Then deben ser accesible y cargar correctamente
    Then los enlaces debe utilizar el protocolo correcto (HTTP o HTTPS)
Examples:
    | button        | seccion        |   
    | Home          | inicio/cliente |
    | Wallet        | entrenamiento  |
    | Settings      | estadisticas   |
    | Profile       | micuenta       |
