'use strict';

/**
 * Contactus.js controller
 *
 * @description: A set of functions called "actions" for managing `Contactus`.
 */

module.exports = {

  /**
   * Retrieve contactus records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.contactus.search(ctx.query);
    } else {
      return strapi.services.contactus.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a contactus record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.contactus.fetch(ctx.params);
  },

  /**
   * Count contactus records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.contactus.count(ctx.query, populate);
  },

  /**
   * Create a/an contactus record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.contactus.add(ctx.request.body);
  },

  /**
   * Update a/an contactus record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.contactus.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an contactus record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.contactus.remove(ctx.params);
  }
};
