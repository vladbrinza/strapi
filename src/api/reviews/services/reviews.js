'use strict';

/**
 * reviews service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reviews.reviews');
