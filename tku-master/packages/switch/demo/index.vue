<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-switch v-model="checked" />
    </demo-block>

    <demo-block title="禁用状态">
      <tk-switch v-model="checked" disabled />
    </demo-block>

    <demo-block title="加载状态">
      <tk-switch v-model="checked" loading />
    </demo-block>

    <demo-block title="高级用法">
      <tk-switch :value="checked2" size="36px" @input="onInput" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checked2: true
    };
  },

  methods: {
    onInput(checked) {
      this.$dialog.confirm({
        title: '提醒',
        message: '是否切换开关？'
      }).then(() => {
        this.checked2 = checked;
      });
    }
  }
};
</script>

<style lang="postcss">
.demo-switch {
  .tk-switch {
    margin: 0 15px;
  }
}
</style>
