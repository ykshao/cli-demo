<template>
  <cell center :title="title" :border="border" :class="b()">
    <tk-switch v-bind="$props" @input="$emit('input', $event)" />
  </cell>
</template>

<script>
import TkSwitch from '../switch';
import create from '../utils/create';

export default create({
  name: 'switch-cell',

  components: {
    TkSwitch
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
    value() {
      this.$emit('change', this.value);
    }
  }
});
</script>
