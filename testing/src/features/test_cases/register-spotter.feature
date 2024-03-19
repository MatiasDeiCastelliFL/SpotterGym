Feature: Func | TS 01 | Registro con datos parametrizados
    Como usuario Dueño/Empleados/Cliente del gym
    Quiero poder registrarme en la app
    Para utilizar sus servicios

Background: 
    Given estoy en la pagina de registro "https://spotter-gym.vercel.app"

@TS-01 @TC-02
Scenario: Verificar que se muestre mensaje de notificacion al dejar campos vacios
    When ingreso datos incorrectos en campos requeridos del formulario (Nombre, Apellido, Telefono, Descripcion, Email, Contraseña y Rep. Contraseña)
    When confirmo los datos ingresados
    Then se muestran mensajes del formato requerido en cada campo 

@TS-01 @TC-04
Scenario: Formato invalido en contraseña    
    When ingreso una constraseña de formato invalido
    Then deberia ver un error indicando 'La contraseña debe tener > 8 caracteres, numeros y un carcater especial' 

@TS-01 @TC-05
Scenario: Verificar coincidencia de las contraseñas
    When ingreso una contraseña distinta en repetir contraseña
    Then deberia ver un mensaje de error adecuado 'Las contraseñas deben ser iguales'

