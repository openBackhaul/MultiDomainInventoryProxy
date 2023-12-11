'use strict';
const bequeathHandler = require('./individualServices/BequeathHandler');
const logger = require('./LoggingService.js').getLogger();
const provideListRequestHandler = require('./individualServices/ProvideListRequestHandler');


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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "air-interface-2-0:air-interface-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "air-interface-2-0:air-interface-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "air-interface-2-0:air-interface-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "air-interface-2-0:air-interface-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides AlarmCapability from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_5
 **/
exports.getCachedAlarmCapability = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "alarms-1-0:alarm-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides AlarmConfiguration from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_6
 **/
exports.getCachedAlarmConfiguration = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "alarms-1-0:alarm-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides AlarmEventRecords from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_8
 **/
exports.getCachedAlarmEventRecords = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "alarms-1-0:alarm-event-records": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "co-channel-profile-1-0:co-channel-profile-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "co-channel-profile-1-0:co-channel-profile-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:connector": [{
        "local-id": "local-id"
      }, {
        "local-id": "local-id"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:contained-holder": [{
        "local-id": "local-id"
      }, {
        "local-id": "local-id"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides ControlConstruct from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_4
 **/
exports.getCachedControlConstruct = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:control-construct": [{
        "firmware-1-0:firmware-collection": {
          "firmware-component-list": [{
            "local-id": "local-id",
            "firmware-component-pac": {
              "firmware-component-capability": {},
              "firmware-component-status": {}
            }
          }, {
            "local-id": "local-id",
            "firmware-component-pac": {
              "firmware-component-capability": {},
              "firmware-component-status": {}
            }
          }]
        },
        "profile-collection": {
          "profile": ["", ""]
        },
        "alarms-1-0:alarm-pac": {
          "alarm-configuration": {},
          "alarm-event-records": {},
          "current-alarms": {},
          "alarm-capability": {}
        },
        "equipment": [{
          "contained-holder": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "actual-equipment": {},
          "connector": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "expected-equipment": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }, {
          "contained-holder": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "actual-equipment": {},
          "connector": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "expected-equipment": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }],
        "forwarding-domain": [{
          "forwarding-construct": [{
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }, {
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }],
          "uuid": "uuid"
        }, {
          "forwarding-construct": [{
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }, {
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }],
          "uuid": "uuid"
        }],
        "logical-termination-point": [{
          "ltp-augment-1-0:ltp-augment-pac": {},
          "layer-protocol": ["", ""],
          "embedded-clock": [{}, {}],
          "uuid": "uuid"
        }, {
          "ltp-augment-1-0:ltp-augment-pac": {},
          "layer-protocol": ["", ""],
          "embedded-clock": [{}, {}],
          "uuid": "uuid"
        }],
        "uuid": "uuid"
      }, {
        "firmware-1-0:firmware-collection": {
          "firmware-component-list": [{
            "local-id": "local-id",
            "firmware-component-pac": {
              "firmware-component-capability": {},
              "firmware-component-status": {}
            }
          }, {
            "local-id": "local-id",
            "firmware-component-pac": {
              "firmware-component-capability": {},
              "firmware-component-status": {}
            }
          }]
        },
        "profile-collection": {
          "profile": ["", ""]
        },
        "alarms-1-0:alarm-pac": {
          "alarm-configuration": {},
          "alarm-event-records": {},
          "current-alarms": {},
          "alarm-capability": {}
        },
        "equipment": [{
          "contained-holder": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "actual-equipment": {},
          "connector": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "expected-equipment": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }, {
          "contained-holder": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "actual-equipment": {},
          "connector": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "expected-equipment": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }],
        "forwarding-domain": [{
          "forwarding-construct": [{
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }, {
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }],
          "uuid": "uuid"
        }, {
          "forwarding-construct": [{
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }, {
            "fc-port": [{
              "local-id": "local-id"
            }, {
              "local-id": "local-id"
            }],
            "uuid": "uuid"
          }],
          "uuid": "uuid"
        }],
        "logical-termination-point": [{
          "ltp-augment-1-0:ltp-augment-pac": {},
          "layer-protocol": ["", ""],
          "embedded-clock": [{}, {}],
          "uuid": "uuid"
        }, {
          "ltp-augment-1-0:ltp-augment-pac": {},
          "layer-protocol": ["", ""],
          "embedded-clock": [{}, {}],
          "uuid": "uuid"
        }],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides CurrentAlarms from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_7
 **/
exports.getCachedCurrentAlarms = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "alarms-1-0:current-alarms": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:equipment": [{
        "contained-holder": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "actual-equipment": {},
        "connector": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "expected-equipment": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }, {
        "contained-holder": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "actual-equipment": {},
        "connector": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "expected-equipment": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "ethernet-container-2-0:ethernet-container-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "ethernet-container-2-0:ethernet-container-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "ethernet-container-2-0:ethernet-container-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "ethernet-container-2-0:ethernet-container-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:expected-equipment": [{
        "local-id": "local-id"
      }, {
        "local-id": "local-id"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides FirmwareCollection from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_14
 **/
exports.getCachedFirmwareCollection = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firmware-1-0:firmware-collection": {
        "firmware-component-list": [{
          "local-id": "local-id",
          "firmware-component-pac": {
            "firmware-component-capability": {},
            "firmware-component-status": {}
          }
        }, {
          "local-id": "local-id",
          "firmware-component-pac": {
            "firmware-component-capability": {},
            "firmware-component-status": {}
          }
        }]
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firmware-1-0:firmware-component-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firmware-1-0:firmware-component-list": [{
        "local-id": "local-id",
        "firmware-component-pac": {
          "firmware-component-capability": {},
          "firmware-component-status": {}
        }
      }, {
        "local-id": "local-id",
        "firmware-component-pac": {
          "firmware-component-capability": {},
          "firmware-component-status": {}
        }
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firmware-1-0:firmware-component-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:forwarding-construct": [{
        "fc-port": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }, {
        "fc-port": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:fc-port": [{
        "local-id": "local-id"
      }, {
        "local-id": "local-id"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:forwarding-domain": [{
        "forwarding-construct": [{
          "fc-port": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }, {
          "fc-port": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }],
        "uuid": "uuid"
      }, {
        "forwarding-construct": [{
          "fc-port": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }, {
          "fc-port": [{
            "local-id": "local-id"
          }, {
            "local-id": "local-id"
          }],
          "uuid": "uuid"
        }],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "hybrid-mw-structure-2-0:hybrid-mw-structure-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "hybrid-mw-structure-2-0:hybrid-mw-structure-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "hybrid-mw-structure-2-0:hybrid-mw-structure-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "hybrid-mw-structure-2-0:hybrid-mw-structure-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides Link from cache
 *
 * uuid String Instance identifier that is unique within the device
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_35
 **/
exports.getCachedLink = function (requestUrl, uuid, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:link": [{
        "link-port": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }, {
        "link-port": [{
          "local-id": "local-id"
        }, {
          "local-id": "local-id"
        }],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:link-port": [{
        "local-id": "local-id"
      }, {
        "local-id": "local-id"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:logical-termination-point": [{
        "ltp-augment-1-0:ltp-augment-pac": {},
        "layer-protocol": ["", ""],
        "embedded-clock": [{}, {}],
        "uuid": "uuid"
      }, {
        "ltp-augment-1-0:ltp-augment-pac": {},
        "layer-protocol": ["", ""],
        "embedded-clock": [{}, {}],
        "uuid": "uuid"
      }]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "ltp-augment-1-0:ltp-augment-pac": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "mac-interface-1-0:mac-interface-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "mac-interface-1-0:mac-interface-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "mac-interface-1-0:mac-interface-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "mac-interface-1-0:mac-interface-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "policing-profile-1-0:policing-profile-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "policing-profile-1-0:policing-profile-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:profile": ["", ""]
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Provides ProfileCollection from cache
 *
 * mountName String The mountName of the device that is addressed by the request
 * fields String Query parameter to filter ressources according to RFC8040 fields filter spec (optional)
 * returns inline_response_200_18
 **/
exports.getCachedProfileCollection = function (requestUrl, mountName, fields) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "core-model-1-4:profile-collection": {
        "profile": ["", ""]
      }
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "pure-ethernet-structure-2-0:pure-ethernet-structure-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "pure-ethernet-structure-2-0:pure-ethernet-structure-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "pure-ethernet-structure-2-0:pure-ethernet-structure-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "pure-ethernet-structure-2-0:pure-ethernet-structure-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "qos-profile-1-0:qos-profile-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "qos-profile-1-0:qos-profile-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "scheduler-profile-1-0:scheduler-profile-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "scheduler-profile-1-0:scheduler-profile-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "vlan-interface-1-0:vlan-interface-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "vlan-interface-1-0:vlan-interface-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "vlan-interface-1-0:vlan-interface-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wire-interface-2-0:wire-interface-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wire-interface-2-0:wire-interface-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wire-interface-2-0:wire-interface-historical-performances": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wire-interface-2-0:wire-interface-status": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wred-profile-1-0:wred-profile-capability": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
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
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "wred-profile-1-0:wred-profile-configuration": {}
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
