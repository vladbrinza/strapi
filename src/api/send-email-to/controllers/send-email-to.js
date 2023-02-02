'use strict';

/**
 * send-email-to controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-email-to.send-email-to');
