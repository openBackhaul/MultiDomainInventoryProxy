'use strict';

var executionAndTraceService = require('onf-core-model-ap/applicationPattern/services/ExecutionAndTraceService');
var IndividualPostServices = require('../service/IndividualServicesPostService');
var IndividualGetServices = require('../service/IndividualServicesGetService');
var responseBuilder = require('onf-core-model-ap/applicationPattern/rest/server/ResponseBuilder');
var responseCodeEnum = require('onf-core-model-ap/applicationPattern/rest/server/ResponseCode');
var restResponseHeader = require('onf-core-model-ap/applicationPattern/rest/server/ResponseHeader');
var requestUtil = require("../service/individualServices/RequestUtil");

//todo recheck missing header fields in response building - xCorrelator, traceIndicator, user, originator

module.exports.bequeathYourDataAndDie = function bequeathYourDataAndDie(req, res, next, body, user, originator, xCorrelator, traceIndicator, customerJourney) {
  let startTime = process.hrtime();

  IndividualPostServices.bequeathYourDataAndDie(req.url, body, user, originator, xCorrelator, traceIndicator, customerJourney)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedActualEquipment = function getCachedActualEquipment(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualPostServices.getCachedActualEquipment(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAirInterfaceCapability = function getCachedAirInterfaceCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAirInterfaceConfiguration = function getCachedAirInterfaceConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAirInterfaceHistoricalPerformances = function getCachedAirInterfaceHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAirInterfaceStatus = function getCachedAirInterfaceStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAirInterfaceStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAlarmCapability = function getCachedAlarmCapability(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmCapability(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAlarmConfiguration = function getCachedAlarmConfiguration(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmConfiguration(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedAlarmEventRecords = function getCachedAlarmEventRecords(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedAlarmEventRecords(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedCoChannelProfileCapability = function getCachedCoChannelProfileCapability(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCoChannelProfileCapability(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedCoChannelProfileConfiguration = function getCachedCoChannelProfileConfiguration(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCoChannelProfileConfiguration(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedConnector = function getCachedConnector(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedConnector(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedContainedHolder = function getCachedContainedHolder(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedContainedHolder(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedControlConstruct = function getCachedControlConstruct(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedControlConstruct(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedCurrentAlarms = function getCachedCurrentAlarms(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedCurrentAlarms(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedEquipment = function getCachedEquipment(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEquipment(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedEthernetContainerCapability = function getCachedEthernetContainerCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedEthernetContainerConfiguration = function getCachedEthernetContainerConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedEthernetContainerHistoricalPerformances = function getCachedEthernetContainerHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedEthernetContainerStatus = function getCachedEthernetContainerStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedEthernetContainerStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedExpectedEquipment = function getCachedExpectedEquipment(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedExpectedEquipment(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedFirmwareCollection = function getCachedFirmwareCollection(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareCollection(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedFirmwareComponentCapability = function getCachedFirmwareComponentCapability(req, res, next, mountName, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentCapability(req.url, mountName, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedFirmwareComponentList = function getCachedFirmwareComponentList(req, res, next, mountName, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentList(req.url, mountName, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedFirmwareComponentStatus = function getCachedFirmwareComponentStatus(req, res, next, mountName, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedFirmwareComponentStatus(req.url, mountName, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedForwardingConstruct = function getCachedForwardingConstruct(req, res, next, mountName, uuid, uuid1, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingConstruct(req.url, mountName, uuid, uuid1, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedForwardingConstructPort = function getCachedForwardingConstructPort(req, res, next, mountName, uuid, uuid1, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingConstructPort(req.url, mountName, uuid, uuid1, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedForwardingDomain = function getCachedForwardingDomain(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedForwardingDomain(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedHybridMwStructureCapability = function getCachedHybridMwStructureCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedHybridMwStructureConfiguration = function getCachedHybridMwStructureConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedHybridMwStructureHistoricalPerformances = function getCachedHybridMwStructureHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedHybridMwStructureStatus = function getCachedHybridMwStructureStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedHybridMwStructureStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedLink = function getCachedLink(req, res, next, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLink(req.url, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedLinkPort = function getCachedLinkPort(req, res, next, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLinkPort(req.url, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedLogicalTerminationPoint = function getCachedLogicalTerminationPoint(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLogicalTerminationPoint(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedLtpAugment = function getCachedLtpAugment(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedLtpAugment(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedMacInterfaceCapability = function getCachedMacInterfaceCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedMacInterfaceConfiguration = function getCachedMacInterfaceConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedMacInterfaceHistoricalPerformances = function getCachedMacInterfaceHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedMacInterfaceStatus = function getCachedMacInterfaceStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedMacInterfaceStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPolicingProfileCapability = function getCachedPolicingProfileCapability(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPolicingProfileCapability(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPolicingProfileConfiguration = function getCachedPolicingProfileConfiguration(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPolicingProfileConfiguration(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedProfile = function getCachedProfile(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedProfile(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedProfileCollection = function getCachedProfileCollection(req, res, next, mountName, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedProfileCollection(req.url, mountName, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPureEthernetStructureCapability = function getCachedPureEthernetStructureCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPureEthernetStructureConfiguration = function getCachedPureEthernetStructureConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPureEthernetStructureHistoricalPerformances = function getCachedPureEthernetStructureHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedPureEthernetStructureStatus = function getCachedPureEthernetStructureStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedPureEthernetStructureStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedQosProfileCapability = function getCachedQosProfileCapability(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedQosProfileCapability(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedQosProfileConfiguration = function getCachedQosProfileConfiguration(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedQosProfileConfiguration(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedSchedulerProfileCapability = function getCachedSchedulerProfileCapability(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedSchedulerProfileCapability(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedSchedulerProfileConfiguration = function getCachedSchedulerProfileConfiguration(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedSchedulerProfileConfiguration(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedVlanInterfaceCapability = function getCachedVlanInterfaceCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedVlanInterfaceConfiguration = function getCachedVlanInterfaceConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedVlanInterfaceHistoricalPerformances = function getCachedVlanInterfaceHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedVlanInterfaceHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWireInterfaceCapability = function getCachedWireInterfaceCapability(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceCapability(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWireInterfaceConfiguration = function getCachedWireInterfaceConfiguration(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceConfiguration(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWireInterfaceHistoricalPerformances = function getCachedWireInterfaceHistoricalPerformances(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceHistoricalPerformances(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWireInterfaceStatus = function getCachedWireInterfaceStatus(req, res, next, mountName, uuid, localId, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWireInterfaceStatus(req.url, mountName, uuid, localId, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWredProfileCapability = function getCachedWredProfileCapability(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWredProfileCapability(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.getCachedWredProfileConfiguration = function getCachedWredProfileConfiguration(req, res, next, mountName, uuid, fields) {
  let startTime = process.hrtime();

  IndividualGetServices.getCachedWredProfileConfiguration(req.url, mountName, uuid, fields)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.NO_CONTENT;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(xCorrelator, traceIndicator, user, originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.provideListOfActualDeviceEquipment = function provideListOfActualDeviceEquipment(req, res, next, body) {
  let startTime = process.hrtime();

  let requestHeader = requestUtil.createRequestHeader();

  IndividualPostServices.provideListOfActualDeviceEquipment(req.url, body)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.OK;
      let responseHeader = await restResponseHeader.createResponseHeader(null, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(requestHeader.xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.provideListOfConnectedDevices = function provideListOfConnectedDevices(req, res, next, body) {
  let startTime = process.hrtime();

  let requestHeader = requestUtil.createRequestHeader();

  IndividualPostServices.provideListOfConnectedDevices(req.url, body)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.OK;
      let responseHeader = await restResponseHeader.createResponseHeader(null, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(requestHeader.xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.provideListOfDeviceInterfaces = function provideListOfDeviceInterfaces(req, res, next, body) {
  let startTime = process.hrtime();

  let requestHeader = requestUtil.createRequestHeader();

  IndividualPostServices.provideListOfDeviceInterfaces(req.url, body)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.OK;
      let responseHeader = await restResponseHeader.createResponseHeader(null, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(requestHeader.xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    });
};

module.exports.provideListOfParallelLinks = function provideListOfParallelLinks(req, res, next, body) {
  let startTime = process.hrtime();

  let requestHeader = requestUtil.createRequestHeader();

  IndividualPostServices.provideListOfParallelLinks(req.url, body)
    .then(async function (response) {
      let responseCode = responseCodeEnum.code.OK;
      let responseHeader = await restResponseHeader.createResponseHeader(null, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    })
    .catch(async function (response) {
      let responseCode = responseCodeEnum.code.INTERNAL_SERVER_ERROR;
      let responseHeader = await restResponseHeader.createResponseHeader(requestHeader.xCorrelator, startTime, req.url);
      let responseBody = response;
      responseBuilder.buildResponse(res, responseCode, responseBody, responseHeader);
      executionAndTraceService.recordServiceRequest(responseHeader.xCorrelator, requestHeader.traceIndicator, "MultiDomainInventoryProxy", requestHeader.originator, req.url, responseCode, req.body, responseBody);
    });
};

// 4-integrate-logging

// 7-implement-individual-services
