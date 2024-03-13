Feature: Nav | TS 01 | Verificacion status de Links/Enlaces en la webApp
    * Verificar ausenacia de enlaces rotos
    * Verificar que todos los enlaces de navegacion sean correctos

Background: inicio se sesion
    Given el usuario 'userA@mail.com' accede con su contraseña 'wxyz1234*' en la web app 'www.spooter.com'

@Nav @TS-02 @TC-01
Scenario: Verificar enlaces principales de navegacion en la webapp
    Given accedo a la pagina principal en la webapp
    When se visualizan los enlaces principales de navegacion
    Then los enlaces internos a las paginas pagina son correctos

@Nav @TS-02 @TC-02
Scenario: Verificar ausencia de errores http
    Given que estoy en la pagina "nombre de la pagina"
    When se buscan todos los enlaces internos
    Then se verifica que no haya un codigo de http de error        

