'use strict';
const provideListRequestHandler = require('./individualServices/ProvideListRequestHandler');


/**
 * Provides ControlConstruct from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_4
 **/
exports.getCachedControlConstruct = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedControlConstructCausesReadingFromCache');
}


/**
 * Provides AirInterfaceCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_37
 **/
exports.getCachedAirInterfaceCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides AirInterfaceConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_38
 **/
exports.getCachedAirInterfaceConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides AirInterfaceHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_40
 **/
exports.getCachedAirInterfaceHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides AirInterfaceStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_39
 **/
exports.getCachedAirInterfaceStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides AlarmCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_5
 **/
exports.getCachedAlarmCapability = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmCapabilityCausesReadingFromCache');
}


/**
 * Provides AlarmConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_6
 **/
exports.getCachedAlarmConfiguration = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmConfigurationCausesReadingFromCache');
}


/**
 * Provides AlarmEventRecords from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_8
 **/
exports.getCachedAlarmEventRecords = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmEventRecordsCausesReadingFromCache');
}


/**
 * Provides CoChannelProfileCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_20
 **/
exports.getCachedCoChannelProfileCapability = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCoChannelProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides CoChannelProfileConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_21
 **/
exports.getCachedCoChannelProfileConfiguration = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCoChannelProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides Connector from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_10
 **/
exports.getCachedConnector = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedConnectorCausesReadingFromCache');
}


/**
 * Provides ContainedHolder from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_11
 **/
exports.getCachedContainedHolder = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedContainedHolderCausesReadingFromCache');
}


/**
 * Provides CurrentAlarms from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_7
 **/
exports.getCachedCurrentAlarms = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCurrentAlarmsCausesReadingFromCache');
}


/**
 * Provides Equipment from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_9
 **/
exports.getCachedEquipment = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEquipmentCausesReadingFromCache');
}


/**
 * Provides EthernetContainerCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_41
 **/
exports.getCachedEthernetContainerCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerCapabilityCausesReadingFromCache');
}


/**
 * Provides EthernetContainerConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_42
 **/
exports.getCachedEthernetContainerConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerConfigurationCausesReadingFromCache');
}


/**
 * Provides EthernetContainerHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_44
 **/
exports.getCachedEthernetContainerHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides EthernetContainerStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_43
 **/
exports.getCachedEthernetContainerStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerStatusCausesReadingFromCache');
}


/**
 * Provides ExpectedEquipment from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_12
 **/
exports.getCachedExpectedEquipment = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedExpectedEquipmentCausesReadingFromCache');
}


/**
 * Provides FirmwareCollection from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_14
 **/
exports.getCachedFirmwareCollection = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareCollectionCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_16
 **/
exports.getCachedFirmwareComponentCapability = function (requestUrl, mountName, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentCapabilityCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentList from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_15
 **/
exports.getCachedFirmwareComponentList = function (requestUrl, mountName, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentListCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_17
 **/
exports.getCachedFirmwareComponentStatus = function (requestUrl, mountName, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentStatusCausesReadingFromCache');
}


/**
 * Provides ForwardingConstruct from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * uuid1 String Another instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_33
 **/
exports.getCachedForwardingConstruct = function (requestUrl, mountName, uuid, uuid1, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingConstructCausesReadingFromCache');
}


/**
 * Provides ForwardingConstructPort from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * uuid1 String Another instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_34
 **/
exports.getCachedForwardingConstructPort = function (requestUrl, mountName, uuid, uuid1, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingConstructPortCausesReadingFromCache');
}


/**
 * Provides ForwardingDomain from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_32
 **/
exports.getCachedForwardingDomain = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingDomainCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_45
 **/
exports.getCachedHybridMwStructureCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureCapabilityCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_46
 **/
exports.getCachedHybridMwStructureConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureConfigurationCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_48
 **/
exports.getCachedHybridMwStructureHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_47
 **/
exports.getCachedHybridMwStructureStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureStatusCausesReadingFromCache');
}


/**
 * Provides Link from cache
 *
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_35
 **/
exports.getCachedLink = function (requestUrl, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLinkCausesReadingFromCache');
}


/**
 * Provides LinkPort from cache
 *
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_36
 **/
exports.getCachedLinkPort = function (requestUrl, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLinkPortCausesReadingFromCache');
}


/**
 * Provides LogicalTerminationPoint from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_30
 **/
exports.getCachedLogicalTerminationPoint = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLogicalTerminationPointCausesReadingFromCache');
}


/**
 * Provides LtpAugment from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_31
 **/
exports.getCachedLtpAugment = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLtpAugmentPacCausesReadingFromCache');
}


/**
 * Provides MacInterfaceCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_49
 **/
exports.getCachedMacInterfaceCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides MacInterfaceConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_50
 **/
exports.getCachedMacInterfaceConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides MacInterfaceHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_52
 **/
exports.getCachedMacInterfaceHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides MacInterfaceStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_51
 **/
exports.getCachedMacInterfaceStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides PolicingProfileCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_22
 **/
exports.getCachedPolicingProfileCapability = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPolicingProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides PolicingProfileConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_23
 **/
exports.getCachedPolicingProfileConfiguration = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPolicingProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides Profile from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_19
 **/
exports.getCachedProfile = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedProfileCausesReadingFromCache');
}


/**
 * Provides ProfileCollection from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_18
 **/
exports.getCachedProfileCollection = function (requestUrl, mountName, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedProfileCollectionCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_53
 **/
exports.getCachedPureEthernetStructureCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureCapabilityCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_54
 **/
exports.getCachedPureEthernetStructureConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureConfigurationCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_56
 **/
exports.getCachedPureEthernetStructureHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_55
 **/
exports.getCachedPureEthernetStructureStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureStatusCausesReadingFromCache');
}


/**
 * Provides QosProfileCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_24
 **/
exports.getCachedQosProfileCapability = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedQosProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides QosProfileConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_25
 **/
exports.getCachedQosProfileConfiguration = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedQosProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides SchedulerProfileCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_26
 **/
exports.getCachedSchedulerProfileCapability = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedSchedulerProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides SchedulerProfileConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_27
 **/
exports.getCachedSchedulerProfileConfiguration = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedSchedulerProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides VlanInterfaceCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_57
 **/
exports.getCachedVlanInterfaceCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedVlanInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides VlanInterfaceConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_58
 **/
exports.getCachedVlanInterfaceConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedVlanInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides VlanInterfaceHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_59
 **/
exports.getCachedVlanInterfaceHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedVlanInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides WireInterfaceCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_60
 **/
exports.getCachedWireInterfaceCapability = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides WireInterfaceConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_61
 **/
exports.getCachedWireInterfaceConfiguration = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides WireInterfaceHistoricalPerformances from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_63
 **/
exports.getCachedWireInterfaceHistoricalPerformances = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides WireInterfaceStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_62
 **/
exports.getCachedWireInterfaceStatus = function (requestUrl, mountName, uuid, localId, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides WredProfileCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_28
 **/
exports.getCachedWredProfileCapability = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWredProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides WredProfileConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_29
 **/
exports.getCachedWredProfileConfiguration = function (requestUrl, mountName, uuid, fields) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWredProfileConfigurationCausesReadingFromCache');
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
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedActualEquipmentCausesReadingFromCache');
}