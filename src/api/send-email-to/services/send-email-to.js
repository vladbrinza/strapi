'use strict';

/**
 * send-email-to service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send-email-to.send-email-to');
