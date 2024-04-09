'use strict';

const executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
const IndividualPostServices = require('../service/IndividualServicesPostService');
const IndividualGetServices = require('../service/IndividualServicesGetService');
const responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
const responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
const restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');
const requestUtil = require("../service/individualServices/RequestUtil");
const OnfAttributeFormatter = require("onf-core-model-ap/applicationPattern/onfModel/utility/OnfAttributeFormatter");
const httpErrors = require('http-errors');
const operationServerInterface = require('onf-core-model-ap/applicationPattern/onfModel/models/layerProtocols/OperationServerInterface');


/**
 * Build response in case of errors.
 * @param error
 * @param req
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const handleError = async function handleError(error, req, res) {

    let cleanedUrl = removeFieldsFilterFromString(req.url);
    let operationServerUuid = await operationServerInterface.getOperationServerUuidAsync(cleanedUrl);
    let lifeCycleState = await operationServerInterface.getLifeCycleState(operationServerUuid);
    let responseHeader = {};
    responseHeader.lifeCycleState = lifeCycleState;

    let errorResponse = buildErrorResponse(res, error, responseHeader);

    if (responseHeader) {
        let requestHeader = requestUtil.createRequestHeader();
        executionAndTraceService.recordServiceRequest(requestHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy",
            requestHeader.originator, req.url, errorResponse.code, req.body, errorResponse.body);
    }
}

function removeFieldsFilterFromString(str) {
    const tokens = str.split('?fields');
    return tokens[0];
}

/**
 * Build response of forwarded calls.
 * @param req
 * @param res
 * @param ret
 * @returns {Promise<{headers: Object, code: number, body: {code: number, message: (*|string)}}>}
 */
const handleForwardedResult = async function handleForwardedResult(req, res, ret) {

    let operationServerUuid;
    if (ret.operationName) {
        operationServerUuid = await operationServerInterface.getOperationServerUuidAsync(ret.operationName);
    } else {
        let cleanedUrl = removeFieldsFilterFromString(req.url);
        operationServerUuid = await operationServerInterface.getOperationServerUuidAsync(cleanedUrl);
    }
    let lifeCycleState = await operationServerInterface.getLifeCycleState(operationServerUuid);
    let responseHeader = {};
    responseHeader.lifeCycleState = lifeCycleState;

    let forwardResponse = buildForwardedResponse(res, ret.code, ret.message, responseHeader);

    let requestHeader = requestUtil.createRequestHeader();
    executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy",
        requestHeader.originator, req.url, ret.code, req.body, ret.message);

    return forwardResponse;
};

function buildMessage(body) {
    if (body?.message) {
        return body.message;
    } else if (body) {
        return body;
    } else {
        return httpErrors.InternalServerError().message;
    }
}

/**
 * Build response from received response.
 * @param response
 * @param responseCode
 * @param responseBody
 * @param responseHeader
 */
function buildForwardedResponse(response, responseCode, responseBody, responseHeader) {
    if (responseBody?.statusCode && typeof responseBody.statusCode==='number' && responseBody?.message) {
        responseCode = responseBody.statusCode;

        responseBody = {
            code: responseCode,
            message: responseBody.message
        }
    } else {
        if (responseCode === undefined) {
            responseCode = 500;
        }

        // In error cases we return code/message objects as response.
        if (responseCode !== 200) {
            responseBody = {
                code: responseCode,
                message: buildMessage(responseBody)
            }
        }
    }

    let headers;

    if (responseHeader !== undefined) {
        headers = OnfAttributeFormatter.modifyJsonObjectKeysToKebabCase(responseHeader);
        response.set(headers);
    }

    response.status(responseCode).json(responseBody);

    return {
        code: responseCode,
        headers: headers,
        body: responseBody
    }
}

/**
 * Build response from error.
 * @param response
 * @param error
 * @param responseHeader
 * @returns {{headers, code: number, body: {code: number, message}}}
 */
