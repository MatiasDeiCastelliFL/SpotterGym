Feature: Manejo de Ingresos Incorrectos en el Formulario de Login

    Feature Description

Background: url de accedo
    Given estoy en la pagina de login en spotter 'https://s13-07-n-node-react-git-front-end-merge-spotterapp.vercel.app/acceso'

Scenario: Campo de email vacio
    When no se ingresa ningun caracter en campo de email 
    Then debria ver un mensaje de email es requerido 

Scenario: Campo de password vacio
    When no se ingresa ningun caracter en campo de contraseña
    Then debria ver un mensaje de contraseña es requerida

Scenario: Contraseña con numero minimo de caracteres
    When ingreso una contraseña de 7 caracteres
    Then deberia ver un mensaje indicando la contraseña debe ser mayor a 8 caracteres

Scenario: Contraseña con numero maximo de caracteres
    When ingreso una contraseña de 13 caracteres
    Then deberia ver un mensaje indicando que la contraseña debe ser menor a 12 caracteres