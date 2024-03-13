Feature: US 03 | TS 02 | Seleccion de Membresia
    Como cliente
    Quiero poder poder seleccionar una membresia del gym
    Para poder acceder a los servicios del gym

Background: Inicio de sesion
    Given he ingresado mis credenciales de cliente en la app 

@US-03 @TS-02 @TC-01
Scenario: Visualizar opciones o lista de membresias
    When accedo a la seccion de membresias
    Then deberia verse una lista con todas las diferentes opciones de membresias disponibles

@US-03 @TS-02 @TC-02
Scenario: Seleccion de una membresia especifica
    Given he ingresado a la lista con las diferentes membresias
    When selecciono una de las opciones disponibles
    Then deberia ver los detalles completos de la membresia, como su precio, duracion y carcateristicas incluidas

@US-03 @TS-02 @TC-03
Scenario: Proceso exitoso en la obtencion de una membresia
    Given selecciono una membresia especifica
    When confirmo el proceso de seleccion
    Then la app deberia registrar la membresia seleccionada actualizando correctamente la cuenta

@US-03 @TS-02 @TC-04
Scenario: Limite en la seleecion de membresia
    Given estoy en la seccion de la lista de opciones de membresias
    When intento seleccionar mas de una membresia
    Then la app debe indicar un mensaje de error adecuado que solo es posible elegir una a la vez

@US-03 @TS-02 @TC-05
Scenario: Proceso de cambio en membresia
    Given actualmente tengo una membresia activa
    When accedo a la seccion con las diferentes opciones de membresias
    When selecciono una nueva membresia diferente a la actual
    Then deberia recibir una confirmacion al realizar el cambio
    Then la app deberia actualizar correctamente la membresia a la nueva opcion seleccionada

@US-03 @TS-02 @TC-06
Scenario: Proceso de cancelacion en membresia
    Given tengo una membresia activa en mi cuenta
    When accedo a la configuracion de mi cuenta
    When selecciono la opcion para cancelar memebresia
    Then deberia recibir una notificaon indicando la cancelacion de la misma
    Then la app deberia desactivar correctamente la membresia