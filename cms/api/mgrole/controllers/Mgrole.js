'use strict';

/**
 * Mgrole.js controller
 *
 * @description: A set of functions called "actions" for managing `Mgrole`.
 */

module.exports = {

  /**
   * Retrieve mgrole records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.mgrole.search(ctx.query);
    } else {
      return strapi.services.mgrole.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a mgrole record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.mgrole.fetch(ctx.params);
  },

  /**
   * Count mgrole records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.mgrole.count(ctx.query, populate);
  },

  /**
   * Create a/an mgrole record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mgrole.add(ctx.request.body);
  },

  /**
   * Update a/an mgrole record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mgrole.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mgrole record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mgrole.remove(ctx.params);
  }
};
