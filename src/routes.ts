import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
//MVC
//Model  -  represetação de uma tabela no banco, não diretamente
//Views -  como são visualizadas no frontend
//Controllers - onde irá ficar nossa logica

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', OrphanagesController.create);

export default routes;