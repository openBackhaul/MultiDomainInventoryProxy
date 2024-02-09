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


/**
 * Build response in case of errors.
 * @param error
 * @param req
 * @param req
 * @param res
 * @param startTime
 * @param xCorrelator
 * @returns {Promise<void>}
 */
const handleError = async function handleError(error, req, res, startTime, xCorrelator = undefined) {
  let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
  if (!responseHeader) {
    responseHeader = { // new ResponseHeader(xCorrelator, startTime)
      contentType: 'application/json',
      xCorrelator: xCorrelator,
      execTime: startTime
    };
  }
  let errorResponse = buildErrorResponse(res, error, responseHeader);

  if (responseHeader) {
    let requestHeader = requestUtil.createRequestHeader();
    executionAndTraceService.recordServiceRequest(requestHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy",
            requestHeader.originator, req.url, errorResponse.code, req.body, errorResponse.body);
  }
}

/**
 * Build response of forwarded calls.
 * @param req
 * @param res
 * @param ret
 * @param startTime
 * @returns {Promise<{headers: Object, code: number, body: {code: number, message: (*|string)}}>}
 */
const handleForwardedResult = async function handleForwardedResult(req, res, ret, startTime) {
  let responseHeader = await restResponseHeader.createResponseHeader(undefined, startTime, ret.operationName);
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
  let startTime = process.hrtime();

  IndividualPostServices.bequeathYourDataAndDie(req.url, body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.OK;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, ret.operationName);
      responseBuilder.buildResponse(res, response.code, response.message, responseHeader);
      return executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, "MultiDomainInventoryProxy", xoriginator, req.url, responseCode, req.body, response);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime, xCorrelator);
    });
};


