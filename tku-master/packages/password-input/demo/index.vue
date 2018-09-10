<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-password-input
        :value="value"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
      />

      <tk-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value: '123',
      showKeyboard: true
    };
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>
