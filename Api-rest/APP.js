import express from 'express';
import feticeirosCrontroller from './src/app/controllers/feticeirosCrontroller.js';

const APP = express();

APP.use(express.json());

APP.get('/dados_feticeiros', feticeirosCrontroller.index)
   
//------------------------------------------------------------------------------

    APP.get('/dados_feticeiros/:id', feticeirosCrontroller.show)
//------------------------------------------------------------------------------


APP.post('/dados_feticeiros', feticeirosCrontroller.store)
//------------------------------------------------------------------------------


APP.delete('/dados_feticeiros/:id', feticeirosCrontroller.delete)
//------------------------------------------------------------------------------


APP.put('/dados_feticeiros/:id', feticeirosCrontroller.update)

export default APP;

