<template>
  <demo-section>
    <demo-block title="默认样式">
      <tk-button @touchstart.native.stop="keyboard = 'default'">
        弹出默认键盘
      </tk-button>

      <tk-number-keyboard
        :show="keyboard === 'default'"
        close-button-text="完成"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>

    <demo-block title="自定义样式">
      <tk-button @touchstart.native.stop="keyboard = 'custom'">
        弹出自定义键盘
      </tk-button>

      <tk-number-keyboard
        :show="keyboard === 'custom'"
        close-button-text="完成"
        theme="custom"
        extra-key="."
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      keyboard: 'default'
    };
  },

  methods: {
    onInput(value) {
      this.$toast('Input: ' + value);
    },
    onDelete() {
      this.$toast('Delete');
    }
  }
};
</script>

<style lang="postcss">
.demo-number-keyboard {
  .tk-button {
    margin-left: 15px;
  }
}
</style>