function buildErrorResponse(response, error, responseHeader) {
    let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;

    let responseBody = {
        code: responseCode,
        message: error?.message? error.message: error
    }

    let headers;

    if (responseHeader !== undefined) {
        headers = OnfAttributeFormatter.modifyJsonObjectKeysToKebabCase(responseHeader);
        response.set(headers);
    }

    response.status(responseCode).json(responseBody);

    return {
        code: responseCode,
        headers: headers,
        body: responseBody
    }
}


module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {


    IndividualPostServices.bequeathYourDataAndDie(req.url, body, user, originator, xCorrelator, traceIndicator, customerJourney)
        .then(async function (response) {
            let responseCode = responseCodeEnum.code.OK;
            let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, ret.operationName);
            responseBuilder.buildResponse(res, response.code, response.message, responseHeader);
            return executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, "MultiDomainInventoryProxy", xoriginator, req.url, responseCode, req.body, response);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};


module.exports.getCachedActualEquipment = function getCachedActualEquipment(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedActualEquipment(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};


module.exports.getCachedControlConstruct = function getCachedControlConstruct(req, res, next, fields, mountName) {// fields, mountName: parameter order fixed


    IndividualGetServices.getCachedControlConstruct(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAirInterfaceCapability = function getCachedAirInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedAirInterfaceCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAirInterfaceConfiguration = function getCachedAirInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedAirInterfaceConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAirInterfaceHistoricalPerformances = function getCachedAirInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedAirInterfaceHistoricalPerformances(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAirInterfaceStatus = function getCachedAirInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedAirInterfaceStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAlarmCapability = function getCachedAlarmCapability(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedAlarmCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAlarmConfiguration = function getCachedAlarmConfiguration(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedAlarmConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedAlarmEventRecords = function getCachedAlarmEventRecords(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedAlarmEventRecords(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedCoChannelProfileCapability = function getCachedCoChannelProfileCapability(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedCoChannelProfileCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedCoChannelProfileConfiguration = function getCachedCoChannelProfileConfiguration(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedCoChannelProfileConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedConnector = function getCachedConnector(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedConnector(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedContainedHolder = function getCachedContainedHolder(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedContainedHolder(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedCurrentAlarms = function getCachedCurrentAlarms(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedCurrentAlarms(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedEquipment = function getCachedEquipment(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedEquipment(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedEthernetContainerCapability = function getCachedEthernetContainerCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedEthernetContainerCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedEthernetContainerConfiguration = function getCachedEthernetContainerConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedEthernetContainerConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedEthernetContainerHistoricalPerformances = function getCachedEthernetContainerHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedEthernetContainerHistoricalPerformances(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedEthernetContainerStatus = function getCachedEthernetContainerStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedEthernetContainerStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedExpectedEquipment = function getCachedExpectedEquipment(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedExpectedEquipment(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedFirmwareCollection = function getCachedFirmwareCollection(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedFirmwareCollection(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedFirmwareComponentCapability = function getCachedFirmwareComponentCapability(req, res, next, fields, mountName, localId) {


    IndividualGetServices.getCachedFirmwareComponentCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedFirmwareComponentList = function getCachedFirmwareComponentList(req, res, next, fields, mountName, localId) {


    IndividualGetServices.getCachedFirmwareComponentList(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedFirmwareComponentStatus = function getCachedFirmwareComponentStatus(req, res, next, fields, mountName, localId) {


    IndividualGetServices.getCachedFirmwareComponentStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedForwardingConstruct = function getCachedForwardingConstruct(req, res, next, fields, mountName, uuid, uuid1) {


    IndividualGetServices.getCachedForwardingConstruct(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedForwardingConstructPort = function getCachedForwardingConstructPort(req, res, next, fields, mountName, uuid, uuid1, localId) {


    IndividualGetServices.getCachedForwardingConstructPort(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedForwardingDomain = function getCachedForwardingDomain(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedForwardingDomain(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedHybridMwStructureCapability = function getCachedHybridMwStructureCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedHybridMwStructureCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedHybridMwStructureConfiguration = function getCachedHybridMwStructureConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedHybridMwStructureConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedHybridMwStructureHistoricalPerformances = function getCachedHybridMwStructureHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedHybridMwStructureHistoricalPerformances(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedHybridMwStructureStatus = function getCachedHybridMwStructureStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedHybridMwStructureStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedLink = function getCachedLink(req, res, next, fields, uuid) {


    IndividualGetServices.getCachedLink(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedLinkPort = function getCachedLinkPort(req, res, next, fields, uuid, localId) {


    IndividualGetServices.getCachedLinkPort(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedLogicalTerminationPoint = function getCachedLogicalTerminationPoint(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedLogicalTerminationPoint(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedLtpAugment = function getCachedLtpAugment(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedLtpAugment(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedMacInterfaceCapability = function getCachedMacInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedMacInterfaceCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedMacInterfaceConfiguration = function getCachedMacInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedMacInterfaceConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedMacInterfaceStatus = function getCachedMacInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedMacInterfaceStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPolicingProfileCapability = function getCachedPolicingProfileCapability(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedPolicingProfileCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPolicingProfileConfiguration = function getCachedPolicingProfileConfiguration(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedPolicingProfileConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedProfile = function getCachedProfile(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedProfile(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedProfileCollection = function getCachedProfileCollection(req, res, next, fields, mountName) {


    IndividualGetServices.getCachedProfileCollection(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPureEthernetStructureCapability = function getCachedPureEthernetStructureCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedPureEthernetStructureCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPureEthernetStructureConfiguration = function getCachedPureEthernetStructureConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedPureEthernetStructureConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPureEthernetStructureHistoricalPerformances = function getCachedPureEthernetStructureHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedPureEthernetStructureHistoricalPerformances(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedPureEthernetStructureStatus = function getCachedPureEthernetStructureStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedPureEthernetStructureStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedQosProfileCapability = function getCachedQosProfileCapability(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedQosProfileCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedQosProfileConfiguration = function getCachedQosProfileConfiguration(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedQosProfileConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedSchedulerProfileCapability = function getCachedSchedulerProfileCapability(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedSchedulerProfileCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedSchedulerProfileConfiguration = function getCachedSchedulerProfileConfiguration(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedSchedulerProfileConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedVlanInterfaceCapability = function getCachedVlanInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedVlanInterfaceCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedVlanInterfaceConfiguration = function getCachedVlanInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedVlanInterfaceConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};


module.exports.getCachedWireInterfaceCapability = function getCachedWireInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedWireInterfaceCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedWireInterfaceConfiguration = function getCachedWireInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedWireInterfaceConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedWireInterfaceHistoricalPerformances = function getCachedWireInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedWireInterfaceHistoricalPerformances(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedWireInterfaceStatus = function getCachedWireInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {


    IndividualGetServices.getCachedWireInterfaceStatus(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedWredProfileCapability = function getCachedWredProfileCapability(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedWredProfileCapability(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.getCachedWredProfileConfiguration = function getCachedWredProfileConfiguration(req, res, next, fields, mountName, uuid) {


    IndividualGetServices.getCachedWredProfileConfiguration(req.url)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.provideListOfActualDeviceEquipment = function provideListOfActualDeviceEquipment(req, res, next, body) {


    IndividualPostServices.provideListOfActualDeviceEquipment(req.url, body)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.provideListOfConnectedDevices = function provideListOfConnectedDevices(req, res, next, body) {


    IndividualPostServices.provideListOfConnectedDevices(req.url, body)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.provideListOfDeviceInterfaces = function provideListOfDeviceInterfaces(req, res, next, body) {


    IndividualPostServices.provideListOfDeviceInterfaces(req.url, body)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

module.exports.provideListOfParallelLinks = function provideListOfParallelLinks(req, res, next, body) {


    IndividualPostServices.provideListOfParallelLinks(req.url, body)
        .then(async function (ret) {
            return handleForwardedResult(req, res, ret);
        })
        .catch(async function (error) {
            return handleError(error, req, res);
        });
};

// 4-integrate-logging

// 7-implement-individual-services
