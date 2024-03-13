Feature: US 05 | TS 02 | Editar rutinas de entrenamiento
    Como entrenador 
    Quiero poder modificar rutinas de entrenamiento personalizadas para mis clientes
    Para adaptar los entrenamientos a sus necesidades y objetivos

Background: Inicio de sesion
    Given el entrenador ingresa en 'https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso'
    When ingresa email '' y contraseña '' validas como entrenador
    Then el entrenador accede a la seccion de rutinas

@US-05 @TS-02 @TC-01
Scenario: Modificar una rutina previmante creada para clientes
    Given el entrenador ingresa en la rutina del cliente
    When modifica los detalles de un ejercicio en la rutina existente 
    Then los detalles del ejercicio se actualizan correctamente en la rutina
    Then los cambios se actualizan correctamente en el perfil del cliente
