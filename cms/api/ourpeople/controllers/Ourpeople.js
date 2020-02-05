'use strict';

/**
 * Ourpeople.js controller
 *
 * @description: A set of functions called "actions" for managing `Ourpeople`.
 */

module.exports = {

  /**
   * Retrieve ourpeople records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.ourpeople.search(ctx.query);
    } else {
      return strapi.services.ourpeople.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a ourpeople record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ourpeople.fetch(ctx.params);
  },

  /**
   * Count ourpeople records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.ourpeople.count(ctx.query, populate);
  },

  /**
   * Create a/an ourpeople record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ourpeople.add(ctx.request.body);
  },

  /**
   * Update a/an ourpeople record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ourpeople.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ourpeople record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ourpeople.remove(ctx.params);
  }
};
