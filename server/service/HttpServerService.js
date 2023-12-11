'use strict';

const fileOperation = require('onf-core-model-ap/applicationPattern/databaseDriver/JSONDriver');

/**
 * Returns application name
 *
 * returns inline_response_200_83
 * url String
 **/
exports.getHttpServerApplicationName = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:application-name": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns application purpose
 *
 * returns inline_response_200_85
 * url String
 **/
exports.getHttpServerApplicationPurpose = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:application-purpose": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns update period
 *
 * returns inline_response_200_86
 * url String
 **/
exports.getHttpServerDataUpdatePeriode = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:data-update-period": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns owner email address
 *
 * returns inline_response_200_88
 * url String
 **/
exports.getHttpServerOwnerEmailAddress = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:owner-email-address": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns owner name
 *
 * returns inline_response_200_87
 * url String
 **/
exports.getHttpServerOwnerName = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:owner-name": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns list of releases
 *
 * returns inline_response_200_89
 * url String
 **/
exports.getHttpServerReleaseList = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:release-list": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}

/**
 * Returns release number
 *
 * returns inline_response_200_84
 * url String
 **/
exports.getHttpServerReleaseNumber = async function (url) {
  var value = await fileOperation.readFromDatabaseAsync(url);
  var response = {};
  response['application/json'] = {
    "http-server-interface-1-0:release-number": value
  };
  if (Object.keys(response).length > 0) {
    return response[Object.keys(response)[0]];
  }
}
