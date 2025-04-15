const LoggerFactory = require('./loggerFactory');
const Logger = require('./loggerSingleton.js');

//Instancia Singleton:
const loggerInstance = new Logger()
//Instancias con factory
const loggerConsole = LoggerFactory.createLogger('console')
const loggerFile = LoggerFactory.createLogger('file')

//Logging usando console y file
loggerConsole.log('Este es un mensaje de log en la consola')
loggerFile.log('Este es un mensaje de log en archivo')

//Imprimimos todos los logs almacenados desde el singleton
loggerInstance.getLogs().forEach((log) => console.log(log))