Feature: US 04 | TS 02 | Seguimiento de Entrenamientos
    Como cliente
    Quiero poder marcar mis entrenamientos como completados
    Para llevar un registro de mi progreso y cumplir con mi plan de entrenamiento

Background: Inicio de sesion
    Given el cliente ha iniciado sesion en spotter

@US-04 @TS-02 @TC-01
Scenario: Marcar entrenamiento como completado
    When el cliente esta viendo su rutina de entrenamiento
    When marca un entrenamiento como completado
    Then la app deberia registrar el entrenamiento como completado para ese dia

@US-04 @TS-02 @TC-02
Scenario: Ver entrenamientos completados
    When el cliente accede a su historial de entrenamientos completados
    Then deberia ver una lista de los entrenamientos que ha marcado como completados

@US-04 @TS-02 @TC-03
Scenario: Desmarcar entrenamiento como completado
    Given el cliente ha marcado un entrenamiento como completado
    When desmarca ese entrenamiento como completado
    Then la app deberia actualizar el estado del entrenamiento como no completado

@US-04 @TS-02 @TC-04
Scenario: Ver progreso de entrenamientos
    Given el cliente ha completado varios entrenamientos eb diferentes dias
    When accede a un resumen de progreso
    Then deberia ver un resumen de su progreso de entrenamiento, como el numero total de entrenamientos y el total de porcentaje de completitud del plan
