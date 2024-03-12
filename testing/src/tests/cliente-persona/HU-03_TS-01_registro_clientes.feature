Feature: US 03 | TS-01 | Registro de usuarios en Spotter
    Como cliente/usuario del gym
    quiero poder registrarme y acceder a todos los servicios elegidos, pago de forma rapida y segura
    Para gestion de finanzas y entrenamiento 

Background:
    Given estoy en la pagina de registro de la app

@US-04 @TS-01 @TC-01
Scenario: Registro de Nuevo Cliente
    When ingreso mis detalles de registro (nombre, correo electrónico, contraseña, etc.)
    When confirmo el registro
    Then debería recibir un correo electrónico de confirmación
    Then debería ser redirigido a la página de inicio de sesión

@US-04 @TS-01 @TC-02
Scenario: Campos obligatorios en el formulario de registro
    When el cliente intenta completar el formulario con campos vacíos
    Then se muestra un mensaje de error indicando que todos los campos son obligatorios

@US-04 @TS-01 @TC-03
Scenario: Formato de Email Incorrecto
    When el cliente ingresa un email inválido en el formulario
    Then se muestra un mensaje de error indicando que el formato del email es incorrecto

@US-04 @TS-01 @TC-04
Scenario: Contraseña Débil
    When ingreso una contraseña que no cumple con los criterios de seguridad
    Then debo recibir un mensaje de error indicando que la contraseña es débil
    Then se deben proporcionar pautas para crear una contraseña segura   

@US-04 @TS-01 @TC-05
Scenario: Confirmación de Contraseña
    When ingreso una contraseña y la confirmo en un campo separado
    Then la contraseña confirmada debe coincidir exactamente con la contraseña ingresada
    Then se debe proporcionar un mensaje de error si las contraseñas no coinciden

@US-04 @TS-01 @TC-06
Scenario: Detección de duplicidad de email durante el registro
    When un cliente ya está registrado con el mismo email
    When el cliente intenta completar el formulario con el email duplicado
    Then se muestra un mensaje de error indicando que el email ya está en uso

@US-04 @TS-01 @TC-07
Scenario: Longitud Máxima de Caracteres
    When ingreso información en campos que exceden la longitud máxima permitida
    Then debo recibir un mensaje de error indicando que se ha superado el límite de caracteres
    And no se debe permitir el envío del formulario hasta que se corrijan los errores

@US-04 @TS-01 @TC-08
Scenario: Longitud Máxima en Contraseña
    When ingreso una contraseña que excede la longitud máxima permitida
    Then debo recibir un mensaje de error indicando que la contraseña supera el límite de caracteres
    And no se debe permitir el envío del formulario hasta que se corrija el error

@US-04 @TS-01 @TC-09
Scenario: Longitud Mínima en Contraseña
    When ingreso una contraseña que no alcanza la longitud mínima permitida
    Then debo recibir un mensaje de error indicando que la contraseña no cumple con la longitud mínima requerida
    And no se debe permitir el envío del formulario hasta que se corrija el error

# Escenarios para validar ingreso de datos incorrectos o erroneos

@US-04 @TS-01 @TC-10
Scenario: Nombre Inválido
    When ingreso un nombre con caracteres especiales o números
    Then debo recibir un mensaje de error indicando que el nombre es inválido

@US-04 @TS-01 @TC-11
Scenario: Apellido Inválido
    When ingreso un apellido con caracteres especiales o números
    Then debo recibir un mensaje de error indicando que el apellido es inválido


