import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return responde.json({message: 'testando'})
})

export default routes;