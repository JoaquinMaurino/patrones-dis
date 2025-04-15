const Logger = require('./loggerSingleton')

const loggerInstance = new Logger();

class ConsoleLogger {
    constructor() {
        //Encapsulando el singleton de logger
        this.logger = loggerInstance;
    }
    log(message) {
        console.log('Usando ConsoleLogger');
        console.log(`ConsoleLogger: ${message} `);
        this.logger.log(message);
    }
}

class FileLogger {
    constructor() {
        this.logger = loggerInstance;
    }
    log(message) {
        console.log('Usando FileLogger');
        console.log(`FileLogger: ${message} `);
        this.logger.log(message);
    }
}

class LoggerFactory {
    static createLogger(type) {
        if (type === 'console') {
            return new ConsoleLogger();
        } else if (type === 'file') {
            return new FileLogger();
        } else {
            throw new Error('Tipo de logger no valido')
        }
    }
}

module.exports = LoggerFactory;