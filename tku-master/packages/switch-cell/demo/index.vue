<template>
  <demo-section>
    <demo-block title="基础用法">
      <tk-cell-group>
        <tk-switch-cell v-model="checked" title="标题" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="禁用状态">
      <tk-cell-group>
        <tk-switch-cell v-model="checked" disabled title="标题" />
      </tk-cell-group>
    </demo-block>

    <demo-block title="加载状态">
      <tk-cell-group>
        <tk-switch-cell v-model="checked" loading title="标题" />
      </tk-cell-group>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
