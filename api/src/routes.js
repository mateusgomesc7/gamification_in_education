const express = require('express');

const UserController = require('./controllers/UserController');
const PerguntaController = require('./controllers/PerguntaController');
const CursoController = require('./controllers/CursoController');
const ReportController = require('./controllers/ReportController');
const ComentarioController = require('./controllers/ComentarioController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);
routes.get('/users/:user_id', UserController.show);

routes.get('/users/:user_id/perguntas', PerguntaController.show);
routes.post('/users/:user_id/perguntas', PerguntaController.store);
routes.delete('/users/:user_id/perguntas', PerguntaController.delete);
routes.get('/perguntas', PerguntaController.index);
routes.delete('/perguntas', PerguntaController.delete_adm);

routes.get('/users/:user_id/comentarios', ComentarioController.index_user);
routes.get('/perguntas/:pergunta_id/comentarios', ComentarioController.index_pergunta);
routes.post('/perguntas/:pergunta_id/comentarios', ComentarioController.store);
routes.delete('/users/:user_id/comentarios', ComentarioController.delete);
routes.delete('/comentarios', ComentarioController.delete_adm);

routes.get('/users/:user_id/cursos', CursoController.index);
routes.post('/users/:user_id/cursos', CursoController.store);
routes.delete('/users/:user_id/cursos', CursoController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;