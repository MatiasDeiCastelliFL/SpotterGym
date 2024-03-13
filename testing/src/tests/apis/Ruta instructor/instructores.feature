Feature: Api test Instructors
    * Probar Funcionalidades GET
    * Obtener lista de instructores 

Background: 
    Given se ingresa en la ruta instructores

Scenario: Obtener todos los instructores
    When se reliza una solicitud GET 'https://spotter-gym.onrender.com/api/v1/instructors'
    Then se deberia ver una una estado de respuesta 200
    Then se muestra una lista de instructores

Scenario: Crear un instructor para el gym
    Given que los siguientes datos del instructor están listos para ser enviados
    When se realiza una solicitud POST a 'https://spotter-gym.onrender.com/api/v1/instructors' con los datos del instructor
    Then debería recibir una respuesta con el estado 201
    Then debería ver al instructor creado en la lista de instructores

Scenario: Eliminar Instructor

Scenario: Actualizar datos creados para el isntructor del gym