module.exports.getCachedActualEquipment = function getCachedActualEquipment(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedActualEquipment(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};


module.exports.getCachedControlConstruct = function getCachedControlConstruct(req, res, next, fields, mountName) {// fields, mountName: parameter order fixed
  let startTime = process.hrtime();

  IndividualGetServices.getCachedControlConstruct(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAirInterfaceCapability = function getCachedAirInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAirInterfaceConfiguration = function getCachedAirInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAirInterfaceHistoricalPerformances = function getCachedAirInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAirInterfaceStatus = function getCachedAirInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAlarmCapability = function getCachedAlarmCapability(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAlarmConfiguration = function getCachedAlarmConfiguration(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedAlarmEventRecords = function getCachedAlarmEventRecords(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmEventRecords(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedCoChannelProfileCapability = function getCachedCoChannelProfileCapability(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCoChannelProfileCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedCoChannelProfileConfiguration = function getCachedCoChannelProfileConfiguration(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCoChannelProfileConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedConnector = function getCachedConnector(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedConnector(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedContainedHolder = function getCachedContainedHolder(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedContainedHolder(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedCurrentAlarms = function getCachedCurrentAlarms(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCurrentAlarms(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedEquipment = function getCachedEquipment(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEquipment(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedEthernetContainerCapability = function getCachedEthernetContainerCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedEthernetContainerConfiguration = function getCachedEthernetContainerConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedEthernetContainerHistoricalPerformances = function getCachedEthernetContainerHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedEthernetContainerStatus = function getCachedEthernetContainerStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedExpectedEquipment = function getCachedExpectedEquipment(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedExpectedEquipment(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedFirmwareCollection = function getCachedFirmwareCollection(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareCollection(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedFirmwareComponentCapability = function getCachedFirmwareComponentCapability(req, res, next, fields, mountName, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedFirmwareComponentList = function getCachedFirmwareComponentList(req, res, next, fields, mountName, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentList(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedFirmwareComponentStatus = function getCachedFirmwareComponentStatus(req, res, next, fields, mountName, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedForwardingConstruct = function getCachedForwardingConstruct(req, res, next, fields, mountName, uuid, uuid1) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingConstruct(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedForwardingConstructPort = function getCachedForwardingConstructPort(req, res, next, fields, mountName, uuid, uuid1, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingConstructPort(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedForwardingDomain = function getCachedForwardingDomain(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingDomain(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedHybridMwStructureCapability = function getCachedHybridMwStructureCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedHybridMwStructureConfiguration = function getCachedHybridMwStructureConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedHybridMwStructureHistoricalPerformances = function getCachedHybridMwStructureHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedHybridMwStructureStatus = function getCachedHybridMwStructureStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedLink = function getCachedLink(req, res, next, fields, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLink(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedLinkPort = function getCachedLinkPort(req, res, next, fields, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLinkPort(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedLogicalTerminationPoint = function getCachedLogicalTerminationPoint(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLogicalTerminationPoint(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedLtpAugment = function getCachedLtpAugment(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLtpAugment(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedMacInterfaceCapability = function getCachedMacInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedMacInterfaceConfiguration = function getCachedMacInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedMacInterfaceHistoricalPerformances = function getCachedMacInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedMacInterfaceStatus = function getCachedMacInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPolicingProfileCapability = function getCachedPolicingProfileCapability(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPolicingProfileCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPolicingProfileConfiguration = function getCachedPolicingProfileConfiguration(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPolicingProfileConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedProfile = function getCachedProfile(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedProfile(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedProfileCollection = function getCachedProfileCollection(req, res, next, fields, mountName) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedProfileCollection(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPureEthernetStructureCapability = function getCachedPureEthernetStructureCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPureEthernetStructureConfiguration = function getCachedPureEthernetStructureConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPureEthernetStructureHistoricalPerformances = function getCachedPureEthernetStructureHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedPureEthernetStructureStatus = function getCachedPureEthernetStructureStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedQosProfileCapability = function getCachedQosProfileCapability(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedQosProfileCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedQosProfileConfiguration = function getCachedQosProfileConfiguration(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedQosProfileConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedSchedulerProfileCapability = function getCachedSchedulerProfileCapability(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedSchedulerProfileCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedSchedulerProfileConfiguration = function getCachedSchedulerProfileConfiguration(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedSchedulerProfileConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedVlanInterfaceCapability = function getCachedVlanInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedVlanInterfaceConfiguration = function getCachedVlanInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedVlanInterfaceHistoricalPerformances = function getCachedVlanInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWireInterfaceCapability = function getCachedWireInterfaceCapability(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWireInterfaceConfiguration = function getCachedWireInterfaceConfiguration(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWireInterfaceHistoricalPerformances = function getCachedWireInterfaceHistoricalPerformances(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceHistoricalPerformances(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWireInterfaceStatus = function getCachedWireInterfaceStatus(req, res, next, fields, mountName, uuid, localId) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceStatus(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWredProfileCapability = function getCachedWredProfileCapability(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWredProfileCapability(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.getCachedWredProfileConfiguration = function getCachedWredProfileConfiguration(req, res, next, fields, mountName, uuid) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWredProfileConfiguration(req.url)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.provideListOfActualDeviceEquipment = function provideListOfActualDeviceEquipment(req, res, next, body) {
  let startTime = process.hrtime();

  IndividualPostServices.provideListOfActualDeviceEquipment(req.url, body)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.provideListOfConnectedDevices = function provideListOfConnectedDevices(req, res, next, body) {
  let startTime = process.hrtime();

  IndividualPostServices.provideListOfConnectedDevices(req.url, body)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.provideListOfDeviceInterfaces = function provideListOfDeviceInterfaces(req, res, next, body) {
  let startTime = process.hrtime();

  IndividualPostServices.provideListOfDeviceInterfaces(req.url, body)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

module.exports.provideListOfParallelLinks = function provideListOfParallelLinks(req, res, next, body) {
  let startTime = process.hrtime();

  IndividualPostServices.provideListOfParallelLinks(req.url, body)
    .then(async function (ret) {
      return handleForwardedResult(req, res, ret, startTime);
    })
    .catch(async function (error) {
      return handleError(error, req, res, startTime);
    });
};

// 4-integrate-logging

// 7-implement-individual-services
