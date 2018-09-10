<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-stepper v-model="stepper1" />
    </demo-block>

    <demo-block title="禁用状态">
      <tk-stepper v-model="stepper1" disabled />
    </demo-block>

    <demo-block title="高级用法">
      <tk-stepper
        v-model="stepper2"
        integer
        :min="5"
        :max="40"
        :step="2"
        :default-value="9"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      stepper1: 1,
      stepper2: null
    };
  }
};
</script>

<style lang="postcss">
.demo-stepper {
  .tk-stepper {
    margin-left: 15px;
  }
}
</style>
