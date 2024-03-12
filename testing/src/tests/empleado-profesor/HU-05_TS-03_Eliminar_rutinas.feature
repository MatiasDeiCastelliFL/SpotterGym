Feature: US 05 | TS 03 | Eliminar rutinas de entrenamiento
    Como entrenador 
    Quiero poder eliminar rutinas de entrenamiento personalizadas para mis clientes
    Para adaptar los entrenamientos a sus necesidades y objetivos

Background: Inicio de sesion
    Given el entrenador ingresa en 'https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso'
    When ingresa email '' y contraseña '' validas como entrenador
    Then el entrenador accede a la seccion de rutinas

@US-05 @TS-03 @TC-01
Scenario: El entrenador elimina una rutina existente 
    Given ingresa en la rutina del cliente
    When selecciona la opcion para eliminar la rutina
    When confirma la eliminacion
    Then la rutina se elimina correctamente actulizando el perfil del cliente

@US-05 @TS-03 @TC-02
Scenario: El entrenador cancela la eliminacion de una rutina existente
    Given el entrenador ingresa en la rutina existente del cliente
    When el entrenador selecciona la opcion para eliminar la rutina
    When cancela la opcion de eliminacion
    Then la rutina no se elimina permaneciendo en el perfil del cliente
