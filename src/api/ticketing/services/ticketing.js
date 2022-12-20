'use strict';

/**
 * ticketing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ticketing.ticketing');
