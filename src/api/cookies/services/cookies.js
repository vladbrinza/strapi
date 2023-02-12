'use strict';

/**
 * cookies service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cookies.cookies');
