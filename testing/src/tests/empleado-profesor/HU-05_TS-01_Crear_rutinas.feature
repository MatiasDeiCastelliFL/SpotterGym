Feature: US 05 | TS 01 | Crear rutinas para clientes
    Como entrenador 
    Quiero poder crear rutinas de entrenamiento personalizadas para mis clientes
    Para adaptar los entrenamientos a sus necesidades y objetivos

Background: Inicio de sesion
    Given el entrenador ingresa en 'https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso'
    When ingresa email '' y contraseña '' validas como entrenador
    Then el entrenador accede a la seccion de rutinas

@US-05 @TS-01 @TC-01
Scenario: Crear Nueva Rutina exitosa para clientes del gym
    When agrega ejercicios, series, repeticiones y descansos para crear una nueva rutina
    Then la rutina se crea exitosamente
    Then todos los detalles de la ruitna estan completos y correctos

@US-05 @TS-01 @TC-02
Scenario: Crear una nueva rutina sin completar todos los detalles necesarios
    When el entrenador intenta crear una nueva rutina sin completar los detalles necesarios
    Then la creacion de la ruitna falla
    Then se muestra un mensaje de error indicando los detalles faltantes

