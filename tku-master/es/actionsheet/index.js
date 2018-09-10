
import create from '../utils/create';
import Popup from '../mixins/popup';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('transition', { attrs: { "name": "tk-slide-bottom" } }, [_vm.shouldRender ? _c('div', { directives: [{ name: "show", rawName: "v-show", value: _vm.value, expression: "value" }], class: _vm.b({ 'withtitle': _vm.title }) }, [_vm.title ? _c('div', { staticClass: "tk-hairline--top-bottom", class: _vm.b('header') }, [_c('div', { domProps: { "textContent": _vm._s(_vm.title) } }), _c('icon', { attrs: { "name": "close" }, on: { "click": _vm.onCancel } })], 1) : _c('ul', { staticClass: "tk-hairline--bottom" }, _vm._l(_vm.actions, function (item) {
      return _c('li', { class: [_vm.b('item', { disabled: item.disabled }), item.className, 'tk-hairline--top'], on: { "click": function click($event) {
            $event.stopPropagation();_vm.onClickItem(item);
          } } }, [!item.loading ? [_c('span', { class: _vm.b('name') }, [_vm._v(_vm._s(item.name))]), item.subname ? _c('span', { class: _vm.b('subname') }, [_vm._v(_vm._s(item.subname))]) : _vm._e()] : _c('loading', { class: _vm.b('loading'), attrs: { "size": "20px" } })], 2);
    })), _vm.cancelText ? _c('div', { class: [_vm.b('cancel'), 'tk-hairline--top'], domProps: { "textContent": _vm._s(_vm.cancelText) }, on: { "click": _vm.onCancel } }) : _c('div', { class: _vm.b('content') }, [_vm._t("default")], 2)]) : _vm._e()]);
  },

  name: 'actionsheet',

  mixins: [Popup],

  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    overlay: {
      type: Boolean,
      default: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClickItem: function onClickItem(item) {
      if (item.callback && !item.disabled) {
        item.callback(item);
      }
    },
    onCancel: function onCancel() {
      this.$emit('input', false);
      this.$emit('cancel');
    }
  }
});