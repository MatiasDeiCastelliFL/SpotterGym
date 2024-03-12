Feature: Func | TS 01 | Login con datos parametrizados
    Como usuario Dueño/Empleados/Cliente del gym
    Quiero poder ingresar a la cuenta previamente registrada
    Para verificar datos y tipo de rol

Background: 
    Given estoy en la pagina inicio el usuario "isaacurdaneta@gmail.com" ingresa sus credenciales "04161652340" en la webApp "https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso"
    When el usuario es redirido a la pagina principal

Scenario: Verificacion de Roles de Usuario
    When las credenciales ingresadas corresponden al Rol:
        | Rol        |  
        | Dueño      | 
        | Empleado   |
        | Cliente    |
    When se verifica que las credenciales otorgadas correspondan al rol 
    Then se muestra la página de gestion con todas las funcionalidades disponibles segun rol

