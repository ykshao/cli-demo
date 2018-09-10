<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-slider v-model="value1" @change="onChange" />
    </demo-block>

    <demo-block title="指定选择范围">
      <tk-slider
        v-model="value2"
        :min="10"
        :max="90"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="禁用">
      <tk-slider v-model="value3" disabled />
    </demo-block>

    <demo-block title="指定步长">
      <tk-slider
        v-model="value4"
        :step="10"
        bar-height="4px"
        @change="onChange"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value1: 50,
      value2: 50,
      value3: 50,
      value4: 50
    };
  },

  methods: {
    onChange(value) {
      this.$toast('当前值：' + value);
    }
  }
};
</script>

<style lang="postcss">
.demo-slider {
  user-select: none;

  .tk-slider {
    margin: 0 15px 30px;
  }
}
</style>
