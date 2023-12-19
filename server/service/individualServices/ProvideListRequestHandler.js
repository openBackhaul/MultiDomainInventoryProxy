const restClient = require('./RestClient');
const requestUtil = require("./RequestUtil");
const controlContructUtils = require("./ControlConstructUtil");
const logger = require('../LoggingService.js').getLogger();

exports.provideListOfData = async function (requestUrl, body) {

    let payload = null;
    //convert mount-name to mountName
    if (body && body['mount-name']) {
        payload = {
            "mountName" : body['mount-name']
        };
    } else {
        payload = body;
    }

    //forward request to MWDI
    return await requestDataFromMWDI(requestUrl, payload);
}


/**
 * forward request to MWDI instance depending on usecase
 *
 * @param requestUrl
 * @param payload
 * @return {Promise<*|null>}
 */
async function requestDataFromMWDI(requestUrl, payload) {

    let callbackName = null;

    switch (requestUrl) {
        case "/v1/provide-list-of-connected-devices":
            callbackName = "RequestForListOfConnectedDevicesCausesReadingFromCache";
            break;
        case "/v1/provide-list-of-device-interfaces":
            callbackName = "RequestForListOfDeviceInterfacesCausesReadingFromCache";
            break;
        case "/v1/provide-list-of-actual-device-equipment":
            callbackName = "RequestForListOfActualDeviceEquipmentCausesReadingFromCache";
            break;
        case "/v1/provide-list-of-parallel-links":
            callbackName = "RequestForListOfParallelLinksCausesReadingFromCache";
            break;
        default:
            logger.error("invalid requestUrl for forward request");
            return null;
    }

    let opData = await controlContructUtils.getForwardingConstructOutputOperationData(callbackName);

    let targetUrl = requestUtil.buildControllerTargetPath(opData.protocol, opData.address, opData.port) + requestUrl;

    logger.debug("forwarding post data request to '" + targetUrl + "'");

    const ret = await restClient.startPostDataRequest(targetUrl, payload, requestUrl, opData.operationKey);

    return {code: ret.code, message: ret.message, headers: ret.headers, operationName: opData.operationName};
}


/**
 * Forward request to MWDI.
 * @param requestUrl
 * @param callbackName
 * @returns {Promise}
 */
exports.getDataFromMWDI = async function (requestUrl, callbackName) {
    let opData = await controlContructUtils.getForwardingConstructOutputOperationData(callbackName);

    let targetUrl = requestUtil.buildControllerTargetPath(opData.protocol, opData.address, opData.port) + requestUrl;

    logger.debug("forwarding get request to '" + targetUrl + "'");

    const ret = await restClient.startGetRequest(targetUrl, requestUrl, opData.operationKey);

    return {code: ret.code, message: ret.message, headers: ret.headers, operationName: opData.operationName};
}
