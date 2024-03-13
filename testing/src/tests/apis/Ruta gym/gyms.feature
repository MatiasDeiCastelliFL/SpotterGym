Feature: Api test Gyms
    * Se realizan pruebas en el backend sobre la api de creacion de gimnasios
    * probar metodo GET, POST, DELTE, PATCH. PUT

Background: 
    Given ingresamos en la ruta gimnasios 'https://spotter-gym.onrender.com/api/v1/gyms'

Scenario: Obtener todos los gimnasios
    When se realiza una solicitud GET en la ruta gyms
    Then se deberia ver una respuesta 200 ok
    Then se muestra una lista con los gimansios creados

Scenario: Crear Gimnasio 
    When se envía una solicitud POST a la ruta de creación de gimnasios
    When se incluyen los siguientes datos en la solicitud
    Then la respuesta debería incluir un código de estado 201
    Then el gimnasio creado debería estar disponible en la lista del servidor
