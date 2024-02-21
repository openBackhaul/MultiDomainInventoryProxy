'use strict';

const path = require('path');
const http = require('http');

const oas3Tools = require('oas3-tools');
const appCommons = require('onf-core-model-ap/applicationPattern/commons/AppCommons');
const {Oas3AppOptions} = require("oas3-tools/dist/middleware/oas3.options");

const logger = require('./service/LoggingService.js').getLogger();

const serverPort = 9093;

// uncomment if you do not want to validate security e.g. operation-key, basic auth, etc
//appCommons.openApiValidatorOptions.validateSecurity = false;

//disable response validation because mwdi responses are currently not valid against mdip openApi-Spec
appCommons.openApiValidatorOptions.validateResponses = false;

// swaggerRouter configuration
const options = new Oas3AppOptions(
    {controllers: path.join(__dirname, './controllers')},
    appCommons.openApiValidatorOptions
);


const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfig.getApp();

appCommons.setupExpressApp(app);


// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    logger.info('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    logger.info('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

global.databasePath = './database/load.json'

// 1-integrate-loadfile
// 3-integrate-authorization

// perform application registration
appCommons.performApplicationRegistration();
