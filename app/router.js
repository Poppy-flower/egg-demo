'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/detail2/:id', controller.product.detail2);
  router.post('/product/create', controller.product.create);
  router.put('/product/update/:id', controller.product.update);
  router.delete('/product/delete/:id', controller.product.delete);
};
