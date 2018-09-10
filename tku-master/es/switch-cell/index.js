
import TkSwitch from '../switch';
import create from '../utils/create';

export default create({
  render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('cell', { class: _vm.b(), attrs: { "center": "", "title": _vm.title, "border": _vm.border } }, [_c('tk-switch', _vm._b({ on: { "input": function input($event) {
          _vm.$emit('input', $event);
        } } }, 'tk-switch', _vm.$props, false))], 1);
  },

  name: 'switch-cell',

  components: {
    TkSwitch: TkSwitch
  },

  props: {
    title: String,
    value: Boolean,
    border: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: '26px'
    }
  },

  watch: {
    value: function value() {
      this.$emit('change', this.value);
    }
  }
});