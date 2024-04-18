'use strict';
const provideListRequestHandler = require('./individualServices/ProvideListRequestHandler');


/**
 * Provides ControlConstruct from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedControlConstruct = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedControlConstructCausesReadingFromCache');
}


/**
 * Provides AirInterfaceCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAirInterfaceCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides AirInterfaceConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAirInterfaceConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides AirInterfaceHistoricalPerformances from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAirInterfaceHistoricalPerformances = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides AirInterfaceStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAirInterfaceStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAirInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides AlarmCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAlarmCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmCapabilityCausesReadingFromCache');
}


/**
 * Provides AlarmConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAlarmConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmConfigurationCausesReadingFromCache');
}


/**
 * Provides AlarmEventRecords from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedAlarmEventRecords = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedAlarmEventRecordsCausesReadingFromCache');
}


/**
 * Provides CoChannelProfileCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedCoChannelProfileCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCoChannelProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides CoChannelProfileConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedCoChannelProfileConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCoChannelProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides Connector from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedConnector = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedConnectorCausesReadingFromCache');
}


/**
 * Provides ContainedHolder from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedContainedHolder = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedContainedHolderCausesReadingFromCache');
}


/**
 * Provides CurrentAlarms from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedCurrentAlarms = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedCurrentAlarmsCausesReadingFromCache');
}


/**
 * Provides Equipment from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedEquipment = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEquipmentCausesReadingFromCache');
}


/**
 * Provides EthernetContainerCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedEthernetContainerCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerCapabilityCausesReadingFromCache');
}


/**
 * Provides EthernetContainerConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedEthernetContainerConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerConfigurationCausesReadingFromCache');
}


/**
 * Provides EthernetContainerHistoricalPerformances from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedEthernetContainerHistoricalPerformances = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides EthernetContainerStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedEthernetContainerStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedEthernetContainerStatusCausesReadingFromCache');
}


/**
 * Provides ExpectedEquipment from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedExpectedEquipment = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedExpectedEquipmentCausesReadingFromCache');
}


/**
 * Provides FirmwareCollection from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedFirmwareCollection = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareCollectionCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedFirmwareComponentCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentCapabilityCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentList from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedFirmwareComponentList = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentListCausesReadingFromCache');
}


/**
 * Provides FirmwareComponentStatus from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedFirmwareComponentStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedFirmwareComponentStatusCausesReadingFromCache');
}


/**
 * Provides ForwardingConstruct from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * uuid1 String Another instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedForwardingConstruct = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingConstructCausesReadingFromCache');
}


/**
 * Provides ForwardingConstructPort from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * uuid1 String Another instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedForwardingConstructPort = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingConstructPortCausesReadingFromCache');
}


/**
 * Provides ForwardingDomain from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedForwardingDomain = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedForwardingDomainCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedHybridMwStructureCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureCapabilityCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedHybridMwStructureConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureConfigurationCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureHistoricalPerformances from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedHybridMwStructureHistoricalPerformances = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides HybridMwStructureStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedHybridMwStructureStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedHybridMwStructureStatusCausesReadingFromCache');
}


/**
 * Provides Link from cache
 *
 * contained in requestUrl:
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedLink = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLinkCausesReadingFromCache');
}


/**
 * Provides LinkPort from cache
 *
 * contained in requestUrl:
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedLinkPort = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLinkPortCausesReadingFromCache');
}


/**
 * Provides LogicalTerminationPoint from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedLogicalTerminationPoint = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLogicalTerminationPointCausesReadingFromCache');
}


/**
 * Provides LtpAugment from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedLtpAugment = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedLtpAugmentPacCausesReadingFromCache');
}


/**
 * Provides MacInterfaceCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedMacInterfaceCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides MacInterfaceConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedMacInterfaceConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides MacInterfaceStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedMacInterfaceStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedMacInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides PolicingProfileCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPolicingProfileCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPolicingProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides PolicingProfileConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPolicingProfileConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPolicingProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides Profile from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedProfile = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedProfileCausesReadingFromCache');
}


/**
 * Provides ProfileCollection from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedProfileCollection = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedProfileCollectionCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPureEthernetStructureCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureCapabilityCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPureEthernetStructureConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureConfigurationCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureHistoricalPerformances from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPureEthernetStructureHistoricalPerformances = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides PureEthernetStructureStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedPureEthernetStructureStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedPureEthernetStructureStatusCausesReadingFromCache');
}


/**
 * Provides QosProfileCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedQosProfileCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedQosProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides QosProfileConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedQosProfileConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedQosProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides SchedulerProfileCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedSchedulerProfileCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedSchedulerProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides SchedulerProfileConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedSchedulerProfileConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedSchedulerProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides VlanInterfaceCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedVlanInterfaceCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedVlanInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides VlanInterfaceConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedVlanInterfaceConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedVlanInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides WireInterfaceCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWireInterfaceCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceCapabilityCausesReadingFromCache');
}


/**
 * Provides WireInterfaceConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWireInterfaceConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceConfigurationCausesReadingFromCache');
}


/**
 * Provides WireInterfaceHistoricalPerformances from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWireInterfaceHistoricalPerformances = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceHistoricalPerformancesCausesReadingFromCache');
}


/**
 * Provides WireInterfaceStatus from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * localId String Instance identifier that is unique within its list
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWireInterfaceStatus = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWireInterfaceStatusCausesReadingFromCache');
}


/**
 * Provides WredProfileCapability from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWredProfileCapability = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWredProfileCapabilityCausesReadingFromCache');
}


/**
 * Provides WredProfileConfiguration from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedWredProfileConfiguration = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedWredProfileConfigurationCausesReadingFromCache');
}


/**
 * Provides ActualEquipment from cache
 *
 * contained in requestUrl:
 * mountName String The mountName of the device that is addressed by the request
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter resources according to RFC8040 fields filter spec (optional)
 **/
exports.getCachedActualEquipment = function (requestUrl) {
    return provideListRequestHandler.getDataFromMWDI(requestUrl, 'RequestForCachedActualEquipmentCausesReadingFromCache');
}
