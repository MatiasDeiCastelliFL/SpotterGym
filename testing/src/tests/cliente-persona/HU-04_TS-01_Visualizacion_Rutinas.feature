Feature: US 04 | TS 01 | Visualizacion de Rutinas Semanales
    Como cliente-persona del Gym
    Quiero poder ver mis rutinas semanales en la app
    Para planificar mis entrenamientos y alcanzar mis objetivos de manera efectiva

Background: Inicio de sesion
    Given he ingresado mis credenciales de cliente en la app

@US-04 @TS-01 @TC-01
Scenario: Visualizacion rutinas semanales    
    When accedo a la seccion "Mis Rutinas"
    Then deberia ver las rutinas de entrenamiento de la semana actual

@US-04 @TS-01 @TC-02
Scenario: Navegar entre semanas
    When navego entre las semanas utizando la funcionalidad de calendario
    Then deberia poder ver las rutinas de entrenamiento de las semanas pasadas y futuras

@US-04 @TS-01 @TC-03
Scenario: Ver rutina de una semana especifica
    When selecciono una semana especifica en el calendario
    Then deberia ver las rutinas de entrenamiento de esa semana