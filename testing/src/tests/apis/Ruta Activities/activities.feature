Feature: Api test Gyms
    * Se realizan pruebas en el backend sobre la api de creacion de actividades
    * probar metodo GET, POST, DELTE, PATCH. PUT

Background: 
    Given ingresar en la ruta gimnasios 'https://spotter-gym.onrender.com/api/v1/activities'

Scenario: Obtener lista de actividades
    When se realiza una solicitud GET en la ruta activities obteniendo status 200
    Then se muestra una lista con las actividades creados

Scenario: Crear una actividad
    When se realiza una solicitud POST en la ruta activities
    When se envian datos de solicitud en el body
    Then la actividad se crear correctamente indicando status 201
