'use strict';

/**
 * send-email-to router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::send-email-to.send-email-to');
