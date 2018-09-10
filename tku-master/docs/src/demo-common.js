/**
 * Demo Common Mixin && i18n
 */

import Vue from 'vue';
import Tku, { Lazyload } from '../../packages';
import VantDoc, { DemoBlock, DemoSection } from 'vant-doc';
import VueRouter from 'vue-router';

Vue
  .use(Tku)
  .use(VantDoc)
  .use(VueRouter)
  .use(Lazyload, {
    lazyComponent: true
  });

Vue.component('demo-block', DemoBlock);
Vue.component('demo-section', DemoSection);

export function wrapper(promise, name) {
  return promise.then(component => {
    component = component.default;
    name = 'demo-' + name;
    component.name = name;
    return component;
  });
}
