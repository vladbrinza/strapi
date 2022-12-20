'use strict';

/**
 * staffing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::staffing.staffing');
