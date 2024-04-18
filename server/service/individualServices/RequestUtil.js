const BasicServices = require("onf-core-model-ap-bs/basicServices/BasicServicesService");
const logger = require('../LoggingService.js').getLogger();
const RequestHeader = require("onf-core-model-ap/applicationPattern/rest/client/RequestHeader");

let appInformation = null;

/**
 * Query and cache app information from the load file.
 * @returns appInformation with application-name and release-number
 */
exports.getAppInformation = async function() {
    if (!appInformation) {
        appInformation = {};

        try {
            appInformation = await BasicServices.informAboutApplication();
        } catch (exception) {
            logger.error(exception, "no application information found, using fallback");
            appInformation["application-name"] = "MultiDomainInventoryProxy";
            appInformation["release-number"] = "1.0.0";
        }
    }

    return appInformation;
}

exports.createRequestHeader = function (operationKey) {
    return new RequestHeader("MultiDomainInventoryProxy", "MultiDomainInventoryProxy", undefined, "1", undefined, operationKey);
}

exports.buildControllerTargetPath = function (controllerProtocol, controllerAddress, controllerPort) {
    let addressPart;
    if (controllerAddress["domain-name"]) {
        addressPart = controllerAddress["domain-name"];
    } else {
        addressPart = controllerAddress["ip-address"]["ipv-4-address"];
    }

    return controllerProtocol
        + "://" + addressPart
        + ":" + controllerPort;
}