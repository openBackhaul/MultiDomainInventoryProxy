'use strict';
const bequeathHandler = require('./individualServices/BequeathHandler');
const logger = require('./LoggingService.js').getLogger();
const provideListRequestHandler = require('./individualServices/ProvideListRequestHandler');


/**
 * Initiates process of embedding a new release
 *
 * body V1_bequeathyourdataanddie_body
 * user String User identifier from the system starting the service call
 * originator String 'Identification for the system consuming the API, as defined in  [/core-model-1-4:control-construct/logical-termination-point={uuid}/layer-protocol=0/http-client-interface-1-0:http-client-interface-pac/http-client-interface-configuration/application-name]'
 * xCorrelator String UUID for the service execution flow that allows to correlate requests and responses
 * traceIndicator String Sequence of request numbers along the flow
 * customerJourney String Holds information supporting customer’s journey to which the execution applies
 * no response value expected for this operation
 **/
exports.bequeathYourDataAndDie = function (requestUrl, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  return new Promise(async function (resolve, reject) {

    try {
      let success = await bequeathHandler.handleRequest(body, requestUrl);

      if (success) {
        resolve();
      } else {
        reject(new Error("bequeathHandler.handleRequest failed."));
      }
    } catch (exception) {
      logger.error(exception, "bequeath was not successful");
      reject(exception);
    }
  });
}


/**
 * Provides ActualEquipment from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_13
 **/
exports.getCachedActualEquipment = function (requestUrl, mountName, uuid, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:actual-equipment": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides list of actual equipment UUIDs inside a device
 *
 * body V1_providelistofactualdeviceequipment_body
 * returns inline_response_200_2
 **/
exports.provideListOfActualDeviceEquipment = function (requestUrl, body) {
  return new Promise(async function (resolve, reject) {
    let result = await provideListRequestHandler.provideListOfData(requestUrl, body);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}


/**
 * Provides list of devices that are connected to the controller
 *
 * returns inline_response_200
 **/
exports.provideListOfConnectedDevices = function (requestUrl, body) {
  return new Promise(async function (resolve, reject) {
    let result = await provideListRequestHandler.provideListOfData(requestUrl, body);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}


/**
 * Provides list of LTP UUIDs at a device
 *
 * body V1_providelistofdeviceinterfaces_body
 * returns inline_response_200_1
 **/
exports.provideListOfDeviceInterfaces = function (requestUrl, body) {
  return new Promise(async function (resolve, reject) {
    let result = await provideListRequestHandler.provideListOfData(requestUrl, body);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}


/**
 * Provides list of Links between the same ControlConstructs
 *
 * body V1_providelistofparallellinks_body
 * returns inline_response_200_3
 **/
exports.provideListOfParallelLinks = function (requestUrl, body) {
  return new Promise(async function (resolve, reject) {
    let result = await provideListRequestHandler.provideListOfData(requestUrl, body);
    if (result) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}
