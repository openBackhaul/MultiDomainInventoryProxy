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

    return await restClient.startPostDataRequest(targetUrl, payload, requestUrl, opData.operationKey);
}