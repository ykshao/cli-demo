<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-radio-group v-model="radio1" class="demo-radio-group">
        <tk-radio name="1">单选框 1</tk-radio>
        <tk-radio name="2">单选框 2</tk-radio>
      </tk-radio-group>
    </demo-block>

    <demo-block title="禁用状态">
      <tk-radio-group v-model="radio2" class="demo-radio-group" disabled>
        <tk-radio name="1">单选框 1</tk-radio>
        <tk-radio name="2">单选框 2</tk-radio>
      </tk-radio-group>
    </demo-block>

    <demo-block title="与 Cell 组件一起使用">
      <tk-radio-group v-model="radio3">
        <tk-cell-group>
          <tk-cell :title="'单选框' + 1" clickable @click="radio3 = '1'">
            <tk-radio name="1" />
          </tk-cell>
          <tk-cell :title="'单选框' + 2" clickable @click="radio3 = '2'">
            <tk-radio name="2" />
          </tk-cell>
        </tk-cell-group>
      </tk-radio-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: '1'
    };
  }
};
</script>

<style lang="postcss">
.demo-radio {
  &-group {
    padding: 0 17px;

    .tk-radio {
      margin-bottom: 10px;
    }
  }
}
</style>
