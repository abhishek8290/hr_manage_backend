const express= require('express');
const app = express();
const bodyparser= require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const router_register= require('./router/router_register');
const router_find= require('./router/router_find');
const db = require('./db/db');
const login = require('./router/login');
const router_delete= require('./router/router_delete');
const router_update= require('./router/router_update');
const empRegister  = require('./router/employeeRouter');
const cors = require('cors');


const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:8000"]
      }
    },
    // ['.routes/*.js']
    apis: ["app.js"]
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/**
 * @swagger
 * /find:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use('/login',login);
app.use('/register',router_register);
app.use('/emp',empRegister);

app.use('/find',router_find);
app.use('/delete',router_delete);
app.use('/update',router_update);
app.get('/',(req,res)=>res.send('hello world'));

app.listen('8000',function(){console.log('app started at port 8000')});