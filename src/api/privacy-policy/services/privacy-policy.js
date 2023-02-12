'use strict';

/**
 * resume service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::privacy-policy.privacy-policy');
