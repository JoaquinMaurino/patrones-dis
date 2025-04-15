function runMiddlewares(req, res, middlewares) {
    let index = 0
    const next = () => {
        if (index < middlewares.length) {
            const middleware = middlewares[index++]
            middleware(req, res, next)
        }
    }
    next();
}

const middleware1 = (req, res, next) => {
    console.log('Middleware 1: autenticacion de la peticion');
    next();
}
const middleware2 = (req, res, next) => {
    console.log('Middleware 2: procesamiento de la peticion');
    next();
}
const middleware3 = (req, res, next) => {
    console.log('Middleware 3: finalizacion de la peticion');
    //req.user = { username: 'Joaquin' }
    next();
}

const middleware4 = (req, res, next) => {
    if (req.user) {
        console.log('Middleware 4: User =>', req.user);
    } else {
        console.log('Middleware 4: User not found');
    }
    next();
}

const req = {}
const res = {}

runMiddlewares(req, res, [middleware1, middleware2, middleware3, middleware4])