'use strict';

/**
 * Ourproject.js controller
 *
 * @description: A set of functions called "actions" for managing `Ourproject`.
 */

module.exports = {

  /**
   * Retrieve ourproject records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.ourproject.search(ctx.query);
    } else {
      return strapi.services.ourproject.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a ourproject record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.ourproject.fetch(ctx.params);
  },

  /**
   * Count ourproject records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.ourproject.count(ctx.query, populate);
  },

  /**
   * Create a/an ourproject record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.ourproject.add(ctx.request.body);
  },

  /**
   * Update a/an ourproject record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.ourproject.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an ourproject record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.ourproject.remove(ctx.params);
  }
};
