'use strict';

/**
 * app-send-and-receive-payment service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-send-and-receive-payment.app-send-and-receive-payment');
