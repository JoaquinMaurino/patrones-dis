class DataService {
    processData(data) {
        return data.map((item) => item * 2)
    }
}


//Decorar DataService:
class DataServiceWithLogging {
    constructor(dataService, logger) {
        this.dataService = dataService
        this.logger = logger
    }
    //Decoramos la funcion original agregando mas funcionalidades
    //pero usando la original, en este caso se almacena en resultado
    processData(data) {
        //el decorado es agrgar estos logs:
        this.logger.log('Iniciando porcesamiento')

        const resultado = this.dataService.processData(data)
        //y este:
        this.logger.log('Finalizando procesamiento')
        
        return resultado
    }
}

class Logger {
    log(message) {
        console.log('[Logger]', message)
    }
}

const baseService = new DataService();
const logger = new Logger();
const decoratedSerice = new DataServiceWithLogging(baseService, logger);

//Ejecutamos el uso del servicio decorado
const inputData = [1,2,3,4]
const processedData = decoratedSerice.processData(inputData);
console.log(`Resultado procesado: ${processedData}`)