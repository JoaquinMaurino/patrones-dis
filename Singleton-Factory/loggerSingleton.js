class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
        }
        this.logs = [];
        return Logger.instance
    }
    log(message) {
        const timestamp = new Date().toISOString();
        const log = `${timestamp}: ${message}`
        this.logs.push(log)
        console.log(log);
    }
    getLogs(){
        return this.logs;
    }
}

module.exports = Logger;