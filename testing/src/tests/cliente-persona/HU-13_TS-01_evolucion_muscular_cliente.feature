Feature: US 13 | TS 01 Evolucion Muscular del Cliente
    Como cliente del Gym
    Quiero tener acceso a un registro de mi historial de entrenamiento, visualizar mi progreso en terminos de peso, musculatura, velocidad, etc
    Para ver mi proceso evolutivo muscular actualizado en el tiempo

Background: 
    Given el cliente está autenticado en la aplicación Spooter

@US-13 @TS-01 @TC-01
Scenario: Registro de historial de entrenamiento
    When accede a la sección de "Historial de Entrenamiento"
    Then debería poder ver un registro de sus sesiones de entrenamiento anteriores

@US-13 @TS-01 @TC-02
Scenario: Visualización del Progreso Muscular
    When accede a la sección de "Progreso Muscular"
    Then debería poder ver un gráfico que muestre su progreso en términos de masa muscular a lo largo del tiempo
    Then debería poder visualizar los datos de progreso en un formato gráfico claro y fácil de entender, como gráficos de líneas o de barras

@US-13 @TS-01 @TC-03
Scenario: Actualización Automática de los Datos de Progreso
    Given el cliente está autenticado en la aplicación del gimnasio
    When realiza una nueva sesión de entrenamiento
    Then debería ver que los datos de progreso se actualizan automáticamente en la aplicación sin necesidad de recargar la página