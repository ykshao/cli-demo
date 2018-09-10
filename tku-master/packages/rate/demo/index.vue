<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-rate v-model="value1" />
    </demo-block>

    <demo-block title="自定义颜色">
      <tk-rate
        v-model="value2"
        :size="25"
        :count="6"
        color="#2ba"
        void-color="#ceefe8"
      />
    </demo-block>

    <demo-block title="禁用状态">
      <tk-rate disabled v-model="value3" />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      value1: 3,
      value2: 4,
      value3: 2
    };
  }
};
</script>

<style lang="postcss">
.demo-rate {
  .tk-rate {
    margin-left: 15px;
  }
}
</style>
