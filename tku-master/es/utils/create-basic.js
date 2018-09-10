/**
 * Create a basic component with common options
 */
import bem from '../mixins/bem';
import { isDef } from './';

var install = function install(Vue) {
  Vue.component(this.name, this);
};

export default function (sfc) {
  sfc.name = 'tk-' + sfc.name;
  sfc.install = sfc.install || install;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(bem);
  sfc.methods = sfc.methods || {};
  sfc.methods.isDef = isDef;

  return sfc;
};