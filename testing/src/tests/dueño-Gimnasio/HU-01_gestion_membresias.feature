Feature: Gestion de Membresias de Clientes
HU-01
    Como dueño del gym
    Quiero poder gestionar las membresias de los Clientes y los pagos pendientes a traves de la webApp
    Para mantener un control eficiente en las finanzas del gym

Background:
    Given he ingresado usuario '' y contraseña '' en la webapp ''
    When estoy en la pagina de gestion de membresias con el rol de "Dueño/Administrador"

@gestion-dueño @id:01
Scenario: Visualizar y Gestionar membresias de Clientes
    Then deberia ver una lista de membresia de los clientes
    Then deberia ver estado de las Membresias: 'activa', 'vencida', 'cancelada'

@gestion-dueño @id:02
Scenario: Editar membresia de cliente/usuario
    When selecciono la membresia de un cliente para Editar
    When modifico la duracion o el tipo de membresia guardando los campos
    Then deberia ver la membresia del cliente actualizada

@gestion-dueño @id:03
Scenario: Regsitrar nueva membresia para cliente
    When selecciono la opcion de registrar nueva membresia
    When el usuario ingresa los detalle de la nueva membresia (tipo, duracion, precio, etc)
    Then al confirmar la gestion de la membresia deberia ver nuevo registro en la lista